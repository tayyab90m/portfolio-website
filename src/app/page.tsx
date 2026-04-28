import Link from "next/link";
import { projects, services, siteConfig, skills } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">QA Engineer - Manual & Automation Testing</p>
          <h1>Quality-first testing for confident product releases.</h1>
          <p className="lead">
            I am Muhammad Saeed Akram, a Senior QA Engineer and Project
            Coordinator with 5+ years of experience across web, mobile, fintech,
            ERP, AI-driven platforms, and eCommerce operations.
          </p>
          <div className="profile-strip" aria-label="Profile highlights">
            <span>{siteConfig.location}</span>
            <span>AI workflow and backend validation</span>
            <span>5+ years QA experience</span>
          </div>
          <div className="button-row">
            <Link className="button" href="/contact">
              Hire Saeed
            </Link>
            <a
              className="button-secondary"
              href={siteConfig.whatsapp}
              rel="noreferrer"
              target="_blank"
            >
              WhatsApp
            </a>
            <Link className="button-secondary" href="/projects">
              View QA Work
            </Link>
          </div>
        </div>

        <aside className="hero-card" aria-label="QA delivery dashboard">
          <div className="qa-dashboard">
            <div className="dashboard-row">
              <div>
                <strong>Release Readiness</strong>
                <p>Smoke, regression, risk checks, and go-live confidence.</p>
              </div>
              <span className="pulse-dot" aria-hidden="true" />
            </div>
            <div className="dashboard-panel">
              <div>
                <span>Current QA Coverage</span>
                <strong>Manual + API + AI Workflow Validation</strong>
              </div>
              <ul>
                <li>Acceptance criteria reviewed before sprint delivery</li>
                <li>Critical user journeys covered with smoke tests</li>
                <li>Backend data and MongoDB records verified</li>
                <li>Release notes, defects, and risks tracked clearly</li>
              </ul>
            </div>
            <div className="dashboard-row">
              <div>
                <strong>Testing Focus</strong>
                <p>Manual flows + stable automation</p>
              </div>
              <span>98%</span>
            </div>
            <div className="workflow-card">
              <div>
                <span>01</span>
                <strong>Plan</strong>
                <p>Scope, risks, acceptance criteria</p>
              </div>
              <div>
                <span>02</span>
                <strong>Test</strong>
                <p>Manual, API, regression, UAT</p>
              </div>
              <div>
                <span>03</span>
                <strong>Report</strong>
                <p>Defects, evidence, release notes</p>
              </div>
            </div>
            <div className="priority-strip">
              <span>Jira tracking</span>
              <span>Postman APIs</span>
              <span>MongoDB checks</span>
            </div>
            <div className="stats-grid">
              <div className="stat">
                <strong>50+</strong>
                <span>Test suites</span>
              </div>
              <div className="stat">
                <strong>300+</strong>
                <span>Bugs logged</span>
              </div>
              <div className="stat">
                <strong>24h</strong>
                <span>Fast QA support</span>
              </div>
            </div>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Services</p>
          <h2>QA and coordination support for every stage of delivery.</h2>
          <p>
            From requirements and project tracking to AI workflow validation,
            API testing, backend checks, and release readiness, Saeed helps
            teams catch issues before customers do.
          </p>
        </div>
        <div className="grid">
          {services.slice(0, 3).map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section two-column">
        <div className="content-card">
          <p className="eyebrow">Core Skills</p>
          <h2>Testing skills that fit modern software teams.</h2>
          <p>
            Saeed combines detail-oriented QA with project coordination, Agile
            delivery habits, clear documentation, and strong stakeholder
            communication.
          </p>
        </div>
        <div className="content-card">
          <div className="chip-list">
            {skills.map((skill) => (
              <span className="chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <p className="eyebrow">Featured Projects</p>
          <h2>Completed QA projects across eCommerce, ERP, HRM, POS, and mobile.</h2>
        </div>
        <div className="grid project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <p className="project-type">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>{project.impact}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
