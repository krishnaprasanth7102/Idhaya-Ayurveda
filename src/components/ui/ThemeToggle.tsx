"use client";

import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import type { Messages } from "@/lib/i18n";

export function ThemeToggle({ label }: { label: Messages["nav"]["toggleTheme"] }) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--text)] transition-colors hover:bg-[var(--soft-sage)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-green)]"
    >
      <Moon className="theme-toggle-icon-light" size={18} />
      <SunMedium className="theme-toggle-icon-dark" size={18} />
    </button>
  );
}
