import { ArrowRight } from "lucide-react";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="services-title"
            className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Our <span className="text-[#c8102e]">Services</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Home repair and technical maintenance for apartments, villas and
            offices across Dubai.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, description, icon: Icon, href }) => (
            <li
              key={title}
              className="group flex flex-col rounded-3xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-tint text-green transition-colors duration-300 group-hover:bg-green group-hover:text-white">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                {description}
              </p>
              <a
                href={href}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#c8102e] hover:text-[#c8102e]/80"
              >
                Learn more<span className="sr-only"> about {title}</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
