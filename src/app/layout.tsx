import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, Noto_Sans_Malayalam } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { MotionConfig } from "framer-motion";
import { LocaleDocument } from "@/components/ui/LocaleDocument";
import { siteUrl } from "@/config/site";
import "./globals.css";

const notoMalayalam = Noto_Sans_Malayalam({
  variable: "--font-malayalam",
  subsets: ["malayalam"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Idhaya AYURVEDA",
  description:
    "Idhaya Ayurveda in Thiruvananthapuram offers traditional Ayurvedic therapies, personalized consultations, and focused wellness care.",
  keywords: [
    "Ayurveda Thiruvananthapuram",
    "Idhaya Ayurveda",
    "Kerala Ayurveda clinic",
    "Ayurvedic treatments",
  ],
  openGraph: {
    title: "Idhaya Ayurveda",
    description:
      "Traditional Ayurveda and personal care in Thiruvananthapuram, Kerala.",
    url: siteUrl,
    siteName: "Idhaya Ayurveda",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${notoMalayalam.variable} ${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--text)] antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MotionConfig reducedMotion="user">
            <LocaleDocument />
            {children}
          </MotionConfig>
        </ThemeProvider>
      </body>
    </html>
  );
}
