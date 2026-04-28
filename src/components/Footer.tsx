import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer-wrap">
      <div className="site-footer">
        <section className="footer-profile">
          <span className="brand-mark brand-image">
            <Image src="/favicon.svg" alt="" width={56} height={56} />
          </span>
          <div>
            <strong>{siteConfig.name}</strong>
            <p>
              Senior QA Engineer and Project Coordinator for AI workflows,
              manual testing, automation, backend validation, and release QA.
            </p>
          </div>
        </section>

        <section >
          <h3>Explore</h3>
          <div className="footer-links">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/services">Services</Link>
          </div>
        </section>

        <section >
          <h3>Contact</h3>
          <div className="footer-links">
            <a className="footer-icon-link" href={`mailto:${siteConfig.email}`}>
              <Image src="/email.png" alt="" width={28} height={28} />
              Email
            </a>
            <a
              className="footer-icon-link"
              href={siteConfig.whatsapp}
              rel="noreferrer"
              target="_blank"
            >
              <Image src="/whatsapp.png" alt="" width={28} height={28} />
              WhatsApp
            </a>
            <span>{siteConfig.phone}</span>
          </div>
        </section>

        <section >
          <h3>Profiles</h3>
          <div className="footer-links">
            <a href={siteConfig.linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <a href={siteConfig.github} rel="noreferrer" target="_blank">
              GitHub
            </a>
            <span>{siteConfig.location}</span>
          </div>
        </section>

        <div className="footer-bottom">
          <span>{siteConfig.email}</span>
          <span>Available for QA consulting and release support.</span>
        </div>
      </div>
    </footer>
  );
}
