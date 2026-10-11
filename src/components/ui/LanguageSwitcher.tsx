"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLocalizedPath } from "@/lib/i18n";
import type { Messages } from "@/lib/i18n";

export function LanguageSwitcher({
  locale,
  dict,
}: {
  locale: "en" | "ml";
  dict: Messages;
}) {
  const pathname = usePathname();

  return (
    <div className="inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] p-1 text-sm font-medium text-[var(--text)]">
      {(["en", "ml"] as const).map((option) => {
        const href = getLocalizedPath(pathname, option);
        const active = locale === option;

        return (
          <Link
            key={option}
            href={href}
            className={`rounded-full px-2.5 py-1.5 transition-colors ${
              active ? "bg-[var(--brand-green)] text-white" : "text-[var(--muted)]"
            }`}
            aria-label={option === "en" ? dict.nav.switchToEnglish : dict.nav.switchToMalayalam}
            aria-current={active ? "page" : undefined}
          >
            {option === "en" ? "EN" : "മലയാളം"}
          </Link>
        );
      })}
    </div>
  );
}
