import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/site";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Electrician in Dubai | P-FIX Technical Services",
  description:
    "Reliable electrician services across Dubai: fault finding, wiring, DB panels, switches and sockets, lighting, chandeliers, EV car chargers and electric geysers. Fast response, transparent pricing.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Electrician in Dubai | P-FIX Technical Services",
    description:
      "Fast, reliable electrician services across Dubai with clear pricing before work begins.",
    url: "/",
    siteName: "P-FIX Technical Services",
    type: "website",
    locale: "en_AE",
  },
};

export const viewport: Viewport = { themeColor: "#00732f" };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Ads Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18532298318"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-18532298318');
          `}
        </Script>
      </head>
      <body className="font-sans antialiased">{children}<FloatingContact /></body>
    </html>
  );
}