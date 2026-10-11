import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import type { Locale } from "@/config/clinic";
import type { Messages } from "@/lib/i18n";
import { getWhatsAppUrl } from "@/lib/contact";

export function Footer({ locale, dict }: { locale: Locale; dict: Messages }) {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--footer)] text-[var(--white)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="relative h-14 w-24">
              <Image
                src="/images/idhaya-logo-white.png"
                alt="Idhaya Ayurveda"
                fill
                sizes="96px"
                className="object-contain"
              />
            </div>
          </div>
          <p className="max-w-md text-sm text-[var(--footer-text)]">
            {dict.footer.summary}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">{dict.footer.nav}</h3>
          <ul className="space-y-3 text-sm text-[var(--footer-text)]">
            <li><Link href={`/${locale}`}>{dict.nav.home}</Link></li>
            <li><Link href={`/${locale}/about`}>{dict.nav.about}</Link></li>
            <li><Link href={`/${locale}/treatments`}>{dict.nav.treatments}</Link></li>
            <li><Link href={`/${locale}/contact`}>{dict.nav.contact}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">{dict.footer.visit}</h3>
          <ul className="space-y-3 text-sm text-[var(--footer-text)]">
            <li className="flex items-start gap-2"><Phone size={16} className="mt-0.5" /> <a href={clinic.phoneHref}>{clinic.phone}</a></li>
            <li className="flex items-start gap-2">
              <MessageCircle size={16} className="mt-0.5" />
              <a href={getWhatsAppUrl(locale)} target="_blank" rel="noopener noreferrer">
                {dict.contact.whatsapp} · {clinic.phone}
              </a>
            </li>
            <li className="flex items-start gap-2"><Mail size={16} className="mt-0.5" /> <a href={clinic.emailHref}>{clinic.email}</a></li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5" />
              <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {clinic.address}
              </a>
            </li>
            <li className="pt-2">
              <p className="mb-1 font-semibold text-white">{dict.footer.hours}</p>
              <p>{dict.common.weekdays}</p>
              <p>{dict.common.sunday}</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 text-xs text-[var(--footer-text)] sm:px-6 lg:px-8">
          <p>{dict.footer.copyright}</p>
          <Link href={`/${locale}/privacy`} className="hover:text-white">{dict.footer.privacy}</Link>
        </div>
      </div>
    </footer>
  );
}
