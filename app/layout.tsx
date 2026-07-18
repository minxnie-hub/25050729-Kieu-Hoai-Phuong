import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiều Hoài Phương · Portfolio Công nghệ số & AI",
  description: "Portfolio 6 bài tập học phần Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo của Kiều Hoài Phương.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>
        {children}
      </body>
    </html>
  );
}
