import {
  Snowflake, Droplets, Zap, Wrench, Droplet, PlugZap, Lightbulb, Hammer,
  UserCheck, Clock, BadgeCheck, Receipt, ShieldCheck, ThumbsUp,
  Phone, FileText, CalendarCheck, CheckCircle2,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "TOTALFIX",
  fullName: "TOTALFIX Technical Services",
  phone: "+971509974160",
  phoneHref: "tel:+971509974160",
  whatsappHref: "https://wa.me/971509974160?text=Hello%20TOTALFIX%2C%20I%20need%20a%20quote.",
  email: "info@totalfix.ae",
  hours: "Open daily, 7:00 am – 10:00 pm",
  url: "https://www.totalfix.ae",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Areas We Serve", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

export type Service = { title: string; description: string; icon: LucideIcon; href: string };

export const services: Service[] = [
   { title: "Electrical", description: "Fault finding, rewiring, DB panel work and safe, tested installations.", icon: Zap, href: "#contact" },
  { title: "AC Repair & Maintenance", description: "Servicing, gas refilling, cleaning and repair for split, ducted and window units.", icon: Snowflake, href: "#contact" },
  { title: "Plumbing", description: "Pipe repairs, drain unblocking, mixers, heaters and bathroom fittings.", icon: Droplets, href: "#contact" },
  { title: "Home Maintenance", description: "Scheduled upkeep for apartments and villas, so small issues stay small.", icon: Wrench, href: "#contact" },
  { title: "Water Leak Repair", description: "Locate and fix leaking pipes, taps, flush tanks and under-sink lines.", icon: Droplet, href: "#contact" },
  { title: "Switch & Socket Repair", description: "Replace faulty switches, sockets and breakers with correctly rated parts.", icon: PlugZap, href: "#contact" },
  { title: "Light Fixture Installation", description: "Ceiling, wall and outdoor lights, chandeliers and LED upgrades fitted neatly.", icon: Lightbulb, href: "#contact" },
  { title: "General Handyman", description: "Mounting, assembly, door and cabinet fixes, and other small jobs around the home.", icon: Hammer, href: "#contact" },
];

export const reasons = [
  { title: "Experienced technicians", description: "Trained professionals who diagnose the problem before they quote.", icon: UserCheck },
  { title: "Fast response", description: "Same-day visits across Dubai for urgent repairs, with a clear arrival window.", icon: Clock },
  { title: "Quality workmanship", description: "Proper materials, clean finishing and work checked before we leave.", icon: BadgeCheck },
  { title: "Transparent pricing", description: "You approve the price before work starts. No hidden call-out or add-on charges.", icon: Receipt },
  { title: "Reliable service", description: "We turn up when we say we will, and we stand behind the repair.", icon: ShieldCheck },
  { title: "Customer satisfaction", description: "We follow up after every job and return to fix anything that isn't right.", icon: ThumbsUp },
];

export const steps = [
  { title: "Contact us", description: "Call, WhatsApp or send a request. Tell us what needs fixing.", icon: Phone },
  { title: "Get a quote", description: "We confirm the scope and give you a clear price.", icon: FileText },
  { title: "Technician visits", description: "A technician arrives at the agreed time with the right tools.", icon: CalendarCheck },
  { title: "Job completed", description: "We finish the work, test it and clean up.", icon: CheckCircle2 },
];

export const areas = [
  "Dubai Marina", "Downtown Dubai", "Business Bay", "Jumeirah", "JVC", "Al Barsha",
  "Dubai Hills", "Arjan", "Al Furjan", "Al Nahda", "Mirdif",
];
