import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <span>404</span>
      <h1>Trang này không nằm trong portfolio.</h1>
      <Link href="/">Trở về trang chủ</Link>
    </main>
  );
}
