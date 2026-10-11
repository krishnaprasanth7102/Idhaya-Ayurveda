"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/i18n";

export default function LocaleNotFound() {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] === "ml" ? "ml" : "en";
  const dict = getDictionary(locale);

  return (
    <div className="flex min-h-[65vh] items-center justify-center px-4 py-16">
      <div className="max-w-xl rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-10 text-center shadow-lg">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-green-soft)]">404</p>
        <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl text-[var(--heading)]">
          {dict.notFound.title}
        </h1>
        <p className="mt-4 text-base text-[var(--muted)]">{dict.notFound.body}</p>
        <Link
          href={`/${locale}`}
          className="mt-8 inline-flex rounded-full bg-[var(--brand-green)] px-5 py-3 text-sm font-semibold text-white"
        >
          {dict.notFound.home}
        </Link>
      </div>
    </div>
  );
}
