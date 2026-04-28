import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Completed QA Projects",
  description:
    "Completed QA projects by Muhammad Saeed Akram covering AI eCommerce, ERP, HIMS, POS, HRM, mobile apps, and regression coverage."
};

export default function ProjectsPage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Completed Projects"
        title="QA work across business-critical platforms."
        description="A simple overview of completed projects where Saeed applied manual testing, automation thinking, regression coverage, and release validation across web, mobile, and enterprise products."
      />

      <div className="grid project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <p className="project-type">{project.type}</p>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>{project.impact}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
