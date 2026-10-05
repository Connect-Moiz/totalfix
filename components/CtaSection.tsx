import { Phone, MessageCircle } from "lucide-react";
import Button from "./ui/Button";
import { site } from "@/lib/site";

export default function CtaSection() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-title"
      className="py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-green px-6 py-14 text-center text-white shadow-xl sm:px-12 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-white/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-10 left-1/4 h-24 w-24 rounded-full bg-white/5"
          />

          <div className="relative mx-auto max-w-3xl">
            <h2
              id="cta-title"
              className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
            >
              Need a Repair? We&apos;re Ready to Help.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              Call or message us with what&apos;s wrong. We&apos;ll confirm a
              time and a price.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button href={site.phoneHref} variant="white">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call Now
              </Button>
              <Button href={site.whatsappHref} variant="black" external>
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Us
              </Button>
              <Button
                href={`mailto:${site.email}?subject=Quote%20request`}
                variant="red"
              >
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
