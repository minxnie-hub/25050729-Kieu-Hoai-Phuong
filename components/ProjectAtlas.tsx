"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

function projectHash(index: number) {
  return `#du-an-bai-${projects[index].number}`;
}

function indexFromHash(hash: string) {
  const match = hash.match(/^#du-an-bai-(\d{2})$/);
  if (!match) return 0;
  const index = projects.findIndex((project) => project.number === match[1]);
  return index >= 0 ? index : 0;
}

export function ProjectAtlas() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeProject = projects[activeIndex];

  useEffect(() => {
    const syncFromUrl = () => setActiveIndex(indexFromHash(window.location.hash));
    syncFromUrl();
    window.addEventListener("hashchange", syncFromUrl);
    window.addEventListener("popstate", syncFromUrl);
    return () => {
      window.removeEventListener("hashchange", syncFromUrl);
      window.removeEventListener("popstate", syncFromUrl);
    };
  }, []);

  function selectProject(index: number, updateUrl = true) {
    setActiveIndex(index);
    if (updateUrl) {
      window.history.pushState(null, "", projectHash(index));
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") nextIndex = (index + 1) % projects.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft") nextIndex = (index - 1 + projects.length) % projects.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = projects.length - 1;
    else return;

    event.preventDefault();
    selectProject(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div className="project-browser" data-reveal>
      <div className="project-tabs" role="tablist" aria-label="Danh sách 6 bài tập">
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={project.slug}
              ref={(element) => { tabRefs.current[index] = element; }}
              id={`tab-${project.number}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${project.number}`}
              tabIndex={isActive ? 0 : -1}
              className={isActive ? "project-tab is-active" : "project-tab"}
              onClick={() => selectProject(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span>{project.number}</span>
              <strong>{project.shortTitle}</strong>
            </button>
          );
        })}
      </div>

      <article
        key={activeProject.slug}
        id={`panel-${activeProject.number}`}
        className="project-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeProject.number}`}
      >
        <header className="project-panel__header">
          <p>Bài {activeProject.number}</p>
          <h3>{activeProject.title}</h3>
          <p>{activeProject.summary}</p>
        </header>

        <div className="project-panel__brief">
          <section>
            <span>Mục tiêu</span>
            <p>{activeProject.goal}</p>
          </section>
          <section>
            <span>Quá trình thực hiện</span>
            <p>{activeProject.process}</p>
          </section>
          <section className="project-panel__takeaway">
            <span>Tổng kết rút ra</span>
            <p>{activeProject.takeaway}</p>
          </section>
        </div>

        <div className="project-panel__footer">
          <p>{activeProject.pages} trang · {activeProject.outcome}</p>
          <Link className="project-open" href={`/projects/${activeProject.slug}`}>
            Xem bài đầy đủ <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </article>
    </div>
  );
}
