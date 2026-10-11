import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight } from "lucide-react";
import { treatments } from "@/lib/content";
import { getDictionary } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = locale === "ml" ? "ml" : "en";
  const dict = getDictionary(currentLocale);
  return localizedMetadata(
    currentLocale,
    "treatments",
    dict.treatments.title,
    dict.treatments.subtitle,
  );
}

export default function TreatmentsPage({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <Suspense fallback={<div className="min-h-[50vh]" aria-busy="true" />}>
      <TreatmentsPageContent params={params} />
    </Suspense>
  );
}

async function TreatmentsPageContent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = locale === "ml" ? "ml" : "en";
  const dict = getDictionary(currentLocale);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green-soft)]">{dict.nav.treatments}</p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--heading)] sm:text-6xl">{dict.treatments.title}</h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">{dict.treatments.subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {treatments.map((treatment, index) => (
          <div key={treatment.slug} className="group overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-[var(--card)] shadow-[0_20px_40px_rgba(7,32,21,0.06)]">
            <div className="relative h-64 overflow-hidden">
              <Image
                src={treatment.image}
                alt={treatment.imageAlt[currentLocale]}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold leading-tight text-[var(--heading)]">{treatment.name[currentLocale]}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{treatment.short[currentLocale]}</p>
              <Link href={`/${currentLocale}/treatments/${treatment.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-green-soft)]">
                {dict.actions.viewDetails} <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
