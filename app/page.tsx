import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { ProjectAtlas } from "@/components/ProjectAtlas";

export default function HomePage() {
  return (
    <main id="main-content" className="page-shell">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy" data-reveal>
          <p className="hero-kicker">Digital learning portfolio · Kinh tế phát triển</p>
          <h1 id="hero-title">
            <span>Kiều Hoài</span>
            <span>Phương</span>
          </h1>
          <p className="hero-intro">
            Sáu bài tập ghi lại quá trình mình xây dựng kỹ năng số, tư duy học thuật và cách sử dụng AI có trách nhiệm trong học tập.
          </p>
          <div className="hero-actions">
            <Link href="/#du-an" className="button-primary">Khám phá 6 bài tập <span aria-hidden="true">↗</span></Link>
            <a href="mailto:khoaiphuong16@gmail.com" className="button-text">Liên hệ với mình</a>
          </div>
        </div>

        <aside className="hero-profile" data-reveal aria-label="Thông tin sinh viên">
          <div className="hero-profile__head">
            <p>Hồ sơ học tập</p>
            <span>2025–2026</span>
          </div>
          <dl>
            <div><dt>Họ và tên</dt><dd>Kiều Hoài Phương</dd></div>
            <div><dt>Mã sinh viên</dt><dd>25050729</dd></div>
            <div><dt>Ngành học</dt><dd>Kinh tế phát triển</dd></div>
            <div><dt>Trường</dt><dd>UEB · ĐHQGHN</dd></div>
            <div><dt>Mã lớp</dt><dd>VNU1001_E252041</dd></div>
            <div><dt>Email</dt><dd><a href="mailto:khoaiphuong16@gmail.com">khoaiphuong16@gmail.com</a></dd></div>
          </dl>
          <p className="hero-profile__note">Portfolio học phần Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.</p>
        </aside>
      </section>

      <section id="gioi-thieu" className="about section-pad" aria-labelledby="about-title">
        <div className="about-heading" data-reveal>
          <p className="section-kicker">Giới thiệu</p>
          <h2 id="about-title">Một hồ sơ học tập gọn, rõ và phản ánh đúng quá trình mình đã thực hiện.</h2>
        </div>
        <div className="about-story" data-reveal>
          <p>Mình là sinh viên Khoa Kinh tế phát triển, Trường Đại học Kinh tế, Đại học Quốc gia Hà Nội. Portfolio này tổng hợp sáu sản phẩm học tập trong học phần <strong>Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</strong>.</p>
          <p>Qua từng bài, mình được thực hành từ quản lý tệp tin, tìm kiếm nguồn học thuật, viết prompt, cộng tác trực tuyến đến sáng tạo nội dung và sử dụng AI có trách nhiệm. Mỗi bài đều có phần tóm tắt ngắn trước khi trình bày toàn bộ nội dung gốc và minh chứng.</p>
        </div>
      </section>

      <section id="du-an" className="projects-section section-pad" aria-labelledby="projects-title">
        <div className="projects-heading" data-reveal>
          <p className="section-kicker">Dự án học tập</p>
          <h2 id="projects-title">6 bài tập trong một cấu trúc thống nhất, dễ xem và dễ đối chiếu.</h2>
          <p>Chọn một bài ở danh sách để xem nhanh mục tiêu, quá trình thực hiện và điều mình rút ra. Bản đầy đủ được giữ nguyên ở trang chi tiết của từng bài.</p>
        </div>
        <ProjectAtlas />
      </section>

      <section id="tong-ket" className="summary section-pad" aria-labelledby="summary-title">
        <div className="summary-intro" data-reveal>
          <p className="section-kicker">Tổng kết</p>
          <h2 id="summary-title">Điều quan trọng nhất là mình đã biết học và làm việc có hệ thống hơn.</h2>
        </div>

        <div className="reflection-grid">
          <article data-reveal>
            <span>01 · Kiến thức và kỹ năng</span>
            <h3>Tổ chức, tìm kiếm, hợp tác và sử dụng AI</h3>
            <p>Mình cải thiện kỹ năng quản lý dữ liệu, đánh giá nguồn, viết prompt, phối hợp nhóm và hoàn thiện sản phẩm số. Mình cũng hiểu rõ hơn cách kiểm chứng thông tin và giữ vai trò chủ động khi dùng AI.</p>
          </article>
          <article data-reveal>
            <span>02 · Khó khăn và cách khắc phục</span>
            <h3>Giữ nội dung đầy đủ nhưng vẫn dễ theo dõi</h3>
            <p>Khó khăn lớn nhất là sắp xếp nhiều minh chứng và bảng biểu. Mình khắc phục bằng cách phân loại theo từng bài, giữ đúng trình tự thực hiện và tóm tắt ba ý chính trước phần nội dung gốc.</p>
          </article>
          <article data-reveal>
            <span>03 · Bài học và định hướng</span>
            <h3>AI hỗ trợ tốt nhất khi người học vẫn tự quyết định</h3>
            <p>Mình muốn tiếp tục phát triển tư duy phản biện, kỹ năng nghiên cứu và khả năng ứng dụng AI một cách minh bạch. Công cụ có thể hỗ trợ nhanh hơn, nhưng chất lượng cuối cùng vẫn phụ thuộc vào việc mình kiểm tra và chỉnh sửa.</p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
