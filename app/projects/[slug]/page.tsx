import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/Footer";
import { DocumentContent } from "@/components/DocumentContent";
import { getProject, projects } from "@/data/projects";
import { withBasePath } from "@/lib/paths";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;
  const projectNumber = Number(project.number);

  return (
    <main className={`page-shell detail-page detail-page--${project.accent}`}>
      <SiteHeader />
      <section className="detail-hero">
        <div className="detail-hero__copy" data-reveal>
          <Link href="/#du-an" className="back-link"><span aria-hidden="true">←</span> Quay lại danh sách</Link>
          <p className="detail-index">Bài {project.number}</p>
          <h1>{project.title}</h1>
          <p className="detail-summary">{project.summary}</p>
          <div className="tag-row">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="detail-actions">
            <a href={withBasePath(`/downloads/bai-${projectNumber}.pdf`)} target="_blank" rel="noreferrer" className="button-primary">Mở PDF <span aria-hidden="true">↗</span></a>
            <a href={withBasePath(`/downloads/bai-${projectNumber}.docx`)} download className="button-text">Tải DOCX</a>
          </div>
        </div>
        <div className="detail-hero__visual" data-reveal>
          <div className="detail-visual-head">
            <span>Bài {project.number}</span>
            <span>{project.pages} trang</span>
          </div>
          <figure>
            <img src={withBasePath(project.previewImages[0])} alt={`Ảnh xem trước ${project.title}`} />
          </figure>
          <p className="detail-visual-caption">Trích từ bài nộp gốc của sinh viên</p>
        </div>
      </section>

      <section className="project-brief section-pad" aria-label="Tóm tắt bài tập">
        <article data-reveal><span>Mục tiêu</span><p>{project.goal}</p></article>
        <article data-reveal><span>Quá trình</span><p>{project.process}</p></article>
        <article data-reveal><span>Sản phẩm cuối</span><p>{project.deliverable}</p></article>
      </section>

      <section className="document-section">
        <aside className="reading-rail">
          <span>{project.number}</span>
          <h2>Bài nộp gốc</h2>
          <p>Phần dưới giữ nguyên thứ tự nội dung, bảng và hình ảnh minh chứng từ tệp của sinh viên.</p>
          <a href={withBasePath(`/downloads/bai-${projectNumber}.pdf`)} target="_blank" rel="noreferrer">Đọc bản PDF ↗</a>
        </aside>
        <article className="document-paper" data-reveal>
          <DocumentContent projectNumber={projectNumber} />
        </article>
      </section>

      <nav className="project-pagination" aria-label="Chuyển giữa các bài tập">
        {previous ? (
          <Link href={`/projects/${previous.slug}`} className="pagination-link pagination-link--prev">
            <span aria-hidden="true">←</span>
            <span><small>Bài trước</small>{previous.shortTitle}</span>
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/projects/${next.slug}`} className="pagination-link pagination-link--next">
            <span><small>Bài tiếp theo</small>{next.shortTitle}</span>
            <span aria-hidden="true">→</span>
          </Link>
        ) : <span />}
      </nav>
      <Footer />
    </main>
  );
}
