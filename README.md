# Portfolio Kiều Hoài Phương — 25050729

Website portfolio cho học phần **Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo** của sinh viên Kiều Hoài Phương, Khoa Kinh tế phát triển, UEB — ĐHQGHN.

## Concept thiết kế

**The Growth Issue — Pastel Academic Editorial**

- Bảng màu chủ đạo: hồng phấn, tím lilac, nền giấy ngà và chữ tím mận.
- Ngôn ngữ thị giác: tạp chí học thuật, biểu đồ tăng trưởng, đường nét thực vật và texture giấy nhẹ.
- Sáu bài tập được trình bày bằng sáu cấu trúc riêng: hồ sơ tệp tin, sổ nghiên cứu, thang tiến hóa prompt, timeline cộng tác, Pomodoro và tuyên ngôn AI có trách nhiệm.
- Nội dung, ảnh minh chứng và thứ tự trình bày được lấy từ tài liệu gốc. Phần lời dẫn portfolio được bổ sung theo cùng giọng viết của sinh viên, không thay đổi nội dung học thuật.
- Responsive cho desktop, tablet và mobile; có trạng thái focus và hỗ trợ `prefers-reduced-motion`.

## Công nghệ

- Next.js
- TypeScript
- Tailwind CSS 4
- Static export cho GitHub Pages

## Chạy trên máy

```bash
npm install
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

## Nội dung chính

- Giới thiệu sinh viên và hành trình học tập.
- Tổng quan 6 bài tập.
- Trang riêng cho từng bài với mục tiêu, quá trình, sản phẩm và tài liệu gốc.
- Tổng kết trải nghiệm, kỹ năng, thử thách và định hướng sử dụng AI có trách nhiệm.
