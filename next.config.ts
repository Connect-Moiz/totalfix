import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

/**
 * Production origin of the site. Used for the CORS header below so the site is
 * not readable cross-origin from arbitrary websites.
 */
const SITE_ORIGIN = "https://pfix-technicalservices.com";

/**
 * Content-Security-Policy
 *
 * Allow-lists only what the site actually loads:
 *  - its own files (fonts are self-hosted by next/font at build time)
 *  - Google Tag Manager / Google Ads (gtag.js + conversion tracking)
 *
 * If you add another third-party script (chat widget, analytics, map...),
 * add its domain to the matching directive here, otherwise the browser blocks it.
 *
 * 'unsafe-inline' is required for script-src because Next.js injects small inline
 * bootstrap scripts, and this site uses an inline Google Ads snippet and JSON-LD.
 * (A nonce-based policy is stricter but forces every page to render dynamically.)
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com https://www.googleadservices.com https://googleads.g.doubleclick.net https://www.google.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.google.com https://www.google.ae https://www.googletagmanager.com https://www.googleadservices.com https://*.g.doubleclick.net https://www.google-analytics.com",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com https://*.g.doubleclick.net https://www.googleadservices.com https://www.google.com https://www.google.ae",
  "frame-src https://www.googletagmanager.com https://td.doubleclick.net https://bid.g.doubleclick.net",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  // Scan: Missing Content-Security-Policy
  { key: "Content-Security-Policy", value: csp },
  // Scan: Missing X-Frame-Options (clickjacking). frame-ancestors above covers modern browsers.
  { key: "X-Frame-Options", value: "DENY" },
  // Scan: Missing X-Content-Type-Options
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Scan: Missing Referrer-Policy
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Scan: Missing Permissions-Policy. The site uses none of these features.
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=(), magnetometer=(), gyroscope=(), accelerometer=(), interest-cohort=()",
  },
  // Force HTTPS for returning visitors.
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  // Scan: Permissive CORS wildcard. Only our own origin may read responses cross-origin.
  { key: "Access-Control-Allow-Origin", value: SITE_ORIGIN },
  { key: "Vary", value: "Origin" },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
