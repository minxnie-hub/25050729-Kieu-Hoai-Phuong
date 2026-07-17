import fs from "node:fs";
import path from "node:path";
import { basePath } from "@/lib/paths";

export function DocumentContent({ projectNumber }: { projectNumber: number }) {
  const filePath = path.join(process.cwd(), "content", `p${projectNumber}.html`);
  const raw = fs.readFileSync(filePath, "utf8");
  const html = raw
    .replaceAll("__BASE_PATH__", basePath)
    .replace(/<img(?![^>]*\balt=)/g, '<img loading="lazy" alt="Minh chứng trong bài báo cáo"');
  return <div className="document-body" dangerouslySetInnerHTML={{ __html: html }} />;
}
