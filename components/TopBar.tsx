import { MapPin, Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function TopBar() {
  return (
    <div className="bg-green text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 sm:text-sm lg:px-8">
        <p className="flex items-center gap-1.5">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>Serving all of Dubai<span className="hidden md:inline"> · {site.hours}</span></span>
        </p>
        <div className="flex items-center gap-4">
          <a href={site.phoneHref} className="flex items-center gap-1.5 font-medium hover:underline">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{site.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
          <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-medium hover:underline">
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
