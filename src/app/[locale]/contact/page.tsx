import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Clock3 } from "lucide-react";
import { clinic } from "@/config/clinic";
import { getDictionary } from "@/lib/i18n";
import { getWhatsAppUrl } from "@/lib/contact";
import { localizedMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale === "ml" ? "ml" : "en");
  return localizedMetadata(
    locale === "ml" ? "ml" : "en",
    "contact",
    dict.contact.title,
    `${dict.contact.address}: ${clinic.address}`,
  );
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = locale === "ml" ? "ml" : "en";
  const dict = getDictionary(currentLocale);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green-soft)]">{dict.contact.title}</p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--heading)] sm:text-6xl">{dict.contact.title}</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 sm:p-8">
          <ul className="space-y-6">
            <li className="flex items-start gap-3"><Phone className="mt-1 text-[var(--brand-green-soft)]" size={18} /><div><p className="text-sm font-semibold text-[var(--heading)]">{dict.contact.phone}</p><a href={clinic.phoneHref} className="text-[var(--muted)]">{clinic.phone}</a></div></li>
            <li className="flex items-start gap-3"><Mail className="mt-1 text-[var(--brand-green-soft)]" size={18} /><div><p className="text-sm font-semibold text-[var(--heading)]">{dict.contact.email}</p><a href={clinic.emailHref} className="text-[var(--muted)]">{clinic.email}</a></div></li>
            <li className="flex items-start gap-3"><MapPin className="mt-1 text-[var(--brand-green-soft)]" size={18} /><div><p className="text-sm font-semibold text-[var(--heading)]">{dict.contact.address}</p><p className="text-[var(--muted)]">{clinic.address}</p></div></li>
            <li className="flex items-start gap-3"><Clock3 className="mt-1 text-[var(--brand-green-soft)]" size={18} /><div><p className="text-sm font-semibold text-[var(--heading)]">{dict.contact.hours}</p><p className="text-[var(--muted)]">{dict.contact.weekdayHours}: {clinic.hours.weekdays}</p><p className="text-[var(--muted)]">{dict.contact.sundayHours}: {clinic.hours.sunday}</p></div></li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={clinic.phoneHref} className="inline-flex rounded-full bg-[var(--brand-green)] px-4 py-3 text-sm font-semibold text-white">{dict.actions.callNow}</a>
            <a href={getWhatsAppUrl(currentLocale)} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm font-semibold text-[var(--text)]">{dict.contact.whatsapp} · {clinic.phone}</a>
            <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm font-semibold text-[var(--text)]">{dict.contact.map}</a>
          </div>
        </div>

        <div className="relative h-[520px] overflow-hidden rounded-[2rem] border border-[var(--border)]">
          <Image
            src="/images/clinic-entrance.png"
            alt={dict.about.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <Link href={`/${currentLocale}/appointment`} className="inline-flex rounded-full bg-[var(--brand-green)] px-5 py-3 text-sm font-semibold text-white">{dict.actions.book}</Link>
      </div>
    </div>
  );
}
