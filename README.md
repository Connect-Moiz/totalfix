# P-FIX Technical Services, Dubai electrician website

Next.js (App Router) + Tailwind CSS v4 + lucide-react.

## Run
```bash
npm install
npm run dev      # local
npm run build && npm start   # production
```

## Where to edit
- `lib/site.ts`: phone, WhatsApp, email parts, hours, domain, services, reasons, steps, areas.
- `components/Hero.tsx`: hero slideshow images and text.
- `next.config.ts`: security headers (CSP, X-Frame-Options, etc.). If you add a new
  third-party script (chat widget, analytics, maps), add its domain to the CSP there.
- `public/images/`: hero photos and logos.
