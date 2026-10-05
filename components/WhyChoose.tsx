import { reasons } from "@/lib/site";

export default function WhyChoose() {
  return (
    <section
      aria-labelledby="why-title"
      className="relative overflow-hidden border-y border-line bg-green-tint py-14 md:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-green/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-green/10"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="why-title"
            className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Why Choose <span className="text-[#c8102e]">TOTALFIX</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Straightforward service from people who do this every day.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, description, icon: Icon }, index) => (
            <li
              key={title}
              className="group relative flex gap-5 overflow-hidden rounded-3xl border border-line bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green hover:shadow-lg"
            >
              <span
                aria-hidden="true"
                className="absolute right-6 top-4 text-2xl font-bold text-green/10 transition-colors duration-300 group-hover:text-green/20"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-green text-white shadow-sm">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>

              <div className="relative">
                <h3 className="text-lg font-semibold text-ink sm:text-xl">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
