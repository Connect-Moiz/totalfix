# TOTALFIX Technical Services – homepage

Next.js (App Router) + Tailwind CSS v4 + lucide-react.

## Setup
```bash
npx create-next-app@latest totalfix --typescript --tailwind --eslint --app --import-alias "@/*"
cd totalfix
npm i lucide-react
# copy app/, components/, lib/, public/ from this folder over the generated project
npm run dev
```

## Before launch
- Edit `lib/site.ts`: real phone, WhatsApp number, email, hours and domain.
- Replace `public/images/hero.svg` with a real photo and update `src` in `components/Hero.tsx`.
- Point "Learn more" links to service pages when they exist.
- Add a real quote form or booking page; "Get a Free Quote" currently opens an email.
