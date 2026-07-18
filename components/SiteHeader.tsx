"use client";

import Link from "next/link";
import { useState } from "react";
import { withBasePath } from "@/lib/paths";

const navItems = [
  { href: "/#gioi-thieu", label: "Giới thiệu" },
  { href: "/#du-an", label: "Bài tập" },
  { href: "/#tong-ket", label: "Tổng kết" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Đi đến nội dung chính</a>
      <div className="site-header__inner">
        <Link href="/" className="brand-mark" aria-label="Trang chủ Kiều Hoài Phương" onClick={closeMenu}>
          <span className="brand-mark__monogram">KHP</span>
          <span className="brand-mark__meta">
            <strong>Kiều Hoài Phương</strong>
            <small>Portfolio · 25050729</small>
          </span>
        </Link>

        <nav className="site-nav site-nav--desktop" aria-label="Điều hướng chính">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
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

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span>{menuOpen ? "Đóng" : "Menu"}</span>
          <span className="mobile-menu-toggle__icon" aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <div id="mobile-navigation" className={menuOpen ? "mobile-nav is-open" : "mobile-nav"} hidden={!menuOpen}>
        <nav aria-label="Điều hướng trên thiết bị di động">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>{item.label}</Link>
          ))}
          <a href="mailto:khoaiphuong16@gmail.com" onClick={closeMenu}>Liên hệ</a>
          <a
            className="mobile-nav__brief"
            href={withBasePath("/downloads/de-bai-nhap-mon-cns-ai.pdf")}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Xem đề bài <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
