import { clinic, type Locale } from "@/config/clinic";

export function getWhatsAppUrl(locale: Locale, message?: string) {
  const defaultMessage =
    locale === "ml"
      ? "നമസ്കാരം ഇധയ ആയുർവേദം, ഒരു അപ്പോയിന്റ്മെന്റിനെക്കുറിച്ച് അറിയാൻ ആഗ്രഹിക്കുന്നു."
      : "Hello Idhaya Ayurveda, I would like to enquire about an appointment.";

  return `${clinic.whatsapp}?text=${encodeURIComponent(message ?? defaultMessage)}`;
}
