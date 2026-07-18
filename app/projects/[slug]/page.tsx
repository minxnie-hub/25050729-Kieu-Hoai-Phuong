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
    <main id="main-content" className={`page-shell detail-page detail-page--${project.accent}`}>
      <SiteHeader />

      <section className="detail-hero">
        <div className="detail-hero__copy" data-reveal>
          <Link href="/#du-an" className="back-link"><span aria-hidden="true">←</span> Quay lại 6 bài tập</Link>
          <p className="detail-index">Bài {project.number}</p>
          <h1>{project.title}</h1>
          <p className="detail-summary">{project.summary}</p>
          <p className="detail-meta">{project.pages} trang · {project.tags.join(" · ")}</p>
          <div className="detail-actions">
            <a href={withBasePath(`/downloads/bai-${projectNumber}.pdf`)} target="_blank" rel="noreferrer" className="button-primary">Mở bản PDF <span aria-hidden="true">↗</span></a>
            <a href={withBasePath(`/downloads/bai-${projectNumber}.docx`)} download className="button-text">Tải bản DOCX</a>
          </div>
        </div>
      </section>

      <section className="project-brief" aria-label="Tóm tắt bài tập">
        <article data-reveal><span>Mục tiêu</span><p>{project.goal}</p></article>
        <article data-reveal><span>Quá trình thực hiện</span><p>{project.process}</p></article>
        <article className="project-brief__takeaway" data-reveal><span>Tổng kết rút ra</span><p>{project.takeaway}</p></article>
      </section>

      <section className="document-section" aria-labelledby="document-title">
        <aside className="reading-rail">
          <p className="section-kicker">Nội dung gốc</p>
          <h2 id="document-title">Bài nộp đầy đủ</h2>
          <p>Phần dưới giữ nguyên nội dung, thứ tự bảng và hình ảnh minh chứng từ tệp của sinh viên.</p>
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
