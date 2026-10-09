import { Award, CalendarCheck, Wrench, Headphones } from "lucide-react";

const points = [
  {
    title: "Experience",
    text: "Our technicians have years of hands-on work in Dubai homes and buildings.",
    icon: Award,
  },
  {
    title: "Reliability",
    text: "Fixed appointment windows, clear communication, and follow-up after the job.",
    icon: CalendarCheck,
  },
  {
    title: "Professional workmanship",
    text: "Correct parts, tidy finishing and testing before we call a job done.",
    icon: Wrench,
  },
  {
    title: "Customer service",
    text: "A real person answers your call or message and stays with you until it's sorted.",
    icon: Headphones,
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="about-title"
            className="text-3xl font-bold tracking-tight text-[#141414] sm:text-4xl lg:text-5xl"
          >
            About <span className="text-[#c8102e]">PERFECT FIX</span>
          </h2>
          <p className="mt-4 text-[14px] font-semibold leading-relaxed text-[#141414] sm:text-[18px]">
            PERFECT FIX Technical Services provides professional home technical and
            maintenance services in Dubai. We cover AC, plumbing, electrical and
            general repairs, so one call handles most of what a home needs.
          </p>
          <p className="mt-4 text-[15px] font-medium leading-relaxed text-muted sm:text-[16px]">
            We keep things simple: explain the problem honestly, agree the price
            up front, and do the work properly.
          </p>
        </div>

        <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ title, text, icon: Icon }) => (
            <div
              key={title}
              className="group flex flex-col items-center rounded-3xl border border-line bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green hover:shadow-lg"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-tint text-green transition-colors duration-300 group-hover:bg-green group-hover:text-white">
                <Icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <dt className="mt-5 text-lg font-semibold text-ink sm:text-xl">
                {title}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {text}
              </dd>
              <span
                aria-hidden="true"
                className="mt-5 h-1 w-10 rounded-full bg-red transition-all duration-300 group-hover:w-16"
              />
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
