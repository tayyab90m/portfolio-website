import type { Metadata } from "next";
import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "QA Services",
  description:
    "Manual testing, automation testing, AI workflow validation, backend data validation, project coordination, and release QA services by Saeed."
};

export default function ServicesPage() {
  return (
    <section className="section">
      <SectionHeader
        eyebrow="QA Services"
        title="QA, AI validation, and delivery coordination for better releases."
        description="Saeed provides flexible QA and project coordination services for startups, agencies, product teams, and founders who need reliable testing, documentation, reporting, and release support."
      />

      <div className="grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
