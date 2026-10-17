import Image from "next/image";
import { getDictionary } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";

const facilityImages = [
  {
    src: "/images/facility/ayurvedic-medicines.png",
    alt: "Ayurvedic medicines displayed at Idhaya Ayurveda",
  },
  {
    src: "/images/facility/clinic-exterior.png",
    alt: "Exterior entrance of Idhaya Ayurveda",
  },
  {
    src: "/images/facility/therapy-room.png",
    alt: "Ayurvedic therapy table in a treatment room",
  },
  {
    src: "/images/facility/traditional-therapy-equipment.png",
    alt: "Traditional Ayurvedic therapy equipment",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = locale === "ml" ? "ml" : "en";

  return localizedMetadata(
    currentLocale,
    "facility",
    "Treatment facility",
    "Photos of Idhaya Ayurveda's clinic and treatment facilities.",
  );
}

export default async function FacilityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = locale === "ml" ? "ml" : "en";
  const dict = getDictionary(currentLocale);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="mb-8 max-w-3xl">
        <h1 className="font-[family-name:var(--font-display)] text-3xl text-[var(--heading)] sm:text-4xl">
          {dict.facilityPage.title}
        </h1>
        <p className="mt-3 text-base leading-7 text-[var(--muted)]">
          {dict.facilityPage.intro}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {facilityImages.map((image, index) => (
          <figure
            key={image.src}
            className="group relative aspect-[3/4] overflow-hidden rounded-[1.8rem] border border-[var(--border)] bg-[var(--card)]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              priority={index === 0}
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </main>
  );
}
