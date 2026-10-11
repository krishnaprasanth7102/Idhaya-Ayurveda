export const clinic = {
  name: "Idhaya Ayurveda",
  doctor: "Dr. Adarsh S.S.",
  phone: "+91 9526001841",
  phoneHref: "tel:+919526001841",
  email: "idhayaayurveda@gmail.com",
  emailHref: "mailto:idhayaayurveda@gmail.com",
  whatsapp: "https://wa.me/919526001841",
  address:
    "Anand Driving School Building, Ubhiyankulangara, Thiruvananthapuram, Kerala – 695132",
  mapUrl: "https://maps.app.goo.gl/Z7K2tZBFYXw6G77y6",
  mapEmbedUrl: "https://www.google.com/maps?q=8.3767817,77.1204819&z=17&output=embed",
  registrationNumber: "23968",
  qualifications: ["BAMS", "PGDAGM (Ayu)", "Ayurvedic Physician"],
  hours: {
    weekdays: "3:00 PM–8:00 PM",
    sunday: "By appointment",
  },
  services: [
    "General Ayurveda consultation",
    "Panchakarma therapies",
    "Joint and musculoskeletal care",
    "Neck and back pain management",
  ],
};

export type Locale = "en" | "ml";
export const locales: Locale[] = ["en", "ml"];
export const defaultLocale: Locale = "en";
