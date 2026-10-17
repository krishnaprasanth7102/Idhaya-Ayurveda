import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { clinic } from "@/config/clinic";
import { getDictionary } from "@/lib/i18n";
import { getWhatsAppUrl } from "@/lib/contact";
import { localizedMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = locale === "ml" ? "ml" : "en";
  const dict = getDictionary(currentLocale);
  return localizedMetadata(
    currentLocale,
    "about",
    dict.about.title,
    dict.about.intro,
  );
}

export default function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <Suspense fallback={<div className="min-h-[50vh]" aria-busy="true" />}>
      <AboutPageContent params={params} />
    </Suspense>
  );
}

async function AboutPageContent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = locale === "ml" ? "ml" : "en";
  const dict = getDictionary(currentLocale);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green-soft)]">{dict.about.title}</p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--heading)] sm:text-6xl">{dict.about.title}</h1>
      </div>

      <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 sm:p-8">
        <p className="text-lg leading-8 text-[var(--muted)]">{dict.about.intro}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.5rem] bg-[var(--soft-sage)] p-5 sm:p-6">
            <h2 className="text-2xl font-semibold text-[var(--heading)]">{dict.about.approachTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{dict.about.approachBody}</p>
          </div>
          <div className="rounded-[1.5rem] bg-[var(--soft-sage)] p-5 sm:p-6">
            <h2 className="text-2xl font-semibold text-[var(--heading)]">{dict.about.clinicTitle}</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{dict.about.clinicBody}</p>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative h-[340px] overflow-hidden rounded-[1.5rem]">
            <Image
              src="/images/dr-adarsh.png"
              alt={dict.doctor.photoAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green-soft)]">{dict.about.doctorTitle}</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--heading)] sm:text-4xl">{clinic.doctor}</h2>
            <p className="mt-5 text-base leading-7 text-[var(--muted)]">{dict.doctor.bio}</p>
            <ul className="mt-6 space-y-3 text-sm text-[var(--text)]">
              {clinic.qualifications.map((qualification) => (
                <li key={qualification}>• {qualification}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-[var(--muted)]">
              {dict.doctor.registration}: {clinic.registrationNumber}
            </p>
            <Link href={`/${currentLocale}/appointment`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-5 py-3 text-sm font-semibold text-white">
              {dict.about.cta} <ArrowRight size={16} />
            </Link>
            <a
              href={getWhatsAppUrl(currentLocale)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-5 py-3 text-sm font-semibold text-[var(--text)]"
            >
              <MessageCircle size={16} /> {dict.actions.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
