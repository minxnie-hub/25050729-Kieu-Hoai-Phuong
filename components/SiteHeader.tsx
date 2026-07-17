import Link from "next/link";
import { withBasePath } from "@/lib/paths";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand-mark" aria-label="Trang chủ Kiều Hoài Phương">
          <span className="brand-mark__monogram">KHP</span>
          <span className="brand-mark__meta">
            <strong>Kiều Hoài Phương</strong>
            <small>Portfolio · 25050729</small>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Điều hướng chính">
          <Link href="/#gioi-thieu">Giới thiệu</Link>
          <Link href="/#du-an">Bài tập</Link>
          <Link href="/#tong-ket">Tổng kết</Link>
          <a href="mailto:khoaiphuong16@gmail.com">Liên hệ</a>
        </nav>
        <a
          className="header-brief"
          href={withBasePath("/downloads/de-bai-nhap-mon-cns-ai.pdf")}
          target="_blank"
          rel="noreferrer"
        >
          Xem đề bài <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  );
}
