import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "P-FIX Technical Services | AC, Plumbing & Electrical in Dubai",
  description:
    "Reliable AC repair, plumbing, electrical and home maintenance services across Dubai. Fast response, transparent pricing, experienced technicians.",
  openGraph: {
    title: "P-FIX Technical Services, Dubai",
    description: "AC, plumbing, electrical and home maintenance across Dubai.",
    type: "website",
    locale: "en_AE",
  },
};

export const viewport: Viewport = { themeColor: "#00732f" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plex.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
