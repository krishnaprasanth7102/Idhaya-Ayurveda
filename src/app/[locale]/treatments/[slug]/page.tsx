import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { ArrowRight, ShieldAlert } from "lucide-react";
import { notFound } from "next/navigation";
import { treatments, treatmentMap } from "@/lib/content";
import { getDictionary } from "@/lib/i18n";
import { getWhatsAppUrl } from "@/lib/contact";
import { localizedMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return ["en", "ml"].flatMap((locale) =>
    treatments.map((treatment) => ({ locale, slug: treatment.slug })),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const currentLocale = locale === "ml" ? "ml" : "en";
  const treatment = treatmentMap[slug];
  if (!treatment) {
    const dict = getDictionary(currentLocale);
    return localizedMetadata(
      currentLocale,
      "treatments",
      dict.treatments.title,
      dict.treatments.subtitle,
    );
  }

  return localizedMetadata(
    currentLocale,
    `treatments/${slug}`,
    treatment.name[currentLocale],
    treatment.short[currentLocale],
  );
}

export default function TreatmentDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  return (
    <Suspense fallback={<div className="min-h-[50vh]" aria-busy="true" />}>
      <TreatmentDetailPageContent params={params} />
    </Suspense>
  );
}

async function TreatmentDetailPageContent({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const currentLocale = locale === "ml" ? "ml" : "en";
  const dict = getDictionary(currentLocale);
  const treatment = treatmentMap[slug];

  if (!treatment) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green-soft)]">{dict.treatments.details}</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--heading)] sm:text-6xl">{treatment.name[currentLocale]}</h1>
          <p className="mt-5 text-base leading-7 text-[var(--muted)]">{treatment.overview[currentLocale]}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={`/${currentLocale}/appointment`} className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-5 py-3 text-sm font-semibold text-white">
              {dict.actions.book} <ArrowRight size={16} />
            </Link>
            <Link href={`/${currentLocale}/treatments`} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--text)]">
              {dict.nav.treatments}
            </Link>
          </div>
        </div>

        <div className="relative h-[440px] overflow-hidden rounded-[2rem] border border-[var(--border)]">
          <Image
            src={treatment.image}
            alt={treatment.imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 sm:p-7">
          <h2 className="text-2xl font-semibold text-[var(--heading)]">{dict.treatments.procedure}</h2>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">{treatment.procedure[currentLocale]}</p>
        </div>
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 sm:p-7">
          <h2 className="text-2xl font-semibold text-[var(--heading)]">{dict.treatments.suitability}</h2>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">{treatment.whoMayNeed[currentLocale]}</p>
        </div>
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 sm:p-7">
          <h2 className="flex items-center gap-2 text-2xl font-semibold text-[var(--heading)]"><ShieldAlert size={18} className="text-[var(--brand-green-soft)]" /> {dict.treatments.precautions}</h2>
          <p className="mt-4 text-base leading-7 text-[var(--muted)]">{treatment.precautions[currentLocale]}</p>
        </div>
      </div>

      <div className="mt-10 rounded-[2rem] bg-[var(--soft-sage)] p-8 text-[var(--heading)]">
        <p className="text-lg font-medium">{dict.treatments.consult}</p>
        <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{dict.treatments.medicalNote}</p>
        <a
          href={getWhatsAppUrl(currentLocale)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-5 py-3 text-sm font-semibold text-white"
        >
          {dict.actions.whatsapp} <ArrowRight size={16} />
        </a>
      </div>
    </div>
  );
}
