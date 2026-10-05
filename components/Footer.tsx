import Image from "next/image";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { areas, navLinks, services, site } from "@/lib/site";

const heading =
  "relative pb-3 text-sm font-semibold uppercase tracking-wider text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:rounded-full after:bg-green";
const link =
  "text-sm text-white/90 transition-all duration-200  hover:text-white";
const iconWrap =
  "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-green";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      <div className="h-1 w-full bg-gradient-to-r from-green via-green to-[#c8102e]" />

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-5 lg:px-8">
        <div className="sm:col-span-2 lg:col-span-1">
          <a href="/" aria-label="Home" className="inline-block rounded-xl p-3">
            <Image
              src="/images/logo-3.png"
              alt="Total Fix Technical Services"
              width={339}
              height={184}
              className="h-14 w-auto object-contain"
            />
          </a>
          <p className="mt-5 text-sm leading-relaxed text-white/90">
            Professional Electrical, AC, Plumbing & Home Maintenance Services. <br/>
            Car Charger, Electric Geyser Installation.
          </p>
        </div>

        <nav aria-label="Services">
          <h2 className={heading}>Services</h2>
          <ul className="mt-5 space-y-3">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href={s.href} className={`${link} inline-block`}>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Quick links">
          <h2 className={heading}>Quick links</h2>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={`${link} inline-block`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={heading}>Service areas</h2>
          <ul className="mt-5 space-y-3">
            {areas.slice(0, 6).map((a) => (
              <li key={a} className="text-sm text-white/90">
                {a}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={heading}>Contact</h2>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                href={site.phoneHref}
                className="group flex items-center gap-3 text-sm text-white/90 transition-colors hover:text-white"
              >
                <span className={iconWrap}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm text-white/90 transition-colors hover:text-white"
              >
                <span className={iconWrap}>
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                </span>
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-3 break-all text-sm text-white/90 transition-colors hover:text-white"
              >
                <span className={iconWrap}>
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-black/40">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/60 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {site.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
