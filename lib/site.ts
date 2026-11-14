import {
  Zap, PlugZap, Lightbulb, SearchCheck, CircuitBoard, Sparkles, BatteryCharging, Heater,
  UserCheck, Clock, BadgeCheck, Receipt, ShieldCheck, ThumbsUp,
  Phone, FileText, CalendarCheck, CheckCircle2,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "P-FIX",
  fullName: "P-FIX Technical Services",
  phone: "+971509974160",
  phoneHref: "tel:+971509974160",
  whatsappHref: "https://wa.me/971509974160?text=Hello%20P-FIX%2C%20I%20need%20a%20quote.",
  // Email is assembled in the browser (see components/ui/useEmail.ts) so it is not
  // exposed as plain text in the page HTML to scrapers.
  emailUser: "pfix.services",
  emailDomain: "gmail.com",
  hours: "Open daily, 7:00 am – 10:00 pm",
  url: "https://pfix-technicalservices.com",
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
  { title: "Electrical Fault Finding", description: "Find and fix power failures, tripping breakers, short circuits and faulty wiring.", icon: SearchCheck, href: "#contact" },
  { title: "Rewiring & Upgrades", description: "Safe rewiring, extra points and load upgrades for apartments, villas and offices.", icon: Zap, href: "#contact" },
  { title: "DB Panel & Breakers", description: "Distribution board repair, MCB and RCCB replacement, labelling and safety testing.", icon: CircuitBoard, href: "#contact" },
  { title: "Switch & Socket Repair", description: "Replace faulty switches, sockets and breakers with correctly rated parts.", icon: PlugZap, href: "#contact" },
  { title: "Light Fixture Installation", description: "Ceiling, wall and outdoor lights, ceiling fans and LED upgrades fitted neatly.", icon: Lightbulb, href: "#contact" },
  { title: "Chandelier Installation", description: "Careful hanging, wiring and testing of chandeliers and decorative lighting.", icon: Sparkles, href: "#contact" },
  { title: "EV Car Charger Installation", description: "Home EV charger installation with a dedicated, correctly protected circuit.", icon: BatteryCharging, href: "#contact" },
  { title: "Electric Geyser Installation", description: "Electric water heater supply connection, replacement and safe wiring.", icon: Heater, href: "#contact" },
];

export const footer = [
  { title: "Electrical Fault Finding", href: "#contact" },
  { title: "Rewiring & Upgrades", href: "#contact" },
  { title: "DB Panel & Breakers", href: "#contact" },
  { title: "Switch & Socket Repair", href: "#contact" },
  { title: "Light Fixture Installation", href: "#contact" },
  { title: "Chandelier Installation", href: "#contact" },
  { title: "EV Car Charger Installation", href: "#contact" },
  { title: "Electric Geyser Installation", href: "#contact" },
];

export const reasons = [
  { title: "Experienced electricians", description: "Trained professionals who trace the fault before they quote.", icon: UserCheck },
  { title: "Fast response", description: "Same-day visits across Dubai for urgent electrical faults, with a clear arrival window.", icon: Clock },
  { title: "Quality workmanship", description: "Proper cables, correctly rated parts and every circuit tested before we leave.", icon: BadgeCheck },
  { title: "Transparent pricing", description: "You approve the price before work starts. No hidden call-out or add-on charges.", icon: Receipt },
  { title: "Safe & reliable", description: "We turn up when we say we will, work safely and stand behind every repair.", icon: ShieldCheck },
  { title: "Customer satisfaction", description: "We follow up after every job and return to fix anything that isn't right.", icon: ThumbsUp },
];

export const steps = [
  { title: "Contact us", description: "Call, WhatsApp or send a request. Tell us what needs fixing.", icon: Phone },
  { title: "Get a quote", description: "We confirm the scope and give you a clear price.", icon: FileText },
  { title: "Electrician visits", description: "An electrician arrives at the agreed time with the right tools.", icon: CalendarCheck },
  { title: "Job completed", description: "We finish the work, test the circuit and clean up.", icon: CheckCircle2 },
];

export const areas = [
  "Dubai Marina", "Downtown Dubai", "Business Bay", "Jumeirah", "JVC", "Al Barsha",
  "Dubai Hills", "Arjan", "Al Furjan", "Al Nahda", "Mirdif","Dubai Harbour","Emirates Hills","Jumeirah Park","Jumeirah Islands","Jebel Ali","Dubai Internet City","Dubai Media City","Motor City","Town Square Dubai","Arabian Ranches","Dubai Festival City","Dubai Creek Harbour","Ras Al Khor","Nad Al Sheba","Dubai Silicon Oasis","International City","Al Warqa","Al Quoz","Muhaisnah",
];
