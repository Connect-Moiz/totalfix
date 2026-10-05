"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

import Button from "./ui/Button";
import { navLinks, site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 shadow-sm backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-8"
      >
        <a
          href="/"
          aria-label="Home"
          className="flex shrink-0 items-center justify-self-start"
        >
          <Image
            src="/images/logo-3.png"
            alt="Total Fix Technical Services"
            width={339}
            height={184}
            className="h-14 w-auto object-contain sm:h-16 lg:h-[68px]"
            priority
          />
        </a>

        <ul className="hidden items-center justify-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative block px-4 py-2 text-[15px] font-semibold text-ink transition-colors hover:text-green"
              >
                {l.label}
                <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 rounded-full bg-green transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 justify-self-end lg:flex">
          <Button href={site.phoneHref} variant="navcolor">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </Button>

          <Button href="#contact" variant="red">
            Get a Quote
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line text-ink hover:bg-green-tint lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-white lg:hidden"
      >
        <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line py-3 text-base font-medium text-ink hover:text-green"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-4 sm:px-6">
          <Button href={site.phoneHref} variant="navcolor">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </Button>

          <Button href="#contact" variant="red" onClick={() => setOpen(false)}>
            Get a Quote
          </Button>
        </div>
      </div>
    </header>
  );
}
