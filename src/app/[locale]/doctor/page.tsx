import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, BadgeCheck, MessageCircle, Phone } from "lucide-react";
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
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_1.05fr] lg:items-center">
        <div className="relative h-[560px] overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)]">
          <Image
            src="/images/dr-adarsh.png"
            alt={dict.doctor.photoAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="space-y-5">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-green-soft)]">{dict.nav.doctor}</p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl leading-none text-[var(--heading)] sm:text-6xl">
              {dict.doctor.title}
            </h1>
            <p className="mt-3 text-2xl font-medium text-[var(--brand-green-soft)]">{dict.doctor.subtitle}</p>
          </div>

          <p className="max-w-[62ch] text-base leading-8 text-[var(--muted)]">{dict.doctor.bio}</p>

          <div className="rounded-[1.5rem] bg-[var(--soft-sage)] p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <BadgeCheck className="shrink-0 text-[var(--brand-green-soft)]" size={22} />
              <p className="text-lg font-semibold text-[var(--heading)]">{dict.doctor.credentials}</p>
            </div>
            <ul className="mt-4 space-y-2 text-base text-[var(--muted)]">
              {clinic.qualifications.map((qualification) => (
                <li key={qualification} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-green-soft)]" />
                  <span>{qualification}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={clinic.phoneHref}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[var(--brand-green)] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(18,70,48,0.16)]"
            >
              <Phone size={16} /> {clinic.phone}
            </a>
            <Link
              href={`/${currentLocale}/appointment`}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)]"
            >
              {dict.about.cta} <ArrowRight size={16} />
            </Link>
          </div>

          <a
            href={getWhatsAppUrl(currentLocale)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)] transition hover:border-[var(--brand-green-soft)] hover:text-[var(--brand-green-soft)]"
          >
            <MessageCircle size={16} /> {dict.actions.whatsapp}
          </a>
        </div>
      </div>
    </div>
  );
}
