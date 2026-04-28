import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { experience } from "@/lib/site";

export const metadata: Metadata = {
  title: "QA Experience",
  description:
    "Muhammad Saeed Akram's QA and project coordination experience across AI eCommerce, fintech, ERP, APIs, data validation, and release management."
};

export default function ExperiencePage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Experience"
        title="5+ years across QA, IT operations, and delivery coordination."
        description="Saeed supports software teams by reviewing requirements, planning test coverage, validating AI workflows and APIs, tracking risks and dependencies, coordinating stakeholders, and improving release confidence."
      />

      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={`${item.role}-${item.period}`}>
            <p className="timeline-meta">{item.period}</p>
            <h2>{item.role}</h2>
            <h3>{item.company}</h3>
            <p>{item.details}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
