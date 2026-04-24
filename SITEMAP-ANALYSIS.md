# TTD Website - Phân tích sitemap và định hướng UI

## 1) Cấu trúc sitemap (đúng file khách hàng gửi)
- `Trang chủ`
- `Về chúng tôi`
- `Sản phẩm`
- `Dự án`
- `Tin tức`
- `Nghề nghiệp`
- `Liên hệ`
- `Footer chung toàn site` (thông tin công ty, liên kết nhanh, mạng xã hội + đăng ký báo giá)

## 2) Mapping nội dung theo từng trang
- `Trang chủ`: giới thiệu ngắn, nhóm sản phẩm, dự án tiêu biểu, tin tức, CTA dẫn sang trang chi tiết.
- `Về chúng tôi`: công ty TTD (lịch sử, tầm nhìn, mục tiêu, sứ mệnh), thương hiệu Dovlon, bộ máy tổ chức.
- `Sản phẩm`: 3 nhóm chính:
  - Giải pháp cách nhiệt: tấm/ống cách nhiệt.
  - Giải pháp tiêu âm: tấm/ống tiêu âm.
  - Vật tư phụ trợ: tấm cách âm, băng cuốn, băng keo nhôm, gioăng ống gió, gối đỡ ống.
- `Dự án`: danh sách các công trình đã triển khai.
- `Tin tức`: hoạt động công ty + kiến thức kỹ thuật.
- `Nghề nghiệp`: lý do chọn TTD + vị trí tuyển dụng.
- `Liên hệ`: thông tin giao dịch + form tư vấn/báo giá.

## 3) Hướng thiết kế theo brief
- Layout có khoảng thở rõ giữa các khối, không tràn full-width.
- Khối nội dung bo góc nhẹ, phong cách sáng, mềm.
- Font Sans Serif: ưu tiên `"Helvetica World", "Helvetica Neue", Helvetica, Arial, sans-serif`.
- Màu nền sáng (trắng/pastel), title xanh đậm, text thân màu đen/xám đậm.
- Cho phép dùng gradient nhẹ ở tiêu đề.

## 4) Tư vấn glassmorphism để không nặng UX
- Dùng blur vừa phải (`backdrop-filter: blur(10-12px)`), không lạm dụng trên toàn trang.
- Chỉ áp dụng cho card chính (hero, card thông tin), không áp trên mọi lớp.
- Giữ nền sáng và hiệu ứng bóng nhẹ để giảm repaint cost.
- Có fallback khi trình duyệt không hỗ trợ blur (`@supports not (...)`).
- Tôn trọng `prefers-reduced-motion` để giảm animation.
- Tránh ảnh nền dung lượng lớn; ưu tiên gradient CSS và lazy-load ảnh thật khi có dữ liệu.

## 5) Tình trạng code hiện tại
- Đã dựng bản website HTML/CSS đa trang theo đúng sitemap.
- Đã cài style glassmorphism nhẹ và responsive mobile/desktop.
- Đã gắn ảnh demo từ Unsplash/Pexels để dựng visual hoàn chỉnh.
- Đã chuẩn bị sẵn khung để thay bằng nội dung thật (logo xuất SVG/PNG, ảnh dự án thực tế, dữ liệu tin tức).
