import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { ProjectAtlas } from "@/components/ProjectAtlas";
import { withBasePath } from "@/lib/paths";

function BotanicalBranch() {
  return (
    <svg className="botanical-branch" viewBox="0 0 430 470" aria-hidden="true">
      <path className="branch-stem" d="M42 430C118 351 139 280 192 221C245 162 316 140 385 43" />
      <path className="branch-stem branch-stem--thin" d="M170 249C145 199 132 151 143 103" />
      <path className="branch-stem branch-stem--thin" d="M224 190C262 202 306 199 346 176" />
      <path className="branch-stem branch-stem--thin" d="M279 146C269 108 274 75 300 42" />
      <g className="branch-leaves">
        <path d="M135 126C101 116 87 91 91 62C121 67 143 88 135 126Z" />
        <path d="M151 142C182 123 205 127 220 145C192 166 166 165 151 142Z" />
        <path d="M246 183C263 151 289 141 318 151C303 181 276 195 246 183Z" />
        <path d="M288 126C311 101 340 96 365 111C346 139 316 144 288 126Z" />
        <path d="M305 87C295 57 305 31 329 17C344 44 334 72 305 87Z" />
        <path d="M340 81C368 59 397 60 418 80C394 105 364 104 340 81Z" />
        <path d="M187 227C152 229 130 212 122 185C153 177 180 193 187 227Z" />
      </g>
    </svg>
  );
}

function GrowthLine() {
  return (
    <svg className="growth-line" viewBox="0 0 720 420" aria-hidden="true">
      <path d="M22 374C128 367 167 326 241 311C310 296 353 259 398 220C443 181 491 169 530 126C571 81 621 58 695 30" />
      <g>
        <circle cx="22" cy="374" r="7" />
        <circle cx="241" cy="311" r="7" />
        <circle cx="398" cy="220" r="7" />
        <circle cx="530" cy="126" r="7" />
        <circle cx="695" cy="30" r="7" />
      </g>
    </svg>
  );
}

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
          <GrowthLine />
          <BotanicalBranch />
          <figure className="hero-evidence hero-evidence--main">
            <img src={withBasePath("/assets/projects/p5/image5.webp")} alt="Slide Pomodoro trong bài tập 5" />
          </figure>
          <figure className="hero-evidence hero-evidence--small">
            <img src={withBasePath("/assets/projects/p6/image1.webp")} alt="Infographic sử dụng AI có trách nhiệm" />
          </figure>
          <div className="hero-stamp" aria-hidden="true"><span>KHP</span><small>growth issue</small></div>
          <p className="hero-quote">“Học hỏi không ngừng để tạo ra giá trị thật.”</p>
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
