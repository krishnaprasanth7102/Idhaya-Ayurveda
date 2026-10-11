"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Messages } from "@/lib/i18n";

export function Hero({ locale, dict }: { locale: "en" | "ml"; dict: Messages }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--soft-sage)] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-green-soft)]">
          {dict.home.heroEyebrow}
        </div>
        <h1 className="font-[family-name:var(--font-display)] text-4xl leading-[1.05] text-[var(--heading)] sm:text-6xl lg:text-7xl">
          {dict.home.heroTitle}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)]">{dict.home.heroDescription}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href={`/${locale}/appointment`} className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[rgba(20,83,45,0.18)] transition hover:bg-[var(--brand-green-deep)]">
            {dict.actions.book} <ArrowRight size={16} />
          </Link>
          <Link href={`/${locale}/treatments`} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-6 py-3.5 text-sm font-semibold text-[var(--text)] transition hover:bg-[var(--soft-sage)]">
            {dict.actions.explore}
          </Link>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
        <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-3 shadow-[0_26px_80px_rgba(20,83,45,0.12)]">
          <div className="relative h-[420px] overflow-hidden rounded-[1.5rem]">
            <Image
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80"
              alt={dict.home.illustrativePhoto}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="absolute -bottom-4 left-6 rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 shadow-lg">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{dict.home.consultationTitle}</p>
          <p className="mt-2 text-sm font-semibold text-[var(--text)]">{dict.common.weekdays}</p>
        </div>
      </motion.div>
    </section>
  );
}
