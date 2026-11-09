/* =========================================================
   Ôn thi Mạng máy tính — logic
   Dữ liệu câu hỏi nằm ở questions.js (window.QUIZ_DATA).
   ========================================================= */
(() => {
  'use strict';

  const DATA = window.QUIZ_DATA;
  if (!DATA || !Array.isArray(DATA.questions) || !DATA.questions.length) {
    document.querySelector('.app').textContent = 'Không tải được dữ liệu câu hỏi (questions.js).';
    return;
  }

  const LETTERS = ['A', 'B', 'C', 'D'];
  const TILE_CLASS = ['tile-a', 'tile-b', 'tile-c', 'tile-d'];
  const TIMER_SECONDS = 30;
  const COUNT_OPTIONS = [10, 20, 30, 0]; // 0 = tất cả
  const LONG_OPTION = 70; // số ký tự để coi là đáp án dài
  const STORE_KEY = 'onthi-mmt:v1';
  const PRAISE = ['Chính xác!', 'Đúng rồi!', 'Tuyệt vời!', 'Quá chuẩn!'];
  const TIERS = [
    { min: 90, title: 'Xuất sắc!', note: 'Bạn nắm bài rất chắc.', color: '#4ade80' },
    { min: 70, title: 'Tốt lắm!', note: 'Ôn lại vài câu sai là ổn.', color: '#22d3ee' },
    { min: 50, title: 'Khá ổn', note: 'Xem lại các câu sai bên dưới nhé.', color: '#f0a202' },
    { min: 0, title: 'Cố lên!', note: 'Làm lại các câu sai để nhớ lâu hơn.', color: '#f87171' },
  ];

  const $ = (id) => document.getElementById(id);
  const ui = {
    screens: { start: $('screen-start'), quiz: $('screen-quiz'), result: $('screen-result') },
    totalCount: $('total-count'),
    partCount: $('part-count'),
    partGrid: $('part-grid'),
    countSeg: $('count-seg'),
    optShuffleQ: $('opt-shuffle-q'),
    optShuffleA: $('opt-shuffle-a'),
    optTimer: $('opt-timer'),
    timerLabel: $('timer-label'),
    lastResult: $('last-result'),
    btnStart: $('btn-start'),
    startCount: $('start-count'),
    btnQuit: $('btn-quit'),
    progress: $('progress'),
    progressFill: $('progress-fill'),
    qPos: $('q-pos'),
    qTotal: $('q-total'),
    pillStreak: $('pill-streak'),
    streakN: $('streak-n'),
    scoreN: $('score-n'),
    timer: $('timer'),
    timerFill: $('timer-fill'),
    timerText: $('timer-text'),
    qMeta: $('q-meta'),
    qText: $('q-text'),
    answers: $('answers'),
    feedback: $('feedback'),
    fbIcon: $('fb-icon'),
    fbTitle: $('fb-title'),
    fbDetail: $('fb-detail'),
    btnNext: $('btn-next'),
    btnNextLabel: $('btn-next-label'),
    ring: $('ring'),
    rPercent: $('r-percent'),
    resultTitle: $('result-title'),
    resultSub: $('result-sub'),
    rCorrect: $('r-correct'),
    rWrong: $('r-wrong'),
    rStreak: $('r-streak'),
    rTime: $('r-time'),
    btnRetryWrong: $('btn-retry-wrong'),
    wrongCount: $('wrong-count'),
    btnAgain: $('btn-again'),
    btnHome: $('btn-home'),
    reviewSeg: $('review-seg'),
    reviewList: $('review-list'),
    quitDialog: $('quit-dialog'),
  };

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Lưu trữ cục bộ (không lỗi khi trình duyệt chặn) ---------- */
  const store = {
    read() {
      try {
        return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
      } catch (e) {
        return {};
      }
    },
    write(patch) {
      try {
        localStorage.setItem(STORE_KEY, JSON.stringify({ ...store.read(), ...patch }));
      } catch (e) {
        /* bỏ qua: chế độ ẩn danh hoặc bị chặn */
      }
    },
  };

  /* ---------- Tiện ích ---------- */
  function shuffle(list) {
    const a = list.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function icon(name) {
    const NS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'ic');
    svg.setAttribute('aria-hidden', 'true');
    const use = document.createElementNS(NS, 'use');
    use.setAttribute('href', '#' + name);
    svg.appendChild(use);
    return svg;
  }

  function bump(node) {
    node.classList.remove('bump');
    void node.offsetWidth; // khởi động lại animation
    node.classList.add('bump');
  }

  function formatTime(ms) {
    const s = Math.max(0, Math.round(ms / 1000));
    return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
  }

  function pick(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function showScreen(name) {
    Object.entries(ui.screens).forEach(([key, node]) => {
      node.hidden = key !== name;
    });
    if (name !== 'quiz') ui.feedback.hidden = true;
    document.body.dataset.screen = name;
    window.scrollTo(0, 0);
  }

  /* ---------- Cài đặt ---------- */
  const partById = new Map(DATA.parts.map((p) => [p.id, p]));
  const allPartIds = DATA.parts.map((p) => p.id);

  function loadSettings() {
    const s = store.read().settings || {};
    const parts = Array.isArray(s.parts) ? s.parts.filter((id) => partById.has(id)) : [];
    return {
      parts: parts.length ? parts : allPartIds.slice(),
      count: COUNT_OPTIONS.includes(s.count) ? s.count : 20,
      shuffleQ: typeof s.shuffleQ === 'boolean' ? s.shuffleQ : true,
      shuffleA: typeof s.shuffleA === 'boolean' ? s.shuffleA : true,
      timer: typeof s.timer === 'boolean' ? s.timer : false,
    };
  }

  const settings = loadSettings();
  const saveSettings = () => store.write({ settings });

  const selectedPool = () => DATA.questions.filter((q) => settings.parts.includes(q.part));
  const effectiveCount = (poolSize) =>
    settings.count === 0 ? poolSize : Math.min(settings.count, poolSize);

  /* ---------- Màn hình bắt đầu ---------- */
  function renderParts() {
    ui.partGrid.textContent = '';
    DATA.parts.forEach((p) => {
      const total = DATA.questions.filter((q) => q.part === p.id).length;
      const card = el('label', 'part-card');
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.value = String(p.id);
      input.checked = settings.parts.includes(p.id);
      input.addEventListener('change', () => {
        const next = allPartIds.filter((id) => (id === p.id ? input.checked : settings.parts.includes(id)));
        if (!next.length) {
          // Luôn giữ ít nhất 1 phần được chọn
          input.checked = true;
          card.classList.remove('nudge');
          void card.offsetWidth;
          card.classList.add('nudge');
          return;
        }
        settings.parts = next;
        saveSettings();
        renderSetupState();
      });
      const check = el('span', 'part-check');
      check.setAttribute('aria-hidden', 'true');
      check.appendChild(icon('i-check'));
      card.append(
        input,
        el('span', 'part-roman', 'Phần ' + p.roman),
        el('span', 'part-name', p.label),
        el('span', 'part-n', total + ' câu'),
        check
      );
      ui.partGrid.appendChild(card);
    });
  }

  function renderCountSeg() {
    ui.countSeg.textContent = '';
    COUNT_OPTIONS.forEach((value) => {
      const btn = el('button', 'seg-btn', value === 0 ? 'Tất cả' : String(value));
      btn.type = 'button';
      btn.dataset.count = String(value);
      btn.addEventListener('click', () => {
        settings.count = value;
        saveSettings();
        renderSetupState();
      });
      ui.countSeg.appendChild(btn);
    });
  }

  function renderSetupState() {
    const pool = selectedPool();
    const active = settings.count === 0 || settings.count >= pool.length ? 0 : settings.count;

    ui.partGrid.querySelectorAll('.part-card').forEach((card) => {
      card.classList.toggle('is-on', card.querySelector('input').checked);
    });
    ui.countSeg.querySelectorAll('.seg-btn').forEach((btn) => {
      const value = Number(btn.dataset.count);
      btn.setAttribute('aria-pressed', String(value === active));
      btn.disabled = value !== 0 && value >= pool.length;
      if (value === 0) btn.textContent = 'Tất cả (' + pool.length + ')';
    });
    ui.startCount.textContent = effectiveCount(pool.length);
  }

  function bindToggles() {
    [
      [ui.optShuffleQ, 'shuffleQ'],
      [ui.optShuffleA, 'shuffleA'],
      [ui.optTimer, 'timer'],
    ].forEach(([input, key]) => {
      input.checked = settings[key];
      input.addEventListener('change', () => {
        settings[key] = input.checked;
        saveSettings();
      });
    });
    ui.timerLabel.textContent = TIMER_SECONDS + ' giây/câu';
  }

  function renderLastResult() {
    const last = store.read().last;
    if (!last || !last.total) {
      ui.lastResult.hidden = true;
      return;
    }
    const pct = Math.round((last.correct / last.total) * 100);
    ui.lastResult.textContent = `Lượt gần nhất: đúng ${last.correct}/${last.total} câu (${pct}%)`;
    ui.lastResult.hidden = false;
  }

  function goHome() {
    stopTimer();
    quiz = null;
    renderSetupState();
    renderLastResult();
    showScreen('start');
    ui.btnStart.focus({ preventScroll: true });
  }

  /* ---------- Làm bài ---------- */
  let quiz = null;

  function startQuiz(questions, limit) {
    let list = settings.shuffleQ ? shuffle(questions) : questions.slice().sort((a, b) => a.id - b.id);
    if (limit) list = list.slice(0, limit);
    quiz = {
      deck: list.map((q) => ({ q, order: settings.shuffleA ? shuffle([0, 1, 2, 3]) : [0, 1, 2, 3] })),
      index: 0,
      results: [],
      score: 0,
      streak: 0,
      bestStreak: 0,
      answered: false,
      timed: settings.timer,
      timer: null,
      remaining: 0,
      deadline: 0,
      startedAt: Date.now(),
    };
    updatePills(false);
    showScreen('quiz');
    renderQuestion();
  }

  function startFromSettings() {
    const pool = selectedPool();
    startQuiz(pool, effectiveCount(pool.length));
  }

  function renderQuestion() {
    const item = quiz.deck[quiz.index];
    const total = quiz.deck.length;
    const part = partById.get(item.q.part);
    quiz.answered = false;

    ui.qPos.textContent = quiz.index + 1;
    ui.qTotal.textContent = total;
    ui.progressFill.style.width = (quiz.index / total) * 100 + '%';
    ui.progress.setAttribute('aria-valuemax', String(total));
    ui.progress.setAttribute('aria-valuenow', String(quiz.index + 1));
    ui.progress.setAttribute('aria-valuetext', `Câu ${quiz.index + 1} trên ${total}`);

    ui.qMeta.textContent = `Phần ${part ? part.roman : '?'} · Câu ${item.q.id}`;
    ui.qText.textContent = item.q.q;

    // Chạy lại animation của thẻ câu hỏi
    const card = ui.qText.parentElement;
    card.style.animation = 'none';
    void card.offsetWidth;
    card.style.animation = '';

    ui.answers.textContent = '';
    ui.answers.classList.toggle('is-long', item.q.options.some((o) => o.length > LONG_OPTION));
    item.order.forEach((optionIndex, pos) => {
      const tile = el('button', 'tile ' + TILE_CLASS[pos]);
      tile.type = 'button';
      const key = el('span', 'tile-key', LETTERS[pos]);
      key.setAttribute('aria-hidden', 'true');
      const text = el('span', 'tile-text', item.q.options[optionIndex]);
      const mark = el('span', 'tile-icon');
      mark.setAttribute('aria-hidden', 'true');
      tile.setAttribute('aria-label', `${LETTERS[pos]}. ${item.q.options[optionIndex]}`);
      tile.append(key, text, mark);
      tile.addEventListener('click', () => choose(pos));
      ui.answers.appendChild(tile);
    });

    ui.feedback.hidden = true;
    window.scrollTo(0, 0);
    ui.qText.focus({ preventScroll: true });
    startTimer();
  }

  function choose(pos) {
    if (!quiz || quiz.answered) return;
    reveal(pos);
  }

  /** pos = vị trí ô người dùng chọn, null = hết giờ */
  function reveal(pos) {
    quiz.answered = true;
    stopTimer();

    const item = quiz.deck[quiz.index];
    const correctPos = item.order.indexOf(item.q.answer);
    const isCorrect = pos === correctPos;
    quiz.results.push({ q: item.q, chosen: pos == null ? null : item.order[pos], correct: isCorrect });

    if (isCorrect) {
      quiz.score += 1;
      quiz.streak += 1;
      quiz.bestStreak = Math.max(quiz.bestStreak, quiz.streak);
    } else {
      quiz.streak = 0;
    }

    Array.from(ui.answers.children).forEach((tile, i) => {
      tile.disabled = true;
      const mark = tile.querySelector('.tile-icon');
      if (i === correctPos) {
        tile.classList.add('is-correct');
        mark.appendChild(icon('i-check'));
      } else if (i === pos) {
        tile.classList.add('is-wrong');
        mark.appendChild(icon('i-x'));
      } else {
        tile.classList.add('is-dim');
      }
      if (i === pos) tile.classList.add('is-chosen');
    });

    updatePills(true);
    ui.progressFill.style.width = ((quiz.index + 1) / quiz.deck.length) * 100 + '%';
    showFeedback(isCorrect, pos == null, item, correctPos);
  }

  function showFeedback(isCorrect, timedOut, item, correctPos) {
    const answerText = `${LETTERS[correctPos]}. ${item.q.options[item.q.answer]}`;
    ui.feedback.classList.toggle('is-ok', isCorrect);
    ui.feedback.classList.toggle('is-bad', !isCorrect);
    ui.fbIcon.setAttribute('href', isCorrect ? '#i-check' : timedOut ? '#i-clock' : '#i-x');

    if (isCorrect) {
      ui.fbTitle.textContent = pick(PRAISE);
      ui.fbDetail.textContent =
        quiz.streak >= 2
          ? `${quiz.streak} câu đúng liên tiếp`
          : `Đúng ${quiz.score}/${quiz.index + 1} câu`;
    } else {
      ui.fbTitle.textContent = timedOut ? 'Hết giờ!' : 'Chưa đúng';
      ui.fbDetail.textContent = 'Đáp án đúng: ' + answerText;
    }

    const isLast = quiz.index === quiz.deck.length - 1;
    ui.btnNextLabel.textContent = isLast ? 'Xem kết quả' : 'Câu tiếp';
    ui.feedback.hidden = false;
    ui.btnNext.focus({ preventScroll: true });

    // Đảm bảo ô đáp án đúng không bị thanh phản hồi che (nhất là trên điện thoại)
    const correctTile = ui.answers.children[correctPos];
    if (correctTile) {
      requestAnimationFrame(() =>
        correctTile.scrollIntoView({ block: 'nearest', behavior: reduceMotion ? 'auto' : 'smooth' })
      );
    }
  }

  function updatePills(animate) {
    ui.scoreN.textContent = quiz.score;
    ui.streakN.textContent = quiz.streak;
    ui.pillStreak.classList.toggle('is-hot', quiz.streak >= 3);
    if (animate) {
      const last = quiz.results[quiz.results.length - 1];
      if (last && last.correct) {
        bump(ui.pillStreak.nextElementSibling);
        bump(ui.pillStreak);
      }
    }
  }

  function next() {
    if (!quiz || !quiz.answered) return;
    if (quiz.index < quiz.deck.length - 1) {
      quiz.index += 1;
      renderQuestion();
    } else {
      finish();
    }
  }

  /* ---------- Đồng hồ ---------- */
  function startTimer() {
    stopTimer();
    ui.timer.hidden = !quiz.timed;
    if (!quiz.timed) return;
    quiz.remaining = TIMER_SECONDS * 1000;
    resumeTimer();
  }

  function resumeTimer() {
    if (!quiz || !quiz.timed || quiz.answered || quiz.timer) return;
    quiz.deadline = Date.now() + quiz.remaining;
    tick();
    if (!quiz.answered) quiz.timer = setInterval(tick, 100);
  }

  function pauseTimer() {
    if (!quiz || !quiz.timer) return;
    clearInterval(quiz.timer);
    quiz.timer = null;
    quiz.remaining = Math.max(0, quiz.deadline - Date.now());
  }

  function stopTimer() {
    if (quiz && quiz.timer) {
      clearInterval(quiz.timer);
      quiz.timer = null;
    }
  }

  function tick() {
    const left = Math.max(0, quiz.deadline - Date.now());
    ui.timerFill.style.transform = `scaleX(${left / (TIMER_SECONDS * 1000)})`;
    ui.timerText.textContent = Math.ceil(left / 1000);
    ui.timer.classList.toggle('is-low', left <= 10000);
    if (left <= 0 && !quiz.answered) reveal(null);
  }

  /* ---------- Thoát giữa chừng ---------- */
  function askQuit() {
    if (!quiz) return;
    pauseTimer();
    if (typeof ui.quitDialog.showModal !== 'function') {
      if (window.confirm('Thoát bài đang làm? Kết quả của lượt này sẽ không được lưu.')) goHome();
      else resumeTimer();
      return;
    }
    ui.quitDialog.returnValue = '';
    ui.quitDialog.showModal();
  }

  ui.quitDialog.addEventListener('close', () => {
    if (ui.quitDialog.returnValue === 'quit') goHome();
    else resumeTimer();
  });

  /* ---------- Kết quả ---------- */
  let reviewFilter = 'wrong';

  function finish() {
    stopTimer();
    const total = quiz.deck.length;
    const correct = quiz.score;
    const wrong = total - correct;
    const pct = Math.round((correct / total) * 100);
    const tier = TIERS.find((t) => pct >= t.min);

    store.write({ last: { correct, total, at: Date.now() } });

    ui.resultTitle.textContent = tier.title;
    ui.resultSub.textContent = `Bạn trả lời đúng ${correct} trên ${total} câu. ${tier.note}`;
    ui.rPercent.textContent = pct + '%';
    ui.rCorrect.textContent = correct;
    ui.rWrong.textContent = wrong;
    ui.rStreak.textContent = quiz.bestStreak;
    ui.rTime.textContent = formatTime(Date.now() - quiz.startedAt);
    ui.btnRetryWrong.hidden = wrong === 0;
    ui.wrongCount.textContent = wrong;

    ui.ring.style.setProperty('--ring-color', tier.color);
    ui.ring.style.setProperty('--p', '0');

    reviewFilter = wrong ? 'wrong' : 'all';
    renderReview();
    showScreen('result');

    // Vẽ vòng phần trăm sau khi màn hình hiện ra để có hiệu ứng chạy
    requestAnimationFrame(() => requestAnimationFrame(() => ui.ring.style.setProperty('--p', String(pct))));
    (ui.btnRetryWrong.hidden ? ui.btnAgain : ui.btnRetryWrong).focus({ preventScroll: true });
  }

  function renderReview() {
    ui.reviewSeg.querySelectorAll('.seg-btn').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.filter === reviewFilter));
    });

    const items = quiz.results.filter((r) => reviewFilter === 'all' || !r.correct);
    ui.reviewList.textContent = '';
    if (!items.length) {
      ui.reviewList.appendChild(el('li', 'review-empty', 'Không sai câu nào. Quá đỉnh!'));
      return;
    }

    items.forEach((r) => {
      const part = partById.get(r.q.part);
      const li = el('li', 'rv ' + (r.correct ? 'is-ok' : 'is-bad'));
      li.append(
        el('p', 'rv-meta', `Câu ${r.q.id} · Phần ${part ? part.roman : '?'}`),
        el('p', 'rv-q', r.q.q)
      );
      const rows = el('div', 'rv-rows');
      if (!r.correct) {
        const yours = el('p', 'rv-row is-yours');
        yours.append(
          icon(r.chosen == null ? 'i-clock' : 'i-x'),
          el('span', null, r.chosen == null ? 'Hết giờ, chưa chọn đáp án' : 'Bạn chọn: ' + r.q.options[r.chosen])
        );
        rows.appendChild(yours);
      }
      const right = el('p', 'rv-row is-right');
      right.append(icon('i-check'), el('span', null, 'Đáp án: ' + r.q.options[r.q.answer]));
      rows.appendChild(right);
      li.appendChild(rows);
      ui.reviewList.appendChild(li);
    });
  }

  /* ---------- Bàn phím ---------- */
  document.addEventListener('keydown', (e) => {
    if (!quiz || document.body.dataset.screen !== 'quiz' || ui.quitDialog.open) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const key = e.key.toLowerCase();

    if (key === 'escape') {
      e.preventDefault();
      askQuit();
      return;
    }

    if (!quiz.answered) {
      const digit = ['1', '2', '3', '4'].indexOf(key);
      const pos = digit >= 0 ? digit : ['a', 'b', 'c', 'd'].indexOf(key);
      if (pos >= 0) {
        e.preventDefault();
        choose(pos);
      }
      return;
    }

    if (key === 'enter' || key === ' ' || key === 'arrowright') {
      // Nút "Câu tiếp" đang được focus tự xử lý Enter/Space bằng sự kiện click
      if (e.target === ui.btnNext && key !== 'arrowright') return;
      e.preventDefault();
      next();
    }
  });

  // Tạm dừng đồng hồ khi chuyển sang tab khác
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pauseTimer();
    else if (!ui.quitDialog.open) resumeTimer();
  });

  /* ---------- Khởi động ---------- */
  function init() {
    ui.totalCount.textContent = DATA.questions.length;
    ui.partCount.textContent = DATA.parts.length;
    renderParts();
    renderCountSeg();
    bindToggles();
    renderSetupState();
    renderLastResult();

    ui.btnStart.addEventListener('click', startFromSettings);
    ui.btnNext.addEventListener('click', next);
    ui.btnQuit.addEventListener('click', askQuit);
    ui.btnRetryWrong.addEventListener('click', () => {
      const wrong = quiz.results.filter((r) => !r.correct).map((r) => r.q);
      if (wrong.length) startQuiz(wrong);
    });
    ui.btnAgain.addEventListener('click', startFromSettings);
    ui.btnHome.addEventListener('click', goHome);
    ui.reviewSeg.addEventListener('click', (e) => {
      const btn = e.target.closest('.seg-btn');
      if (!btn || !quiz) return;
      reviewFilter = btn.dataset.filter;
      renderReview();
    });

    showScreen('start');
  }

  init();
})();
