"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Users, Zap, Award } from "lucide-react";
import Button from "./ui/Button";
import { site } from "@/lib/site";

const trust = [
  { label: "Experienced technicians", icon: Users },
  { label: "Fast response", icon: Zap },
  { label: "Quality work", icon: Award },
];

const slides = [
  {
    src: "/images/he-1.jpeg",
    alt: "PERFECT FIX technician repairing an air conditioning unit",
  },
  {
    src: "/images/he-2.jpeg",
    alt: "Plumber fixing a kitchen tap in a Dubai home",
  },
  {
    src: "/images/he-5.jpeg",
    alt: "Electrician checking a distribution board",
  },
  { src: "/images/he-4.jpeg", alt: "Handyman completing a home repair" },
   { src: "/images/he-3.jpeg", alt: "Chandelier installation" },
    { src: "/images/he-6.jpeg", alt: "Ceiling light installation" },
    { src: "/images/he-7.jpeg", alt: "Fan installation" },
];

const INTERVAL_MS = 3500;

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [active]);

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden border-b border-line"
    >
      <div className="absolute inset-0 -z-10 bg-black" aria-hidden="true">
        {slides.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <h1
            id="hero-title"
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Reliable Technical Services{" "}
            <span className="text-[#c8102e]">Across Dubai</span>
          </h1>
          <p className="mt-3 text-lg font-semibold text-white">
            Professional Electrical, AC, Plumbing & Home Maintenance Services.
            <br /> Car Charger, Electric Geyser,Chandelier light Installation.
          </p>
          <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-white/80">
            From faulty wiring and power issues to a leaking tap or failed AC,
            our technicians arrive on time, diagnose the problem and provide a
            clear price before work begins.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#contact" variant="red">
              Get a Free Quote
            </Button>
            <Button href={site.phoneHref} variant="green">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call Now
            </Button>
            <Button href={site.whatsappHref} variant="outline" external>
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </Button>
          </div>

          <ul className="mt-10 grid gap-4 border-t border-white/20 pt-6 sm:grid-cols-3">
            {trust.map(({ label, icon: Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 text-sm font-medium text-white"
              >
                <Icon
                  className="h-5 w-5 shrink-0 text-green"
                  aria-hidden="true"
                />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
