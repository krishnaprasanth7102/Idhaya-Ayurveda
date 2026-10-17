"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { treatments } from "@/lib/content";
import type { Messages } from "@/lib/i18n";

export function FeaturedTreatments({ locale, dict }: { locale: "en" | "ml"; dict: Messages }) {
  const featuredTreatments = treatments.filter(
    (treatment) => treatment.slug !== "physio-ayurveda-combo-therapy",
  );

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">{dict.home.featured}</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--heading)] sm:text-4xl lg:text-5xl">{dict.home.featuredTitle}</h2>
          <p className="mt-3 max-w-2xl text-sm text-[var(--muted)]">{dict.home.featuredBody}</p>
        </div>
        <Link href={`/${locale}/treatments`} className="hidden text-sm font-semibold text-[var(--brand-green-soft)] md:inline-flex">
          {dict.actions.learnMore} <ArrowUpRight className="ml-1" size={16} />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {featuredTreatments.map((treatment, index) => (
          <motion.div
            key={treatment.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="group overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-[var(--card)] shadow-[0_18px_40px_rgba(18,42,30,0.06)]"
          >
            <div className="relative h-64 overflow-hidden">
              <Image
                src={treatment.image}
                alt={treatment.imageAlt[locale]}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                loading={index === 0 ? "eager" : "lazy"}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold leading-tight text-[var(--heading)]">{treatment.name[locale]}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{treatment.short[locale]}</p>
              <Link href={`/${locale}/treatments/${treatment.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-green-soft)]">
                {dict.actions.viewDetails} <ArrowUpRight size={15} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
