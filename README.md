# Portfolio Kiều Hoài Phương — 25050729

Website portfolio cho học phần **Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo** của sinh viên Kiều Hoài Phương, Khoa Kinh tế phát triển, UEB — ĐHQGHN.

## Hướng thiết kế

**Pastel Academic Portfolio — Compact UX**

- Màu chủ đạo: hồng phấn, tím lilac, nền sáng và chữ tím mận.
- Trang đầu chỉ giữ phần giới thiệu và thông tin sinh viên, không dùng cụm ảnh trang trí.
- Sáu bài tập dùng giao diện master–detail: danh sách bài ở bên trái, nội dung tóm tắt ở bên phải.
- Mỗi bài có đúng ba phần ngắn: **Mục tiêu**, **Quá trình thực hiện**, **Tổng kết rút ra**.
- Trang chi tiết giữ nguyên toàn bộ nội dung, bảng và hình ảnh minh chứng từ bài nộp gốc.
- Font dùng hệ thống hỗ trợ tiếng Việt, không phụ thuộc font tải ngoài.
- Responsive cho desktop, tablet và mobile; có điều hướng bàn phím, focus state, skip link và hỗ trợ `prefers-reduced-motion`.

## Công nghệ

- Next.js
- TypeScript
- Tailwind CSS 4
- Static export cho GitHub Pages

## Chạy trên máy

```bash
npm ci
npm run dev
```

Mở `http://localhost:3000`.

## Kiểm tra và build tĩnh

```bash
npm run lint
npm run build
```

Thư mục xuất bản là `out/`.

## Deploy GitHub Pages

Workflow `.github/workflows/deploy.yml` đã được cấu hình sẵn.

1. Push toàn bộ mã nguồn lên nhánh `main`.
2. Mở **Settings → Pages** trong repository.
3. Chọn **Source: GitHub Actions**.
4. Chờ workflow hoàn tất để nhận đường dẫn website.
