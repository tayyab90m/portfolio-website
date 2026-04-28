import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="floating-actions" aria-label="Quick contact actions">
      <a
        className="floating-button whatsapp-button"
        href={siteConfig.whatsapp}
        rel="noreferrer"
        target="_blank"
        aria-label="Contact Muhammad Saeed Akram on WhatsApp"
      >
        <Image
          src="/whatsapp.png"
          alt=""
          aria-hidden="true"
          width={36}
          height={36}
        />
      </a>
      <a
        className="floating-button email-button"
        href={`mailto:${siteConfig.email}`}
        aria-label="Email Muhammad Saeed Akram"
      >
        <Image
          src="/email.png"
          alt=""
          aria-hidden="true"
          width={34}
          height={34}
        />
      </a>
    </div>
  );
}
