/* Dữ liệu câu hỏi — trích tự động từ De_cuong_on_thi_Mang_may_tinh.docx.
 * answer = vị trí đáp án đúng (0 = a, 1 = b, 2 = c, 3 = d), lấy theo chữ tô đỏ.
 * Ngoại lệ: Câu 14 file gốc tô đỏ "Application", đã sửa thành "Presentation".
 */
window.QUIZ_DATA = {
 "title": "Ôn thi Mạng máy tính",
 "parts": [
  {
   "id": 1,
   "roman": "I",
   "title": "TỔNG QUAN MẠNG, MÔ HÌNH OSI VÀ TCP/IP",
   "label": "Tổng quan, OSI & TCP/IP"
  },
  {
   "id": 2,
   "roman": "II",
   "title": "THIẾT BỊ MẠNG",
   "label": "Thiết bị mạng"
  },
  {
   "id": 3,
   "roman": "III",
   "title": "THIẾT KẾ VÀ TRIỂN KHAI HỆ THỐNG MẠNG",
   "label": "Thiết kế & triển khai mạng"
  },
  {
   "id": 4,
   "roman": "IV",
   "title": "WINDOWS SERVER VÀ CÁC DỊCH VỤ MẠNG",
   "label": "Windows Server & dịch vụ mạng"
  }
 ],
 "questions": [
  {
   "id": 1,
   "part": 1,
   "q": "Giao thức nào sau đây là giao thức cần thiết lập liên kết trước khi truyền dữ liệu?",
   "options": [
    "IP",
    "TCP",
    "UDP",
    "ICMP"
   ],
   "answer": 1
  },
  {
   "id": 2,
   "part": 1,
   "q": "Frame là dữ liệu ở tầng?",
   "options": [
    "Network",
    "Data Link",
    "Physical",
    "Presentation"
   ],
   "answer": 1
  },
  {
   "id": 3,
   "part": 1,
   "q": "Tầng nào cung cấp phương tiện để truyền thông tin qua tầng liên kết vật lý đảm bảo tin cậy?",
   "options": [
    "Physical",
    "Transport",
    "Network",
    "Data Link"
   ],
   "answer": 3
  },
  {
   "id": 4,
   "part": 1,
   "q": "Các giao thức TCP và UDP hoạt động ở tầng nào?",
   "options": [
    "Transport",
    "Presentation",
    "Application",
    "Network"
   ],
   "answer": 0
  },
  {
   "id": 5,
   "part": 1,
   "q": "Các đơn vị dữ liệu giao thức trong lớp 2 của mô hình OSI được gọi là?",
   "options": [
    "CSU",
    "Packet",
    "PDU",
    "Frame"
   ],
   "answer": 3
  },
  {
   "id": 6,
   "part": 1,
   "q": "OSI đ.ược viết tắt bởi cụm từ gì?",
   "options": [
    "Objective System Intergrators",
    "Open Source Initiative",
    "Open System Interconnectional",
    "Open System Interconnection"
   ],
   "answer": 3
  },
  {
   "id": 7,
   "part": 1,
   "q": "Giao thức nào sau đây thuộc tầng giao vận?",
   "options": [
    "TDC",
    "DTP",
    "UDP",
    "UPD"
   ],
   "answer": 2
  },
  {
   "id": 8,
   "part": 1,
   "q": "Mô hình TCP/IP gồm có mấy tầng?",
   "options": [
    "3",
    "4",
    "5",
    "2"
   ],
   "answer": 1
  },
  {
   "id": 9,
   "part": 1,
   "q": "TCP/IP là thuật ngữ viết tắt của cụm từ nào?",
   "options": [
    "Transmission Control Protocol/ Interrnet Protocol",
    "Transfer Control Protocol/ Interrnet Protocol",
    "Transmission Control Protocol/ Interconnection Protocol",
    "Transfer Communication Protocol/ Interrnet Protocol"
   ],
   "answer": 0
  },
  {
   "id": 10,
   "part": 1,
   "q": "Giao thức nào sau đây thực hiện chức năng của tầng giao vận?",
   "options": [
    "ARP",
    "IP",
    "ICMP",
    "TCP"
   ],
   "answer": 3
  },
  {
   "id": 11,
   "part": 1,
   "q": "Đơn vị dữ liệu ở tầng presentation là?",
   "options": [
    "Frame",
    "Packet",
    "Data",
    "Byte"
   ],
   "answer": 2
  },
  {
   "id": 12,
   "part": 1,
   "q": "Mô hình OSI gồm có mấy tầng?",
   "options": [
    "6",
    "8",
    "5",
    "7"
   ],
   "answer": 3
  },
  {
   "id": 13,
   "part": 1,
   "q": "Tầng nào của mô hình OSI có thể giao tiếp trực tiếp với tầng đối diện của hệ thống máy tính khác?",
   "options": [
    "Transport",
    "Physical",
    "Network",
    "Application"
   ],
   "answer": 1
  },
  {
   "id": 14,
   "part": 1,
   "q": "Các chuẩn ASCII, JPEG, TIFF, EBCDIC do tầng nào của mô hình OSI định?",
   "options": [
    "Application",
    "Presentation",
    "Network",
    "Transport"
   ],
   "answer": 1
  },
  {
   "id": 15,
   "part": 1,
   "q": "Chọn cách sắp xếp các tầng trong mô hình OSI theo thứ tự từ thấp -> cao",
   "options": [
    "Physical, DataLink, Presentation, Session",
    "Network, DataLink, Application, Session",
    "Network, Transport, Application, Session",
    "DataLink, Transport, Session, Presentation"
   ],
   "answer": 3
  },
  {
   "id": 16,
   "part": 1,
   "q": "Trong kiến trúc phân tầng mạng, tầng nào có liên kết vật lý?",
   "options": [
    "Tầng n",
    "Tầng 1",
    "Tầng i-1",
    "Tầng i"
   ],
   "answer": 1
  },
  {
   "id": 17,
   "part": 1,
   "q": "Trường thông tin Header Checksum trong cấu trúc gói số liệu IP dùng để làm gì?",
   "options": [
    "Kiểm soát lỗi của dữ liệu truyền thông",
    "Kiểm soát trạng thái xung đột truyền thông xẩy ra trên mạng",
    "Điều khiển lưu lượng",
    "Kiểm soát lỗi kết nối"
   ],
   "answer": 0
  },
  {
   "id": 18,
   "part": 1,
   "q": "Việc thiết lập địa chỉ cổng dịch vụ cho mỗi gói tin TCP nhằm để làm gì?",
   "options": [
    "Để định danh gói tin TCP",
    "Để sắp xếp các gói tin cho đúng thứ tự gửi và nhận",
    "Nhằm để điều khiển truyền thông gói tin",
    "Nhằm để phân loại và sắp xếp, xác định gói tin thuộc về dịch vụ trao đổi thông tin nào."
   ],
   "answer": 3
  },
  {
   "id": 19,
   "part": 1,
   "q": "Trường thông tin Sequence Number trong cấu trúc gói số liệu TCP dùng để làm gì?",
   "options": [
    "Lưu thông tin điều khiển lưu lượng",
    "Lưu mã xử lý lỗi của gói tin",
    "Lưu số thứ tự truyền của các gói tin",
    "Lưu thông tin điều khiển xung đột"
   ],
   "answer": 2
  },
  {
   "id": 20,
   "part": 1,
   "q": "Các máy tính trong mạng Internet giao tiếp với nhau bằng cách nào?",
   "options": [
    "Do có trình biên dịch ngôn ngữ giữa các máy tính",
    "Do cùng sử dụng bộ giao thức TCP/IP",
    "Do sử dụng chung một loại ngôn ngữ là tiếng Anh",
    "Do dùng chung một loại ngôn ngữ gọi là ngôn ngữ siêu văn bản"
   ],
   "answer": 1
  },
  {
   "id": 21,
   "part": 1,
   "q": "Đặc điểm của giao thức TCP là gì?",
   "options": [
    "Truyền các gói dữ liệu theo đúng thứ tự, truyền lại các gói dữ liệu bị mất trên đường truyền",
    "Không có cơ chế xử lý lỗi cho gói tin",
    "Truyền thông tin không tin cậy",
    "Không truyền lại các gói dữ liệu bị lỗi"
   ],
   "answer": 0
  },
  {
   "id": 22,
   "part": 1,
   "q": "Nguyên nhân nào gây ra việc hai máy tính (kết nối vật lý đã thông) trong mạng không thể trao đổi thông tin với nhau?",
   "options": [
    "Do hai máy tính cài đặt hai hệ điều hành khác nhau?",
    "Do hai máy tính đặt địa chỉ IP khác nhau. Một máy đặt địa chỉ IP là 10.0.0.1, một máy khác đặt địa chỉ IP là 10.0.0.2 (Subnet Mask cả 2 máy là: 255.0.0.0)",
    "Do hai máy tính đó có cấu hình phần cứng khác nhau",
    "Do hai máy tính không được cài đặt cùng giao thức trao đổi thông tin"
   ],
   "answer": 3
  },
  {
   "id": 23,
   "part": 1,
   "q": "Giao thức nào sau đây là giao thức không có kết nối?",
   "options": [
    "IP, TCP, UDP",
    "UDP, TCP, ARP",
    "UDP, ICMP, IP",
    "ICMP, TCP, UDP"
   ],
   "answer": 2
  },
  {
   "id": 24,
   "part": 1,
   "q": "Giao thức nào được sử dụng để thông báo lỗi liên quan đến IP?",
   "options": [
    "SMTP",
    "SMTP",
    "ICMP",
    "RTMP"
   ],
   "answer": 2
  },
  {
   "id": 25,
   "part": 1,
   "q": "Nội dung của một gói tin bao gồm:",
   "options": [
    "Địa chỉ người nhận, địa chỉ người gửi, tên người giao dịch, ngày giờ gửi",
    "Địa chỉ người nhận, địa chỉ người gửi",
    "Địa chỉ người nhận, địa chỉ người gửi, độ dài, thông tin kiểm soát lỗi",
    "Địa chỉ người nhận, địa chỉ người gửi, dữ liệu, độ dài, thông tin kiểm soát lỗi và các thông tin phục vụ khác"
   ],
   "answer": 3
  },
  {
   "id": 26,
   "part": 1,
   "q": "Giao thức TCP/IP là gì?",
   "options": [
    "Là một bộ giao thức cho phép LAN kết nối với WAN",
    "Là một bộ giao thức cho phép truyền thông dữ liệu thông qua nhiều mạng khác nhau.",
    "Là một bộ giao thức cho phép WAN kết nối với WAN",
    "Là một bộ giao thức cho phép LAN kết nối với LAN"
   ],
   "answer": 1
  },
  {
   "id": 27,
   "part": 1,
   "q": "Việc định nghĩa địa chỉ IP tại tầng mạng có ý nghĩa gì?",
   "options": [
    "Không có ý nghĩa gì cả",
    "Nhằm đảm bảo an ninh mạng máy tính",
    "Để các máy tính trong một mạng có thể trao đổi thông tin với nhau",
    "Để định danh một máy tính trên mạng và cho phép các máy tính trong liên mạng có thể trao đổi thông tin với nhau"
   ],
   "answer": 3
  },
  {
   "id": 28,
   "part": 1,
   "q": "Giao thức phân giải địa chỉ IP thành địa chỉ MAC?",
   "options": [
    "NetBIOS",
    "ARP",
    "TCP",
    "DNS"
   ],
   "answer": 1
  },
  {
   "id": 29,
   "part": 1,
   "q": "Kiến trúc của mô hình TCP/IP bao gồm các tầng",
   "options": [
    "Application, Transport, Internet, Network interface",
    "Application, Transport, Data link, Network interface",
    "Application, Presentation, Transport, Network interface",
    "Application, Session, Transport, Physical"
   ],
   "answer": 0
  },
  {
   "id": 30,
   "part": 1,
   "q": "Trường thông tin Checksum trong cấu trúc gói số liệu TCP dùng để làm gì?",
   "options": [
    "Lưu thông tin điều khiển lưu lượng",
    "Lưu mã xử lý lỗi của gói tin",
    "Lưu số thứ tự của các gói tin",
    "Lưu thông tin điều khiển xung đột"
   ],
   "answer": 1
  },
  {
   "id": 31,
   "part": 1,
   "q": "TCP/IP là thuật ngữ viết tắt của cụm từ nào?",
   "options": [
    "Transfer Control Protocol/ Interrnet Protocol",
    "Transmission Control Protocol/ Interrnet Protocol",
    "Transmission Control Protocol/ Interconnection Protocol",
    "Transfer Communication Protocol/ Interrnet Protocol"
   ],
   "answer": 1
  },
  {
   "id": 32,
   "part": 1,
   "q": "Số hiệu cổng mặc định của dịch vụ WWW là bao nhiêu",
   "options": [
    "23",
    "80",
    "11",
    "110"
   ],
   "answer": 1
  },
  {
   "id": 33,
   "part": 1,
   "q": "Giao thức nào sau đây thuộc tầng giao vận",
   "options": [
    "TDP",
    "TDC",
    "UCP",
    "UDP"
   ],
   "answer": 3
  },
  {
   "id": 34,
   "part": 1,
   "q": "Đặc điểm của giao thức UDP là gì?",
   "options": [
    "Không truyền lại các gói dữ liệu bị lỗi",
    "Truyền lại các gói dữ liệu mất trên đường truyền",
    "Truyền lại các gói dữ liệu bị lỗi",
    "Truyền các gói dữ liệu theo đúng thứ tự"
   ],
   "answer": 0
  },
  {
   "id": 35,
   "part": 1,
   "q": "Trường thông tin ACK trong cấu trúc gói số liệu TCP dùng để làm gì?",
   "options": [
    "Lưu thông tin về gói tin nhận có bị lỗi hay không",
    "Lưu mã kiểm soát lỗi cho toàn bộ gói tin",
    "Lưu thông tin điều khiển xung đột",
    "Lưu số thứ tự của các gói tin"
   ],
   "answer": 0
  },
  {
   "id": 36,
   "part": 1,
   "q": "Giao thức nào sau thực hiện chức năng của tầng giao vận?",
   "options": [
    "ICMP, TCP",
    "ICMP, IP",
    "UDP, IP",
    "TCP, UDP"
   ],
   "answer": 3
  },
  {
   "id": 37,
   "part": 2,
   "q": "Thiết bị nào sau đây có khả năng mở rộng kết nối liên mạng?",
   "options": [
    "Switch",
    "Bridge",
    "Modem",
    "Router"
   ],
   "answer": 3
  },
  {
   "id": 38,
   "part": 2,
   "q": "Ai có chức năng cài đặt chỉ MAC cho các thiết bị?",
   "options": [
    "Nhà phân phối sản phẩm",
    "Người quản trị mạng",
    "Nhà sản xuất thiết bị",
    "Người dùng mạng"
   ],
   "answer": 2
  },
  {
   "id": 39,
   "part": 2,
   "q": "Địa chỉ MAC bao gồm các thông tin nào?",
   "options": [
    "Mã thiết bị và năm sản xuất",
    "Mã thiết bị và tên thiết bị",
    "Năm sản xuất và nhà sản xuất",
    "Nhà sản xuất và mã định danh thiết bị"
   ],
   "answer": 3
  },
  {
   "id": 40,
   "part": 2,
   "q": "Hub thường có bao nhiêu cổng?",
   "options": [
    "20",
    "8",
    "14",
    "19"
   ],
   "answer": 1
  },
  {
   "id": 41,
   "part": 2,
   "q": "Repeater là thiết bị thực hiện chức năng của tầng nào?",
   "options": [
    "Tầng vật lý",
    "Tầng giao vận",
    "Tầng mạng",
    "Tầng phiên"
   ],
   "answer": 0
  },
  {
   "id": 42,
   "part": 2,
   "q": "Thiết bị Hub được phát triển từ thiết bị nào sau đây?",
   "options": [
    "Switch",
    "Repeater",
    "Router",
    "Bridge"
   ],
   "answer": 1
  },
  {
   "id": 43,
   "part": 2,
   "q": "Thiết bị nào là thiết bị thực hiện trên tầng 2 của mô hình OSI?",
   "options": [
    "Repeater",
    "Router",
    "Switch",
    "Gate way"
   ],
   "answer": 2
  },
  {
   "id": 44,
   "part": 2,
   "q": "Modem dùng để làm gì?",
   "options": [
    "Khuếch đại tín hiệu và truyền dữ liệu đi trong mạng cục bộ",
    "Giao tiếp với mạng và truyền dữ liệu đi xa",
    "Tìm đường đi của các gói tin trong mạng",
    "Truyền dữ liệu trong mạng Lan"
   ],
   "answer": 1
  },
  {
   "id": 45,
   "part": 2,
   "q": "Bridge là thiết bị thực hiện chức năng của tầng nào?",
   "options": [
    "Tầng mạng",
    "Tầng giao vận",
    "Tầng liên kết dữ liệu",
    "Tầng vật lý"
   ],
   "answer": 2
  },
  {
   "id": 46,
   "part": 2,
   "q": "Thiết bị Router dùng để làm gì?",
   "options": [
    "Định tuyến giữa các mạng",
    "Chặn các dữ liệu dư thừa",
    "Lọc các gói tin dư thừa",
    "Thu hẹp phạm vi của mạng"
   ],
   "answer": 0
  },
  {
   "id": 47,
   "part": 2,
   "q": "Thiết bị Repeater gồm có bao nhiêu cổng?",
   "options": [
    "7",
    "5",
    "2",
    "11"
   ],
   "answer": 2
  },
  {
   "id": 48,
   "part": 2,
   "q": "Thiết bị mạng nào sau đây không thể thiếu được trong mạng Internet?",
   "options": [
    "Hub",
    "Router",
    "Bridge",
    "Switch"
   ],
   "answer": 1
  },
  {
   "id": 49,
   "part": 2,
   "q": "Ý nghĩa của địa chỉ MAC là gì?",
   "options": [
    "Định danh cho một hệ thống mạng",
    "Định danh cho một mạng",
    "Định danh cho một thiết bị trên mạng",
    "Định danh một ứng dụng trên mạng"
   ],
   "answer": 2
  },
  {
   "id": 50,
   "part": 2,
   "q": "Thiết bị Switch thường có bao nhiêu cổng?",
   "options": [
    "12",
    "16",
    "22",
    "28"
   ],
   "answer": 1
  },
  {
   "id": 51,
   "part": 2,
   "q": "Thiết bị Switch được phát triển từ thiết bị nào sau đây?",
   "options": [
    "Router",
    "Repeater",
    "Switch",
    "Bridge"
   ],
   "answer": 3
  },
  {
   "id": 52,
   "part": 2,
   "q": "Thiết bị nào gửi gói dữ liệu tới tất cả các máy trên một đoạn LAN?",
   "options": [
    "Hub",
    "Bridge",
    "Router",
    "Switch"
   ],
   "answer": 0
  },
  {
   "id": 53,
   "part": 2,
   "q": "Card mạng (NIC) có thể sử dụng đầu nối nào dưới đây?",
   "options": [
    "VGA, AUI, BNC",
    "RS233, T-Connector, AUI",
    "RJ45, VGA, RJ11",
    "BNC, AUI, RJ45"
   ],
   "answer": 3
  },
  {
   "id": 54,
   "part": 2,
   "q": "Hub làm việc tại tầng nào của mô hình OSI?",
   "options": [
    "Data Link",
    "Network",
    "Transport",
    "Physical"
   ],
   "answer": 3
  },
  {
   "id": 55,
   "part": 2,
   "q": "Thiết bị Router hoạt động ở tầng nào trong mô hình OSI?",
   "options": [
    "Data Link",
    "Physical",
    "Session",
    "Network"
   ],
   "answer": 3
  },
  {
   "id": 56,
   "part": 2,
   "q": "Switch là thiết bị thực hiện chức năng của tầng nào?",
   "options": [
    "Tầng mạng",
    "Tầng vật lý",
    "Tầng giao vận",
    "Tầng liên kết dữ liệu"
   ],
   "answer": 3
  },
  {
   "id": 57,
   "part": 3,
   "q": "Theo phương pháp PPDIOO, bước nào sẽ tiến hành lựa chọn công nghệ mạng?",
   "options": [
    "Chuẩn bị",
    "Triển khai thực hiện",
    "Lập kế hoạch",
    "Thiết kế mạng"
   ],
   "answer": 3
  },
  {
   "id": 58,
   "part": 3,
   "q": "Thiết kế mạng dựa theo phương pháp PPDIOO gồm mấy giai đoạn?",
   "options": [
    "7",
    "5",
    "8",
    "6"
   ],
   "answer": 3
  },
  {
   "id": 59,
   "part": 3,
   "q": "Loại cáp nào truyền tín hiệu điện?",
   "options": [
    "Cáp quang, cáp đồng trục mỏng",
    "Cáp đồng trục mỏng, cáp xoắn đôi",
    "Cáp xoắn đôi, Cáp quang",
    "Cáp đồng trục dầy, Cáp quang"
   ],
   "answer": 1
  },
  {
   "id": 60,
   "part": 3,
   "q": "Topo mạng máy tính nào sử dụng loại cáp xoắn đôi để kết nối các máy tính?",
   "options": [
    "Topo Star",
    "Topo Broadcat",
    "Topo Ring",
    "Topo Bus"
   ],
   "answer": 0
  },
  {
   "id": 61,
   "part": 3,
   "q": "Mô tả nào sau đây là đúng cho mạng hình sao",
   "options": [
    "Mỗi nút mạng đều kết nối trực tiếp với tất cả các nút khác",
    "Các nút mạng sử dụng chung một đường truyền vật lý",
    "Mỗi nút mạng kết nối với 2 nút mạng còn lại",
    "Tất cả các nút mạng nối vào một nút mạng trung tâm"
   ],
   "answer": 3
  },
  {
   "id": 62,
   "part": 3,
   "q": "Topology dạng Ring sử dụng những loại đường truyền (cáp) nào?",
   "options": [
    "Cáp quang, cáp xoắn đôi",
    "Cáp lõi nhôm và lõi đồng",
    "Cáp đồng trục, cáp quang",
    "Cáp xoắn đôi, cáp đồng trục"
   ],
   "answer": 0
  },
  {
   "id": 63,
   "part": 3,
   "q": "Topo mạng nào có chi phí về số lượng cáp nối là lớn nhất?",
   "options": [
    "Topo Ring",
    "Topo Broadcat",
    "Topo Star",
    "Topo Bus"
   ],
   "answer": 2
  },
  {
   "id": 64,
   "part": 3,
   "q": "Thông lượng mạng là gì?",
   "options": [
    "Thông lượng là lượng thông tin hữu ích được truyền đi trên mạng trong một đơn vị thời gian. Đơn vị đo bằng bps, ppm",
    "Thông lượng là lượng thông tin hữu ích được truyền đi trên mạng trong một đơn vị thời gian. Đơn vị đo bằng bps, Mbps",
    "Thông lượng là lượng thông tin hữu ích được truyền đi trên mạng trong một đơn vị thời gian. Đơn vị đo bằng Mpps, pps",
    "Thông lượng là lượng thông tin hữu ích được truyền đi trên mạng trong một đơn vị thời gian. Đơn vị đo bằng bps, pps"
   ],
   "answer": 1
  },
  {
   "id": 65,
   "part": 3,
   "q": "Trong các bước thiết kế hệ thống mạng theo phương pháp PPDIOO, bước nào sẽ tiến hành xây dựng các bảng về thiết bị hạ tầng mạng?",
   "options": [
    "Triển khai thực hiện",
    "Thiết kế mạng",
    "Lập kế hoạch",
    "Chuẩn bị"
   ],
   "answer": 2
  },
  {
   "id": 66,
   "part": 3,
   "q": "Khi nối mạng trực tiếp giữa hai máy tính, chúng ta sử dụng loại cáp nào?",
   "options": [
    "Cáp UTP thẳng",
    "Cáp UTP chéo",
    "Cáp STP",
    "Cáp quang"
   ],
   "answer": 1
  },
  {
   "id": 67,
   "part": 3,
   "q": "Topology dạng BUS sử dụng loại đường truyền (cáp) nào?",
   "options": [
    "Cáp cặp xoắn",
    "Cáp lõi nhôm",
    "Cáp đồng trục",
    "Cáp quang"
   ],
   "answer": 2
  },
  {
   "id": 68,
   "part": 3,
   "q": "Topology dạng Star sử dụng loại đường truyền (cáp) nào?",
   "options": [
    "Cáp quang",
    "Cáp lõi nhôm",
    "Cáp đồng trục",
    "Cáp cặp xoắn"
   ],
   "answer": 3
  },
  {
   "id": 69,
   "part": 3,
   "q": "Thiết bị Switch thường có bao nhiêu cổng?",
   "options": [
    "16, 24, 32",
    "16, 22, 24",
    "18, 22, 30",
    "10, 12, 18"
   ],
   "answer": 0
  },
  {
   "id": 70,
   "part": 3,
   "q": "Chọn câu trả lời sai: Khi xây dựng hệ thống mạng theo đúng quy trình sẽ đem lại điều gì?",
   "options": [
    "Doanh nghiệp giảm được chi phí",
    "Vận hành hiệu quả, tăng tính sẵn sàng của hệ thống",
    "Dễ dàng trong việc triển khai, nhưng hoạt động không ổn định.",
    "Tối ưu hóa tốc độ truy cập ứng dụng, dịch vụ"
   ],
   "answer": 2
  },
  {
   "id": 71,
   "part": 3,
   "q": "Ký hiệu của cáp xoắn đôi có vỏ bọc chống nhiễu?",
   "options": [
    "FTP",
    "BTP",
    "UTP",
    "STP"
   ],
   "answer": 3
  },
  {
   "id": 72,
   "part": 4,
   "q": "TFS là từ viết tắt của cụm từ gì ?",
   "options": [
    "New Technology File Standard",
    "Network Type File System",
    "New Television Fill System",
    "New Technology File System"
   ],
   "answer": 3
  },
  {
   "id": 73,
   "part": 4,
   "q": "Các phiên bản sau phiên bản nào hỗ trợ cho mục đích cung cấp dịch vụ Web ?",
   "options": [
    "Windows Server 2008 for Itanium - Base Systems",
    "Windows HPC Server 2008",
    "Windows Server 2008 Datacenter Edition",
    "Windows Web Server 2008"
   ],
   "answer": 3
  },
  {
   "id": 74,
   "part": 4,
   "q": "Mô hình mạng Client/Server nằm trong mô hình nào ?",
   "options": [
    "Mô hình mạng ngang hàng",
    "Mô hình mạng kết hợp",
    "Mô hình mạng phân tán",
    "Mô hình mạng tập trung"
   ],
   "answer": 3
  },
  {
   "id": 75,
   "part": 4,
   "q": "Nap viết tắt của cụm từ gì ?",
   "options": [
    "Network access professional",
    "Network access provide",
    "Network access properties",
    "Network access protection"
   ],
   "answer": 3
  },
  {
   "id": 76,
   "part": 4,
   "q": "TCP port mặc định được sử dụng cho FTP server có giá trị là bao nhiêu ?",
   "options": [
    "80 và 8080",
    "8080 và 1080",
    "110 và 80",
    "20 và 21"
   ],
   "answer": 3
  },
  {
   "id": 77,
   "part": 4,
   "q": "SMTP viết tắt của cụm từ gì ?",
   "options": [
    "Singer Mail Transfer Protocol",
    "Simple Mail Technology Protocol",
    "Simple Mail Transfer Protocol",
    "Singer Mail Tranfrom Protocol"
   ],
   "answer": 2
  },
  {
   "id": 78,
   "part": 4,
   "q": "Địa chỉ IPv6 sử dụng bao nhiêu bit địa chỉ ?",
   "options": [
    "96",
    "128",
    "64",
    "32"
   ],
   "answer": 1
  },
  {
   "id": 79,
   "part": 4,
   "q": "Đầu cắm kết nối mạng của máy tính sử dụng chuẩn nào dưới đây ?",
   "options": [
    "RJ11",
    "X21",
    "V35",
    "RJ45"
   ],
   "answer": 3
  },
  {
   "id": 80,
   "part": 4,
   "q": "HPC là từ viết tắt của cụm từ gì ?",
   "options": [
    "High Performance Computer",
    "High Port Configuration",
    "High Performance Computing",
    "High Port Computer"
   ],
   "answer": 2
  },
  {
   "id": 81,
   "part": 4,
   "q": "Tài khoản nào có quyền cao nhất trong Windows 2008 Server",
   "options": [
    "Administrator",
    "Power User",
    "User",
    "Guest"
   ],
   "answer": 0
  },
  {
   "id": 82,
   "part": 4,
   "q": "Số nhị phân nào dưới đây có giá trị là 170",
   "options": [
    "10100100",
    "10010010",
    "11000100",
    "10101010"
   ],
   "answer": 3
  },
  {
   "id": 83,
   "part": 4,
   "q": "Yêu cầu tối thiểu đối với bộ vi xử lý khi cài đặt Windows server 2008?",
   "options": [
    "1.4 GHZ",
    "2.5 GHZ",
    "3.5 GHZ",
    "4.5 GHZ"
   ],
   "answer": 0
  },
  {
   "id": 84,
   "part": 4,
   "q": "Địa chỉ IPv4 sử dụng bao nhiêu bit địa chỉ ?",
   "options": [
    "96",
    "32",
    "128",
    "64"
   ],
   "answer": 1
  },
  {
   "id": 85,
   "part": 4,
   "q": "Trong mạng ngang hàng số lượng máy chủ tối thiểu là ?",
   "options": [
    "0",
    "2",
    "1",
    "5"
   ],
   "answer": 0
  },
  {
   "id": 86,
   "part": 4,
   "q": "Hệ điều hành dành cho máy chủ là ?",
   "options": [
    "Windows 2008 Server",
    "Windows XP",
    "Windows NT Clients",
    "Windows 2010 Professional"
   ],
   "answer": 0
  },
  {
   "id": 87,
   "part": 4,
   "q": "IIS viết tắt của cụm từ gì ?",
   "options": [
    "Internet Information System",
    "Internet Information Services",
    "Intranet Information System",
    "Internet Infor Security"
   ],
   "answer": 1
  },
  {
   "id": 88,
   "part": 4,
   "q": "Địa chỉ IP lớp A có bao nhiêu bit dành cho phần mạng ?",
   "options": [
    "8 bit",
    "16 bit",
    "12 bit",
    "4 bit"
   ],
   "answer": 0
  },
  {
   "id": 89,
   "part": 4,
   "q": "Yêu cầu tối thiểu đối với bộ nhở Ram khi cài đặt Windows server 2008 ?",
   "options": [
    "1 GB",
    "512 MB",
    "2 GB",
    "4 GB"
   ],
   "answer": 1
  },
  {
   "id": 90,
   "part": 4,
   "q": "Chức năng của giao thức IP là gì ?",
   "options": [
    "Phân đoạn và tái tạo dữ liệu",
    "Định nghĩa cơ chế định danh địa chỉ trong mạng Internet",
    "Phân đoạn mạng",
    "Định hướng đường đi cho các gói tin"
   ],
   "answer": 1
  },
  {
   "id": 91,
   "part": 4,
   "q": "Không gian ổ đĩa cứng tối thiểu khi cài đặt Windows server 2008 ?",
   "options": [
    "30 GB",
    "10 GB",
    "40 GB",
    "20 GB"
   ],
   "answer": 1
  }
 ]
};
