import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { locales, type Locale } from "@/config/clinic";
import { getDictionary, isSupportedLocale } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale = isSupportedLocale(locale) ? locale : "en";
  const dict = getDictionary(safeLocale);

  return localizedMetadata(
    safeLocale,
    "",
    dict.home.heroTitle,
    dict.home.heroDescription,
  );
}

async function LocaleContent({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  const safeLocale = locale as Locale;
  const dict = getDictionary(safeLocale);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)]">
      <Header locale={safeLocale} dict={dict} />
      <main>
        <Suspense
          fallback={
            <div className="mx-auto min-h-[50vh] max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-busy="true" />
          }
        >
          {children}
        </Suspense>
      </main>
      <Footer locale={safeLocale} dict={dict} />
    </div>
  );
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[var(--background)]" aria-busy="true" />
      }
    >
      <LocaleContent params={params}>{children}</LocaleContent>
    </Suspense>
  );
}
