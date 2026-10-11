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
  mapUrl: "https://share.google/RLJUvc29GWlGMQvDo",
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
