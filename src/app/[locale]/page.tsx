import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { ArrowRight, CalendarCheck2, MapPin, MessageCircle, Phone, Stethoscope } from "lucide-react";
import { getDictionary } from "@/lib/i18n";
import { clinic } from "@/config/clinic";
import { getWhatsAppUrl } from "@/lib/contact";
import { siteUrl } from "@/config/site";
import { localizedMetadata } from "@/lib/metadata";
import { physioAyurvedaModalities } from "@/lib/content";
import { Hero } from "@/components/home/Hero";
import { FeaturedTreatments } from "@/components/home/FeaturedTreatments";
import { DoctorPreview } from "@/components/home/DoctorPreview";
import { SectionHeading } from "@/components/ui/SectionHeading";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = locale === "ml" ? "ml" : "en";
  const dict = getDictionary(currentLocale);
  return localizedMetadata(
    currentLocale,
    "",
    dict.home.heroTitle,
    dict.home.heroDescription,
  );
}

export default function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <Suspense fallback={<div className="min-h-[50vh]" aria-busy="true" />}>
      <HomePageContent params={params} />
    </Suspense>
  );
}

async function HomePageContent({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale === "ml" ? "ml" : "en");
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    telephone: clinic.phone,
    email: clinic.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Anand Driving School Building, Udyankulangara",
      addressLocality: "Thiruvananthapuram",
      addressRegion: "Kerala",
      postalCode: "695132",
      addressCountry: "IN",
    },
    hasMap: clinic.mapUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "15:00",
        closes: "20:00",
      },
    ],
    url: new URL(`/${locale}`, siteUrl).toString(),
    logo: new URL("/images/idhaya-logo-green.png", siteUrl).toString(),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <Hero locale={locale === "ml" ? "ml" : "en"} dict={dict} />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 sm:p-7 lg:p-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">{dict.home.introEyebrow}</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--heading)] sm:text-4xl lg:text-5xl">{dict.home.introTitle}</h2>
            <p className="mt-5 text-base leading-7 text-[var(--muted)]">{dict.home.introBody}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-[var(--soft-sage)] p-5">
                <Stethoscope className="mb-3 text-[var(--brand-green-soft)]" size={20} />
                <p className="text-sm font-semibold text-[var(--text)]">{dict.home.facilityItems[0].title}</p>
              </div>
              <div className="rounded-2xl bg-[var(--soft-sage)] p-5">
                <CalendarCheck2 className="mb-3 text-[var(--brand-green-soft)]" size={20} />
                <p className="text-sm font-semibold text-[var(--text)]">{dict.home.facilityItems[1].title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeaturedTreatments locale={locale === "ml" ? "ml" : "en"} dict={dict} />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">{dict.home.featured}</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--heading)] sm:text-4xl lg:text-5xl">Physio-Ayurveda combo therapy</h2>
          </div>
          <Link href={`/${locale === "ml" ? "ml" : "en"}/treatments/physio-ayurveda-combo-therapy`} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-green-soft)]">
            {dict.actions.learnMore} <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {physioAyurvedaModalities.map((item) => (
            <div key={item.title} className="overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-[var(--card)] shadow-[0_18px_40px_rgba(18,42,30,0.06)]">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--heading)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading title={dict.home.facilities} description={dict.home.featuredBody} />
        <div className="grid gap-6 md:grid-cols-3">
          {dict.home.facilityItems.map(({ title, body }, index) => {
            const Icon = [Stethoscope, CalendarCheck2, MessageCircle][index];
            return (
            <div key={title} className="rounded-[1.6rem] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <Icon className="mb-4 text-[var(--brand-green-soft)]" size={26} />
              <h3 className="text-xl font-semibold text-[var(--heading)]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{body}</p>
            </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[var(--soft-sage)] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={dict.home.whyTitle} description={dict.home.whyBody} />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {dict.home.services.map((service) => (
              <div key={service} className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--card)] p-5">
                <Stethoscope className="mb-3 text-[var(--brand-green-soft)]" size={22} />
                <p className="text-base font-semibold text-[var(--heading)]">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DoctorPreview locale={locale === "ml" ? "ml" : "en"} dict={dict} />

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-[var(--brand-green)] p-5 text-white shadow-[0_35px_70px_rgba(20,83,45,0.24)] sm:p-8 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">{dict.home.appointmentCta}</p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-2xl sm:text-4xl lg:text-5xl">{dict.home.appointmentHeading}</h2>
            </div>
            <Link href={`/${locale === "ml" ? "ml" : "en"}/appointment`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--brand-green-soft)]">
              {dict.actions.book} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-5 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--brand-green-soft)]">{dict.home.contactTitle}</p>
            <h2 className="font-[family-name:var(--font-display)] text-4xl text-[var(--heading)] sm:text-5xl">{clinic.name}</h2>
            <div className="mt-6 space-y-4 text-sm text-[var(--muted)]">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 text-[var(--brand-green-soft)]" size={18} />
                <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {clinic.address}
                </a>
              </p>
              <p className="flex items-start gap-3"><CalendarCheck2 className="mt-0.5 text-[var(--brand-green-soft)]" size={18} /> {dict.contact.weekdayHours}: {clinic.hours.weekdays}</p>
              <p className="flex items-start gap-3"><CalendarCheck2 className="mt-0.5 text-[var(--brand-green-soft)]" size={18} /> {dict.contact.sundayHours}: {clinic.hours.sunday}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={clinic.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm font-semibold text-[var(--text)]">
                <Phone size={16} /> {clinic.phone}
              </a>
              <a href={getWhatsAppUrl(locale === "ml" ? "ml" : "en")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--brand-green)] px-4 py-3 text-sm font-semibold text-white">
                <MessageCircle size={16} /> {dict.actions.whatsapp} · {clinic.phone}
              </a>
              <a href={clinic.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-green-soft)]">
                {dict.actions.directions} <ArrowRight size={15} />
              </a>
            </div>
          </div>

          <div className="relative h-[320px] overflow-hidden rounded-[1.75rem] border border-[var(--border)]">
            <Image
              src="/images/find-idhaya.png"
              alt="Idhaya Ayurveda treatment room"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
