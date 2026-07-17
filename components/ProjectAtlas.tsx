import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import { withBasePath } from "@/lib/paths";

function ProjectHeading({ project }: { project: Project }) {
  return (
    <header className="project-heading">
      <p className="project-number">Bài {project.number}</p>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
    </header>
  );
}

function ProjectLink({ project, className = "" }: { project: Project; className?: string }) {
  return (
    <Link className={`project-open ${className}`} href={`/projects/${project.slug}`}>
      Xem nội dung đầy đủ <span aria-hidden="true">↗</span>
    </Link>
  );
}

function Stats({ project }: { project: Project }) {
  return (
    <dl className="project-stats">
      {project.stats.map((stat) => (
        <div key={stat.label}>
          <dt>{stat.value}</dt>
          <dd>{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}

function FolderProject({ project }: { project: Project }) {
  return (
    <article className="atlas-project atlas-folder" data-reveal>
      <div className="folder-copy">
        <ProjectHeading project={project} />
        <Stats project={project} />
        <ProjectLink project={project} />
      </div>
      <div className="folder-stage" aria-label="Ảnh minh chứng bài 1">
        <span className="folder-tab">ThucHanh_KieuHoaiPhuong</span>
        {project.previewImages.map((image, index) => (
          <figure key={image} className={`evidence-paper evidence-paper--${index + 1}`}>
            <img src={withBasePath(image)} alt={`Minh chứng thao tác tệp tin ${index + 1}`} loading="lazy" />
          </figure>
        ))}
        <p className="folder-note">Tạo · Đổi tên · Sao chép · Di chuyển · Khôi phục</p>
      </div>
    </article>
  );
}

function ResearchProject({ project }: { project: Project }) {
  const sourceTypes = [
    ["Bài báo khoa học", "6"],
    ["Sách chuyên khảo", "2"],
    ["Báo cáo", "2"],
    ["Nguồn mở", "1"],
  ];
  return (
    <article className="atlas-project atlas-research" data-reveal>
      <div className="research-copy">
        <ProjectHeading project={project} />
        <p className="research-topic">Tác động của xuất khẩu đến tăng trưởng kinh tế ở Việt Nam</p>
        <Stats project={project} />
        <ProjectLink project={project} />
      </div>
      <div className="research-ledger">
        <div className="research-ledger__head">
          <span>Hệ nguồn đã tổng hợp</span>
          <strong>11 tài liệu</strong>
        </div>
        <ul>
          {sourceTypes.map(([label, value]) => (
            <li key={label}><span>{label}</span><b>{value}</b></li>
          ))}
        </ul>
        <figure className="research-page">
          <img src={withBasePath(project.previewImages[0])} alt="Bảng đánh giá nguồn học thuật" loading="lazy" />
        </figure>
      </div>
    </article>
  );
}

function PromptProject({ project }: { project: Project }) {
  const levels = [
    ["Cơ bản", "Ngắn, ít ràng buộc"],
    ["Cải tiến", "Có giới hạn và yêu cầu rõ"],
    ["Nâng cao", "Có vai trò, đối tượng và định dạng"],
  ];
  return (
    <article className="atlas-project atlas-prompt" data-reveal>
      <div className="prompt-intro">
        <ProjectHeading project={project} />
        <Stats project={project} />
        <ProjectLink project={project} />
      </div>
      <div className="prompt-ladder">
        {project.previewImages.map((image, index) => (
          <figure key={image} className={`prompt-level prompt-level--${index + 1}`}>
            <figcaption>
              <span>{levels[index][0]}</span>
              <small>{levels[index][1]}</small>
            </figcaption>
            <img src={withBasePath(image)} alt={`Kết quả prompt ${levels[index][0]}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </article>
  );
}

function TimelineProject({ project }: { project: Project }) {
  const days = ["Khởi động", "Lập kế hoạch", "Viết nội dung", "Rà soát", "Hoàn thiện", "Thiết kế slide", "Tổng duyệt"];
  return (
    <article className="atlas-project atlas-timeline" data-reveal>
      <div className="timeline-copy">
        <ProjectHeading project={project} />
        <div className="tool-row" aria-label="Công cụ sử dụng">
          <span>Google Docs</span><span>Google Drive</span><span>Google Meet</span>
        </div>
        <ProjectLink project={project} />
      </div>
      <div className="timeline-board">
        <ol className="week-line">
          {days.map((day, index) => (
            <li key={day}><span>Ngày {index + 1}</span><strong>{day}</strong></li>
          ))}
        </ol>
        <div className="timeline-evidence">
          {project.previewImages.map((image, index) => (
            <figure key={image}>
              <img src={withBasePath(image)} alt={`Minh chứng hợp tác nhóm ${index + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </article>
  );
}

function PosterProject({ project }: { project: Project }) {
  return (
    <article className="atlas-project atlas-poster" data-reveal>
      <div className="pomodoro-dial" aria-label="Chủ đề phương pháp Pomodoro">
        <span>25 : 05</span>
        <small>Tập trung · Nghỉ ngắn</small>
      </div>
      <div className="poster-copy">
        <ProjectHeading project={project} />
        <div className="ai-flow"><span>ChatGPT</span><b>→</b><span>AI tạo ảnh</span><b>→</b><span>Canva AI</span></div>
        <ProjectLink project={project} />
      </div>
      <div className="poster-wall" aria-label="Các slide Pomodoro đã hoàn thiện">
        {project.previewImages.map((image, index) => (
          <figure key={image} className={`poster-frame poster-frame--${index + 1}`}>
            <img src={withBasePath(image)} alt={`Slide Pomodoro ${index + 1}`} loading="lazy" />
          </figure>
        ))}
      </div>
    </article>
  );
}

function ManifestoProject({ project }: { project: Project }) {
  const principles = [
    "Chỉ dùng AI để hỗ trợ, không gian lận",
    "Luôn kiểm chứng thông tin",
    "Không sao chép nguyên văn",
    "Trích dẫn minh bạch",
    "Tôn trọng bản quyền",
    "Bảo vệ dữ liệu cá nhân",
    "Duy trì tư duy độc lập",
  ];
  return (
    <article className="atlas-project atlas-manifesto" data-reveal>
      <div className="manifesto-copy">
        <ProjectHeading project={project} />
        <ol className="principle-list">
          {principles.map((principle, index) => <li key={principle}><span>{String(index + 1).padStart(2, "0")}</span>{principle}</li>)}
        </ol>
        <ProjectLink project={project} className="project-open--light" />
      </div>
      <figure className="manifesto-visual">
        <img src={withBasePath(project.previewImages[0])} alt="Infographic sử dụng AI có trách nhiệm" loading="lazy" />
        <figcaption>Infographic trong bài nộp gốc</figcaption>
      </figure>
    </article>
  );
}

export function ProjectAtlas() {
  return (
    <div className="project-atlas">
      <FolderProject project={projects[0]} />
      <ResearchProject project={projects[1]} />
      <PromptProject project={projects[2]} />
      <TimelineProject project={projects[3]} />
      <PosterProject project={projects[4]} />
      <ManifestoProject project={projects[5]} />
    </div>
  );
}
