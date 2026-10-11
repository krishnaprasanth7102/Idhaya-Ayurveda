import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, BadgeCheck, CalendarCheck2, MessageCircle, Phone } from "lucide-react";
import { clinic } from "@/config/clinic";
import { getDictionary } from "@/lib/i18n";
import { getWhatsAppUrl } from "@/lib/contact";
import { localizedMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale === "ml" ? "ml" : "en");
  return localizedMetadata(
    locale === "ml" ? "ml" : "en",
    "doctor",
    dict.doctor.title,
    dict.doctor.bio,
  );
}

export default function DoctorPage({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <Suspense fallback={<div className="min-h-[50vh]" aria-busy="true" />}>
      <DoctorPageContent params={params} />
    </Suspense>
  );
}

async function DoctorPageContent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = locale === "ml" ? "ml" : "en";
  const dict = getDictionary(currentLocale);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative h-[500px] overflow-hidden rounded-[2rem] border border-[var(--border)]">
          <Image
            src="/images/dr-adarsh.png"
            alt={dict.doctor.photoAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-green-soft)]">{dict.nav.doctor}</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--heading)] sm:text-5xl">{dict.doctor.title}</h1>
          <p className="mt-2 font-semibold text-[var(--brand-green-soft)]">{dict.doctor.subtitle}</p>
          <p className="mt-6 text-base leading-7 text-[var(--muted)]">{dict.doctor.bio}</p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-[1.5rem] bg-[var(--soft-sage)] p-5">
              <BadgeCheck className="mb-3 text-[var(--brand-green-soft)]" size={20} />
              <p className="text-sm font-semibold text-[var(--heading)]">{dict.doctor.credentials}</p>
              <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
                {clinic.qualifications.map((qualification) => (
                  <li key={qualification}>• {qualification}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.5rem] bg-[var(--soft-sage)] p-5">
              <CalendarCheck2 className="mb-3 text-[var(--brand-green-soft)]" size={20} />
              <p className="text-sm font-semibold text-[var(--heading)]">{dict.doctor.registration}</p>
              <p className="mt-3 text-lg font-semibold text-[var(--text)]">{clinic.registrationNumber}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{dict.doctor.qualificationNote}</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href={clinic.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-5 py-3 text-sm font-semibold text-white">
              <Phone size={16} /> {clinic.phone}
            </a>
            <Link href={`/${currentLocale}/appointment`} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)]">
              {dict.about.cta} <ArrowRight size={16} />
            </Link>
            <a href={getWhatsAppUrl(currentLocale)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)]">
              <MessageCircle size={16} /> {dict.actions.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
