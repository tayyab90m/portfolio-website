"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteConfig } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header-wrap">
      <div className="site-header">
        <Link href="/" className="brand" aria-label="Saeed QA portfolio home">
          <span className="brand-mark brand-image">
            <Image src="/favicon.svg" alt="" width={46} height={46} priority />
          </span>
          <span>
            {siteConfig.shortName}
            <small>{siteConfig.role}</small>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href);

            return (
              <Link
                aria-current={isActive ? "page" : undefined}
                className={isActive ? "active" : undefined}
                key={item.href}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
