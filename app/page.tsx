import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { ProjectAtlas } from "@/components/ProjectAtlas";
import { withBasePath } from "@/lib/paths";

export default function HomePage() {
  return (
    <main className="page-shell">
      <SiteHeader />

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy" data-reveal>
          <p className="hero-kicker">Digital learning portfolio · Kinh tế phát triển</p>
          <h1 id="hero-title"><span>Kiều Hoài</span><span>Phương</span></h1>
          <div className="hero-meta">
            <span>25050729</span>
            <span>UEB · ĐHQGHN</span>
            <span>VNU1001_E252041</span>
          </div>
          <p className="hero-intro">Sáu bài tập ghi lại quá trình mình xây dựng kỹ năng số, tư duy học thuật và cách sử dụng AI có trách nhiệm.</p>
          <div className="hero-actions">
            <Link href="/#du-an" className="button-primary">Khám phá portfolio <span aria-hidden="true">↗</span></Link>
            <a href="mailto:khoaiphuong16@gmail.com" className="button-text">Liên hệ với mình</a>
          </div>
        </div>

        <div className="hero-visual" data-reveal>
          <div className="hero-showcase">
            <div className="hero-showcase__header">
              <span>Selected work</span>
              <span>2026</span>
            </div>
            <figure className="hero-showcase__main">
              <img src={withBasePath("/assets/projects/p5/image5.webp")} alt="Slide Pomodoro trong bài tập 5" />
              <figcaption><span>05</span> AI tạo sinh và phương pháp Pomodoro</figcaption>
            </figure>
            <div className="hero-showcase__footer">
              <figure className="hero-showcase__secondary">
                <img src={withBasePath("/assets/projects/p6/image1.webp")} alt="Infographic sử dụng AI có trách nhiệm" />
              </figure>
              <div className="hero-showcase__note">
                <span>Hành trình</span>
                <strong>Học tập · Thực hành · Trưởng thành</strong>
                <p>Nội dung thật, minh chứng thật và một cách trình bày rõ ràng hơn.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gioi-thieu" className="about section-pad" aria-labelledby="about-title">
        <div className="about-heading" data-reveal>
          <p className="section-kicker">Mình là Kiều Hoài Phương</p>
          <h2 id="about-title">Mỗi kỹ năng số là một bước nhỏ trong hành trình <em>phát triển dài hạn.</em></h2>
        </div>
        <div className="about-body" data-reveal>
          <div className="about-story">
            <p>Mình là sinh viên Khoa Kinh tế phát triển, Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội. Portfolio này tổng hợp toàn bộ sản phẩm học tập của mình trong học phần <strong>Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo</strong>.</p>
            <p>Nội dung gồm sáu bài tập được thực hiện trong quá trình học, kèm mục tiêu, quy trình, hình ảnh minh chứng và sản phẩm cuối cùng. Qua học phần, mình hiểu rõ hơn cách công nghệ số và AI có thể hỗ trợ việc học khi được sử dụng đúng mục đích, có kiểm chứng và có trách nhiệm.</p>
            <blockquote>Mục tiêu của mình là tiếp tục phát triển kỹ năng số, tư duy phản biện và khả năng ứng dụng AI một cách hiệu quả, minh bạch.</blockquote>
          </div>
          <dl className="profile-sheet">
            <div><dt>Họ và tên</dt><dd>Kiều Hoài Phương</dd></div>
            <div><dt>Mã sinh viên</dt><dd>25050729</dd></div>
            <div><dt>Ngành học</dt><dd>Kinh tế phát triển</dd></div>
            <div><dt>Trường</dt><dd>UEB · ĐHQGHN</dd></div>
            <div><dt>Mã lớp</dt><dd>VNU1001_E252041</dd></div>
            <div><dt>Email</dt><dd><a href="mailto:khoaiphuong16@gmail.com">khoaiphuong16@gmail.com</a></dd></div>
          </dl>
        </div>

        <div className="learning-journey" data-reveal aria-label="Hành trình học tập qua sáu bài">
          <div className="journey-line" />
          {[
            ["Quản lý", "tệp tin"],
            ["Nghiên cứu", "học thuật"],
            ["Viết", "prompt"],
            ["Hợp tác", "trực tuyến"],
            ["Sáng tạo", "với AI"],
            ["AI có", "trách nhiệm"],
          ].map(([first, second], index) => (
            <div className="journey-stop" key={first + second}>
              <span>{index + 1}</span>
              <strong>{first}<br />{second}</strong>
            </div>
          ))}
        </div>
      </section>

      <section id="du-an" className="projects-section section-pad" aria-labelledby="projects-title">
        <div className="projects-heading" data-reveal>
          <p className="section-kicker">Sáu bài tập, sáu cách kể</p>
          <h2 id="projects-title">Nội dung thật được đặt vào đúng ngữ cảnh của từng bài.</h2>
          <p>Mỗi chương sử dụng một bố cục riêng dựa trên loại sản phẩm: thao tác tệp, bảng nghiên cứu, thử nghiệm prompt, timeline nhóm, slide sáng tạo và tuyên ngôn AI có trách nhiệm.</p>
        </div>
        <ProjectAtlas />
      </section>

      <section id="tong-ket" className="summary section-pad" aria-labelledby="summary-title">
        <div className="summary-intro" data-reveal>
          <p className="section-kicker">Growth report</p>
          <h2 id="summary-title">Điều mình nhận được không chỉ nằm ở sáu sản phẩm cuối.</h2>
          <p>Quan trọng hơn, mình đã hình thành một quy trình học tập rõ ràng hơn: biết tổ chức, tìm kiếm, thử nghiệm, hợp tác, kiểm chứng và chịu trách nhiệm với kết quả của mình.</p>
        </div>

        <div className="summary-metrics" data-reveal>
          <div><strong>06</strong><span>bài tập hoàn thiện</span></div>
          <div><strong>03</strong><span>công cụ AI trong bài sáng tạo</span></div>
          <div><strong>11</strong><span>nguồn học thuật được đánh giá</span></div>
          <div><strong>07</strong><span>nguyên tắc AI cá nhân</span></div>
        </div>

        <div className="reflection-grid">
          <article data-reveal>
            <span>Trải nghiệm</span>
            <h3>Từ làm theo hướng dẫn đến biết thiết kế cách làm</h3>
            <p>Ban đầu, mình tập trung vào việc hoàn thành từng thao tác. Sau sáu bài, mình hiểu rằng công nghệ chỉ thực sự hữu ích khi người học biết đặt mục tiêu, tổ chức quy trình và kiểm tra kết quả.</p>
          </article>
          <article data-reveal>
            <span>Kỹ năng</span>
            <h3>Tổ chức dữ liệu, nghiên cứu, cộng tác và dùng AI</h3>
            <p>Mình cải thiện kỹ năng quản lý tệp, đánh giá nguồn, viết prompt, phối hợp nhóm, sáng tạo nội dung số và nhận diện các vấn đề đạo đức khi sử dụng AI.</p>
          </article>
          <article data-reveal>
            <span>Tâm đắc</span>
            <h3>Bài 5 vì sản phẩm thể hiện rõ sự kết hợp giữa AI và cá nhân</h3>
            <p>AI hỗ trợ ý tưởng, nội dung và hình ảnh, nhưng mình vẫn phải rút gọn, lựa chọn, chỉnh sửa và hoàn thiện bài thuyết trình Pomodoro theo mục tiêu của mình.</p>
          </article>
          <article data-reveal>
            <span>Thách thức</span>
            <h3>Giữ nội dung đầy đủ nhưng vẫn mạch lạc, dễ theo dõi</h3>
            <p>Mình khắc phục bằng cách phân loại minh chứng theo từng bài, giữ đúng thứ tự thực hiện và tóm tắt mục tiêu, quy trình, sản phẩm trước khi trình bày tài liệu gốc.</p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
