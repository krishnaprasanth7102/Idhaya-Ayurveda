import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import type { Locale } from "@/config/clinic";
import type { Messages } from "@/lib/i18n";

export function Header({ locale, dict }: { locale: Locale; dict: Messages }) {
  const items = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/treatments`, label: dict.nav.treatments },
    { href: `/${locale}/facility`, label: dict.nav.facility },
    { href: `/${locale}/doctor`, label: dict.nav.doctor },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex shrink-0 items-center gap-3" aria-label="Idhaya Ayurveda home">
          <div className="relative h-12 w-20">
            <Image
              src="/images/idhaya-logo-green.png"
              alt="Idhaya Ayurveda"
              fill
              sizes="80px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden shrink-0 items-center gap-5 text-sm font-medium text-[var(--muted)] 2xl:flex">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap transition-colors hover:text-[var(--text)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 2xl:flex">
          <LanguageSwitcher locale={locale} dict={dict} />
          <ThemeToggle label={dict.nav.toggleTheme} />
          <Link
            href={`/${locale}/appointment`}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[var(--brand-green)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-green-deep)]"
          >
            <CalendarDays size={16} />
            {dict.nav.appointment}
          </Link>
        </div>

        <div className="2xl:hidden">
          <div className="flex items-center gap-2">
            <ThemeToggle label={dict.nav.toggleTheme} />
            <MobileMenu items={items} locale={locale} dict={dict} />
          </div>
        </div>
      </div>
    </header>
  );
}
