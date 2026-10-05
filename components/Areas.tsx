import { MapPin } from "lucide-react";
import { areas } from "@/lib/site";

export default function Areas() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-title"
      className="relative overflow-hidden border-y border-line bg-green-tint py-14 md:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-green/10"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="areas-title"
            className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Areas <span className="text-[#c8102e]">We Serve</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Our teams work across Dubai, so most visits are same-day. Don&apos;t
            see your area? Call us and we&apos;ll confirm.
          </p>
        </div>

        <ul className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-3 sm:gap-4">
          {areas.map((a) => (
            <li
              key={a}
              className="group flex items-center gap-2.5 rounded-full border border-line bg-white py-2.5 pl-2.5 pr-5 text-sm font-semibold text-ink shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:text-base"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red/10 text-red transition-colors duration-300">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              {a}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
