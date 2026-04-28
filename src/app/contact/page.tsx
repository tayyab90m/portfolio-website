import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Saeed",
  description:
    "Contact Saeed for manual testing, automation testing, regression testing, QA strategy, and release validation services."
};

export default function ContactPage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="Contact"
        title="Need QA support for your next release?"
        description="Share your product, testing goals, timeline, and release risks. Saeed can help with manual QA, automation, regression coverage, and defect validation."
      />

      <div className="two-column">
        <article className="contact-card">
          <h2>Start a QA conversation</h2>
          <p>
            Contact Saeed with a short description of the product, current
            testing process, target platforms, and the kind of support you need.
          </p>
          <div className="button-row">
            <a className="button" href={`mailto:${siteConfig.email}`}>
              Email Saeed
            </a>
            <a
              className="button-secondary"
              href={siteConfig.whatsapp}
              rel="noreferrer"
              target="_blank"
            >
              WhatsApp
            </a>
          </div>
        </article>

        <article className="contact-card">
          <h2>Contact Links</h2>
          <p>
            Based in {siteConfig.location} and available for QA consulting,
            project testing, and release support.
          </p>
          <div className="chip-list">
            <a className="chip" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <a
              className="chip"
              href={siteConfig.whatsapp}
              rel="noreferrer"
              target="_blank"
            >
              {siteConfig.phone}
            </a>
            <a
              className="chip"
              href={siteConfig.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="chip"
              href={siteConfig.github}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </article>
      </div>

      <article className="contact-card">
        <h2>Useful Details to Send</h2>
        <p>Product type, web or mobile platforms, release date, known risks.</p>
        <p>Manual testing needs, automation goals, test cases, and bug backlog.</p>
        <p>Preferred tools, communication channel, and reporting format.</p>
      </article>
    </section>
  );
}
