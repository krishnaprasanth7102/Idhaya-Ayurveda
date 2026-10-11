import { AppointmentForm } from "@/components/booking/AppointmentForm";
import { getDictionary } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = locale === "ml" ? "ml" : "en";
  const dict = getDictionary(currentLocale);
  return localizedMetadata(
    currentLocale,
    "appointment",
    dict.appointment.title,
    dict.appointment.subtitle,
  );
}

export default async function AppointmentPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = locale === "ml" ? "ml" : "en";
  const dict = getDictionary(currentLocale);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">{dict.appointment.title}</p>
        <h1 className="font-[family-name:var(--font-display)] text-4xl text-[var(--heading)] sm:text-6xl">{dict.appointment.title}</h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">{dict.appointment.subtitle}</p>
      </div>

      <AppointmentForm locale={currentLocale} dict={dict} />
    </div>
  );
}
