import { steps } from "@/lib/site";

export default function HowItWorks() {
  return (
    <section aria-labelledby="how-title" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="how-title"
            className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            How It <span className="text-[#c8102e]">Works</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Four steps from first call to finished job.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden="true"
            className="absolute left-[12%] right-[12%] top-7 hidden border-t-2 border-dashed border-green/40 lg:block"
          />

          <ol className="relative grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ title, description, icon: Icon }, i) => (
              <li
                key={title}
                className="group relative flex flex-col items-center rounded-3xl border border-line bg-white px-6 pb-8 pt-12 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green hover:shadow-lg"
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-7 left-1/2 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white bg-red text-xl font-bold text-white shadow-md"
                >
                  {i + 1}
                </span>

                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-tint text-green transition-colors duration-300 group-hover:bg-green group-hover:text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>

                <h3 className="mt-5 text-lg font-semibold text-ink sm:text-xl">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
