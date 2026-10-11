import { getDictionary } from "@/lib/i18n";
import { localizedMetadata } from "@/lib/metadata";

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = locale === "ml" ? "ml" : "en";
  const dict = getDictionary(currentLocale);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="font-[family-name:var(--font-display)] text-5xl text-[var(--heading)]">{dict.privacy.title}</h1>
      <div className="mt-8 rounded-[2rem] border border-[var(--border)] bg-[var(--card)] p-8 text-base leading-8 text-[var(--muted)]">
        <p>{dict.privacy.body}</p>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const currentLocale = locale === "ml" ? "ml" : "en";
  const dict = getDictionary(currentLocale);
  return localizedMetadata(
    currentLocale,
    "privacy",
    dict.privacy.title,
    dict.privacy.body,
  );
}
