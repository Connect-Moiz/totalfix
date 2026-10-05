import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import HowItWorks from "@/components/HowItWorks";
import Areas from "@/components/Areas";
import About from "@/components/About";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.fullName,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  areaServed: "Dubai, United Arab Emirates",
};

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <TopBar />
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <WhyChoose />
        <HowItWorks />
        <Areas />
        <About />
        <CtaSection />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
