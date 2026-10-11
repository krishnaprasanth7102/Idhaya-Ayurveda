import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clinic } from "@/config/clinic";
import type { Messages } from "@/lib/i18n";

export function DoctorPreview({ locale, dict }: { locale: "en" | "ml"; dict: Messages }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
        <div className="relative h-[420px] overflow-hidden rounded-[1.5rem]">
          <Image
            src="/images/dr-adarsh.png"
            alt={dict.doctor.photoAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover object-top"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green-soft)]">{dict.about.doctorTitle}</p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl text-[var(--heading)] sm:text-5xl">{clinic.doctor}</h2>
          <p className="mt-2 text-sm font-semibold text-[var(--brand-green-soft)]">{dict.doctor.subtitle}</p>
          <p className="mt-5 text-base leading-7 text-[var(--muted)]">
            {dict.about.doctorBody}
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[var(--text)]">
            {clinic.qualifications.map((qualification) => (
              <li key={qualification}>• {qualification}</li>
            ))}
          </ul>
          <Link href={`/${locale}/doctor`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-5 py-3 text-sm font-semibold text-white">
            {dict.actions.learnMore} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
