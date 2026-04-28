import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { education, siteConfig, skills } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Saeed",
  description:
    "Learn about Muhammad Saeed Akram, a Senior QA Engineer and Project Coordinator focused on manual testing, automation testing, AI workflow validation, project coordination, and release quality."
};

export default function AboutPage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="About Me"
        title="I connect quality engineering with delivery coordination."
        description="Muhammad Saeed Akram is a Senior QA Engineer and Project Coordinator from Lahore, Pakistan with 5+ years of experience across web, mobile, fintech, ERP, AI-driven platforms, and eCommerce operations."
      />

      <div className="profile-summary">
        <article className="summary-card">
          <span>Location</span>
          <strong>{siteConfig.location}</strong>
        </article>
        <article className="summary-card">
          <span>Education</span>
          <strong>{siteConfig.education}</strong>
        </article>
        <article className="summary-card">
          <span>Current Role</span>
          <strong>{siteConfig.role}</strong>
        </article>
      </div>

      <div className="two-column">
        <article className="content-card">
          <h2>QA Profile</h2>
          <p>
            I support IT operations, service delivery, and software projects by
            managing test coverage, project documentation, risk tracking, release
            readiness, and cross-functional communication.
          </p>
          <p>
            My experience includes functional, regression, sanity, smoke, UAT,
            API, performance, AI agent, AI workflow, backend, and data integrity
            testing using tools such as Jira, Confluence, Azure DevOps, Postman,
            Swagger, JMeter, MongoDB, and Playwright.
          </p>
        </article>

        <article className="content-card">
          <h2>Skill Set</h2>
          <div className="chip-list">
            {skills.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </article>
      </div>

      <section className="section compact-section">
        <div className="section-header">
          <p className="eyebrow">Education</p>
          <h2>Academic background.</h2>
        </div>
        <div className="grid">
          {education.map((item) => (
            <article className="content-card" key={item.degree}>
              <p className="timeline-meta">{item.period}</p>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
