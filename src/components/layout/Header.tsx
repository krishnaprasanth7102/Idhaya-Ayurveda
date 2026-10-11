import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MessageCircle, MapPin } from "lucide-react";
import { clinic } from "@/config/clinic";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import type { Locale } from "@/config/clinic";
import type { Messages } from "@/lib/i18n";
import { getWhatsAppUrl } from "@/lib/contact";

export function Header({ locale, dict }: { locale: Locale; dict: Messages }) {
  const items = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/treatments`, label: dict.nav.treatments },
    { href: `/${locale}/doctor`, label: dict.nav.doctor },
    { href: `/${locale}/contact`, label: dict.nav.contact },
    { href: `/${locale}/appointment`, label: dict.nav.appointment },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-3" aria-label="Idhaya Ayurveda home">
          <div className="relative h-12 w-20 overflow-hidden rounded-xl border border-[var(--border)] bg-white p-1 shadow-sm">
            <Image
              src="/images/idhaya-logo.png"
              alt="Idhaya Ayurveda"
              fill
              sizes="80px"
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--muted)] xl:flex">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-[var(--text)]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher locale={locale} dict={dict} />
          <ThemeToggle label={dict.nav.toggleTheme} />
          <Link
            href={`/${locale}/appointment`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-green-deep)]"
          >
            <CalendarDays size={16} />
            {dict.nav.appointment}
          </Link>
        </div>

        <div className="xl:hidden">
          <div className="flex items-center gap-2">
            <ThemeToggle label={dict.nav.toggleTheme} />
            <MobileMenu items={items} locale={locale} dict={dict} />
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border)] bg-[var(--soft-sage)]/60 text-center text-[11px] font-medium text-[var(--text)]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-2">
          <a
            className="inline-flex items-center gap-1.5 hover:underline"
            href={getWhatsAppUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${dict.actions.whatsapp}: ${clinic.phone}`}
          >
            <MessageCircle size={12} /> {clinic.phone}
          </a>
          <span className="inline-flex items-center gap-1.5"><MapPin size={12} /> {clinic.address}</span>
        </div>
      </div>
    </header>
  );
}
