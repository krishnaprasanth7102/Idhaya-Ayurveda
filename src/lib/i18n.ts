import { defaultLocale, locales, type Locale } from "@/config/clinic";

export const en = {
  nav: {
    navigation: "Main navigation",
    home: "Home",
    about: "About",
    treatments: "Treatments",
    doctor: "Doctor",
    contact: "Contact",
    appointment: "Book appointment",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    switchToEnglish: "Switch language to English",
    switchToMalayalam: "Switch language to Malayalam",
    toggleTheme: "Toggle light or dark theme",
  },
  actions: {
    book: "Book an appointment",
    explore: "Explore treatments",
    callNow: "Call the clinic",
    whatsapp: "WhatsApp the clinic",
    viewDetails: "View details",
    learnMore: "Learn more",
    sendRequest: "Continue to WhatsApp",
    contactClinic: "Contact the clinic",
    directions: "Get directions",
    backToTreatments: "All treatments",
  },
  home: {
    heroEyebrow: "Ayurvedic clinic · Thiruvananthapuram",
    heroTitle: "Traditional Ayurveda. Personal care.",
    heroDescription:
      "Explore traditional Ayurvedic therapies and personalized consultations at Idhaya Ayurveda in Thiruvananthapuram, Kerala.",
    introEyebrow: "Welcome to Idhaya Ayurveda",
    introTitle: "Care guided by Ayurvedic tradition",
    introBody:
      "Meet with Dr. Adarsh S.S. to discuss your health concerns and learn whether an Ayurvedic consultation or therapy may be suitable for you.",
    featured: "Explore our therapies",
    featuredTitle: "Traditional therapies, individual assessment",
    featuredBody:
      "Treatment choice and suitability are discussed with the physician. Explore the services advertised by the clinic.",
    facilities: "Consultation and care",
    facilityItems: [
      {
        title: "Ayurvedic consultation",
        body: "Discuss your concerns and care options directly with the physician.",
      },
      {
        title: "Therapy planning",
        body: "The physician can assess whether a therapy is appropriate for your needs.",
      },
      {
        title: "Appointments by contact",
        body: "Call or message the clinic to ask about appointment availability.",
      },
    ],
    whyTitle: "Care that starts with a conversation",
    whyBody:
      "A consultation helps the physician understand your concerns before discussing possible care. No treatment is suitable for everyone, and outcomes cannot be guaranteed.",
    appointmentCta: "Speak with the clinic about an appointment",
    appointmentHeading: "A conversation is the first step",
    contactTitle: "Find Idhaya Ayurveda",
    mapLabel: "Open the clinic location in Google Maps",
    serviceListTitle: "Clinic services",
    services: [
      "General Ayurveda consultation",
      "Panchakarma therapies",
      "Joint and musculoskeletal care",
      "Neck and back pain management",
    ],
    consultationTitle: "Consultation hours",
    illustrativePhoto: "Illustrative botanical wellness photograph",
  },
  about: {
    title: "About Idhaya Ayurveda",
    intro:
      "Idhaya Ayurveda is an Ayurvedic clinic in Thiruvananthapuram, Kerala. The clinic offers consultations and traditional therapies with individual assessment.",
    approachTitle: "A considered approach to care",
    approachBody:
      "Care begins with a conversation about your concerns and health history. The physician can explain possible options, expected steps, and precautions before you decide whether to proceed.",
    doctorTitle: "Meet the physician",
    doctorBody:
      "Dr. Adarsh S.S. is listed by the clinic as an Ayurvedic Physician. Please contact the clinic to discuss a consultation.",
    clinicTitle: "At the clinic",
    clinicBody:
      "The clinic is located at Anand Driving School Building, Ubhiyankulangara, Thiruvananthapuram. Contact the clinic before visiting to confirm appointment availability.",
    cta: "Request an appointment",
    imageAlt: "Idhaya Ayurveda clinic sign at the clinic entrance",
  },
  treatments: {
    title: "Ayurvedic treatments",
    subtitle:
      "Learn about the traditional therapies listed by Idhaya Ayurveda. A physician should assess suitability before any treatment.",
    details: "About this therapy",
    procedure: "What the therapy may involve",
    suitability: "Assessment and suitability",
    precautions: "Precautions",
    consult:
      "This information is general and is not a diagnosis or a treatment recommendation. Consult the physician first; suitability varies by person.",
    medicalNote:
      "Therapies are not a substitute for urgent or evidence-based medical care. Do not delay assessment for new, severe, or worsening symptoms.",
    imageAlt: "Illustrative image for an Ayurvedic therapy",
  },
  doctor: {
    title: "Dr. Adarsh S.S.",
    subtitle: "Ayurvedic Physician",
    credentials: "Qualifications listed by the clinic",
    registration: "Registration number",
    bio:
      "The clinic lists Dr. Adarsh S.S. as an Ayurvedic Physician with BAMS and PGDAGM (Ayu) qualifications. Please verify qualifications and registration directly with the clinic before relying on them.",
    photoAlt: "Dr. Adarsh S.S.",
    qualificationNote:
      "These credentials were supplied by the clinic. Contact the clinic if you need further credential details.",
    appointmentInfo: "Consultations are available by appointment. Contact the clinic to confirm availability.",
  },
  contact: {
    title: "Contact and location",
    phone: "Phone",
    whatsapp: "WhatsApp appointment",
    email: "Email",
    address: "Clinic address",
    hours: "Consultation hours",
    map: "View location and directions",
    mapNote: "Google Maps directions open in a new tab.",
    weekdayHours: "Monday to Saturday",
    sundayHours: "Sunday",
  },
  appointment: {
    title: "Request an appointment",
    subtitle:
      "Complete the details below to open WhatsApp with a ready-to-send message to the clinic. Your message is only sent after you review and send it in WhatsApp.",
    fields: {
      name: "Your name",
      phone: "Your phone number",
      date: "Preferred appointment date",
      treatment: "What would you like to discuss?",
      message: "Additional note (optional)",
    },
    selectTreatment: "Choose an option",
    generalConsultation: "General Ayurveda consultation",
    treatmentOptions: [
      { value: "general", label: "General Ayurveda consultation" },
      { value: "kizhi", label: "Kizhi" },
      { value: "abhyanga", label: "Abhyanga" },
      { value: "steam-bath", label: "Steam bath" },
      { value: "nasyam", label: "Nasyam" },
      { value: "kati-vasti", label: "Kati Vasti" },
      { value: "shirodhara", label: "Shirodhara" },
      { value: "leech-therapy", label: "Leech therapy" },
      { value: "cupping-therapy", label: "Cupping therapy" },
    ],
    errors: {
      name: "Enter at least two characters for your name.",
      phone: "Enter a valid phone number.",
      date: "Choose a preferred date.",
      treatment: "Choose a topic for your appointment.",
      message: "Keep the note to 500 characters or fewer.",
    },
    whatsappFailure:
      "WhatsApp could not be opened. Please call the clinic to arrange an appointment.",
    privacyNote:
      "This form opens WhatsApp on your device. It does not submit or store your details on this website.",
  },
  privacy: {
    title: "Privacy notice",
    body:
      "The appointment form prepares a message for WhatsApp on your device. This website does not send or store the details you enter in that form. When you choose to send the message, WhatsApp handles it under its own terms and privacy policy. You can also call or email the clinic directly.",
  },
  footer: {
    nav: "Explore",
    visit: "Visit or contact",
    hours: "Consultation hours",
    summary:
      "Traditional Ayurvedic consultations and therapies in Thiruvananthapuram, Kerala.",
    copyright: "© Idhaya Ayurveda. All rights reserved.",
    privacy: "Privacy notice",
  },
  notFound: {
    title: "Page not found",
    body: "The page you requested could not be found.",
    home: "Back to home",
  },
  common: {
    weekdays: "Monday to Saturday, 3:00 PM–8:00 PM",
    sunday: "Sunday, by appointment",
  },
};

export const ml: typeof en = {
  nav: {
    navigation: "പ്രധാന നാവിഗേഷൻ",
    home: "ഹോം",
    about: "ക്ലിനിക്കിനെക്കുറിച്ച്",
    treatments: "ചികിത്സകൾ",
    doctor: "ഡോക്ടർ",
    contact: "ബന്ധപ്പെടുക",
    appointment: "അപ്പോയിന്റ്മെന്റ്",
    openMenu: "നാവിഗേഷൻ മെനു തുറക്കുക",
    closeMenu: "നാവിഗേഷൻ മെനു അടയ്ക്കുക",
    switchToEnglish: "ഇംഗ്ലീഷിലേക്ക് മാറുക",
    switchToMalayalam: "മലയാളത്തിലേക്ക് മാറുക",
    toggleTheme: "ലൈറ്റ് അല്ലെങ്കിൽ ഡാർക്ക് തീം മാറ്റുക",
  },
  actions: {
    book: "അപ്പോയിന്റ്മെന്റ് ബുക്ക് ചെയ്യുക",
    explore: "ചികിത്സകൾ പരിചയപ്പെടുക",
    callNow: "ക്ലിനിക്കിലേക്ക് വിളിക്കുക",
    whatsapp: "ക്ലിനിക്കിലേക്ക് വാട്ട്‌സ്ആപ്പ് ചെയ്യുക",
    viewDetails: "വിശദാംശങ്ങൾ കാണുക",
    learnMore: "കൂടുതൽ അറിയുക",
    sendRequest: "വാട്ട്‌സ്ആപ്പിലേക്ക് തുടരുക",
    contactClinic: "ക്ലിനിക്കുമായി ബന്ധപ്പെടുക",
    directions: "വഴി കണ്ടെത്തുക",
    backToTreatments: "എല്ലാ ചികിത്സകളും",
  },
  home: {
    heroEyebrow: "ആയുർവേദ ക്ലിനിക് · തിരുവനന്തപുരം",
    heroTitle: "പാരമ്പര്യ ആയുർവേദം. വ്യക്തിഗത പരിചരണം.",
    heroDescription:
      "കേരളത്തിലെ തിരുവനന്തപുരത്തുള്ള ഇധയ ആയുർവേദത്തിൽ പാരമ്പര്യ ചികിത്സാരീതികളെയും വ്യക്തിഗത ആയുർവേദ കൺസൾട്ടേഷനെയും കുറിച്ച് അറിയൂ.",
    introEyebrow: "ഇധയ ആയുർവേദത്തിലേക്ക് സ്വാഗതം",
    introTitle: "ആയുർവേദ പാരമ്പര്യത്തിന്റെ വഴിയിലുള്ള പരിചരണം",
    introBody:
      "നിങ്ങളുടെ ആരോഗ്യപ്രശ്നങ്ങൾ ഡോ. ആദർശ് എസ്. എസുമായി ചർച്ച ചെയ്യൂ. കൺസൾട്ടേഷനോ ചികിത്സയോ നിങ്ങൾക്ക് അനുയോജ്യമാണോ എന്ന് ഡോക്ടർ വിലയിരുത്തും.",
    featured: "ചികിത്സകൾ പരിചയപ്പെടാം",
    featuredTitle: "വ്യക്തിഗത വിലയിരുത്തലോടെയുള്ള പാരമ്പര്യ ചികിത്സകൾ",
    featuredBody:
      "ചികിത്സയും അതിന്റെ അനുയോജ്യതയും ഡോക്ടറുമായി ചർച്ച ചെയ്താണ് തീരുമാനിക്കേണ്ടത്. ക്ലിനിക് നൽകുന്ന ചികിത്സാവിവരങ്ങൾ അറിയൂ.",
    facilities: "കൺസൾട്ടേഷനും പരിചരണവും",
    facilityItems: [
      {
        title: "ആയുർവേദ കൺസൾട്ടേഷൻ",
        body: "നിങ്ങളുടെ ആരോഗ്യപ്രശ്നങ്ങളും പരിചരണസാധ്യതകളും ഡോക്ടറുമായി നേരിട്ട് ചർച്ച ചെയ്യാം.",
      },
      {
        title: "ചികിത്സാ ആസൂത്രണം",
        body: "നിങ്ങളുടെ ആവശ്യങ്ങൾക്ക് ചികിത്സ അനുയോജ്യമാണോ എന്ന് ഡോക്ടർ വിലയിരുത്തും.",
      },
      {
        title: "അപ്പോയിന്റ്മെന്റിന് ബന്ധപ്പെടുക",
        body: "സമയലഭ്യത അറിയാൻ ക്ലിനിക്കിലേക്ക് വിളിക്കുകയോ സന്ദേശമയക്കുകയോ ചെയ്യൂ.",
      },
    ],
    whyTitle: "പരിചരണം ഒരു സംഭാഷണത്തിൽ തുടങ്ങുന്നു",
    whyBody:
      "ആരോഗ്യപ്രശ്നങ്ങൾ മനസ്സിലാക്കിയ ശേഷമാണ് ഡോക്ടർ പരിചരണസാധ്യതകൾ ചർച്ച ചെയ്യുന്നത്. എല്ലാ ചികിത്സകളും എല്ലാവർക്കും അനുയോജ്യമാവണമെന്നില്ല; ഫലങ്ങൾ ഉറപ്പുനൽകാനുമാവില്ല.",
    appointmentCta: "അപ്പോയിന്റ്മെന്റിനായി ക്ലിനിക്കുമായി സംസാരിക്കൂ",
    appointmentHeading: "പരിചരണത്തിലേക്കുള്ള ആദ്യ ചുവട് ഒരു സംഭാഷണം",
    contactTitle: "ഇധയ ആയുർവേദം കണ്ടെത്താം",
    mapLabel: "ഗൂഗിൾ മാപ്‌സിൽ ക്ലിനിക്കിന്റെ സ്ഥാനം തുറക്കുക",
    serviceListTitle: "ക്ലിനിക്കിലെ സേവനങ്ങൾ",
    services: [
      "പൊതുവായ ആയുർവേദ കൺസൾട്ടേഷൻ",
      "പഞ്ചകർമ ചികിത്സകൾ",
      "സന്ധി-പേശി സംബന്ധമായ പരിചരണം",
      "കഴുത്ത്, നടുവേദന പരിചരണം",
    ],
    consultationTitle: "കൺസൾട്ടേഷൻ സമയം",
    illustrativePhoto: "ഔഷധസസ്യങ്ങളെ ആസ്പദമാക്കിയുള്ള പ്രതിനിധി ചിത്രം",
  },
  about: {
    title: "ഇധയ ആയുർവേദത്തെക്കുറിച്ച്",
    intro:
      "കേരളത്തിലെ തിരുവനന്തപുരത്തുള്ള ആയുർവേദ ക്ലിനിക്കാണ് ഇധയ ആയുർവേദം. വ്യക്തിഗത വിലയിരുത്തലോടെയുള്ള കൺസൾട്ടേഷനുകളും പാരമ്പര്യ ചികിത്സകളും ഇവിടെ ലഭ്യമാണ്.",
    approachTitle: "ശ്രദ്ധയോടെയുള്ള പരിചരണം",
    approachBody:
      "നിങ്ങളുടെ ആരോഗ്യപ്രശ്നങ്ങളും ആരോഗ്യചരിത്രവും മനസ്സിലാക്കിയാണ് പരിചരണം തുടങ്ങുന്നത്. ചികിത്സ തിരഞ്ഞെടുക്കുന്നതിന് മുമ്പ് സാധ്യതകൾ, നടപടികൾ, മുൻകരുതലുകൾ എന്നിവ ഡോക്ടർ വിശദീകരിക്കും.",
    doctorTitle: "ഡോക്ടറെ പരിചയപ്പെടാം",
    doctorBody:
      "ഡോ. ആദർശ് എസ്. എസ്. ആയുർവേദ ഫിസിഷ്യനാണെന്ന് ക്ലിനിക് പരിചയപ്പെടുത്തുന്നു. കൺസൾട്ടേഷനായി ക്ലിനിക്കുമായി ബന്ധപ്പെടുക.",
    clinicTitle: "ക്ലിനിക്",
    clinicBody:
      "തിരുവനന്തപുരം ഉബിയൻകുളങ്ങരയിലെ ആനന്ദ് ഡ്രൈവിംഗ് സ്കൂൾ ബിൽഡിംഗിലാണ് ക്ലിനിക്. സന്ദർശിക്കുന്നതിന് മുമ്പ് അപ്പോയിന്റ്മെന്റ് ലഭ്യത ഉറപ്പാക്കാൻ ബന്ധപ്പെടുക.",
    cta: "അപ്പോയിന്റ്മെന്റ് അഭ്യർത്ഥിക്കുക",
    imageAlt: "ക്ലിനിക് പ്രവേശനഭാഗത്തെ ഇധയ ആയുർവേദത്തിന്റെ ബോർഡ്",
  },
  treatments: {
    title: "ആയുർവേദ ചികിത്സകൾ",
    subtitle:
      "ഇധയ ആയുർവേദം നൽകുന്ന പാരമ്പര്യ ചികിത്സകളെക്കുറിച്ച് അറിയൂ. ഏതെങ്കിലും ചികിത്സയ്ക്ക് മുമ്പ് ഡോക്ടർ അനുയോജ്യത വിലയിരുത്തണം.",
    details: "ചികിത്സയെക്കുറിച്ച്",
    procedure: "ചികിത്സയിൽ ഉൾപ്പെടാവുന്ന രീതികൾ",
    suitability: "വിലയിരുത്തലും അനുയോജ്യതയും",
    precautions: "മുൻകരുതലുകൾ",
    consult:
      "ഇത് പൊതുവിവരം മാത്രമാണ്; രോഗനിർണയമോ ചികിത്സാ നിർദേശമോ അല്ല. ആദ്യം ഡോക്ടറെ സമീപിക്കുക. അനുയോജ്യത ഓരോരുത്തരിലും വ്യത്യാസപ്പെടും.",
    medicalNote:
      "അടിയന്തരമോ തെളിവാധിഷ്ഠിതമോ ആയ ചികിത്സകൾക്ക് പകരമല്ല ഈ ചികിത്സകൾ. പുതിയതോ കഠിനമോ കൂടിവരുന്നതോ ആയ ലക്ഷണങ്ങൾക്ക് വൈദ്യപരിശോധന വൈകിക്കരുത്.",
    imageAlt: "ആയുർവേദ ചികിത്സയെ പ്രതിനിധീകരിക്കുന്ന ചിത്രം",
  },
  doctor: {
    title: "ഡോ. ആദർശ് എസ്. എസ്.",
    subtitle: "ആയുർവേദ ഫിസിഷ്യൻ",
    credentials: "ക്ലിനിക് നൽകിയ യോഗ്യതകൾ",
    registration: "രജിസ്ട്രേഷൻ നമ്പർ",
    bio:
      "ഡോ. ആദർശ് എസ്. എസ്. ആയുർവേദ ഫിസിഷ്യനാണെന്നും BAMS, PGDAGM (Ayu) യോഗ്യതകളുണ്ടെന്നും ക്ലിനിക് അറിയിച്ചിട്ടുണ്ട്. അവയെ ആശ്രയിക്കുന്നതിന് മുമ്പ് യോഗ്യതകളും രജിസ്ട്രേഷനും ക്ലിനിക്കുമായി നേരിട്ട് സ്ഥിരീകരിക്കുക.",
    photoAlt: "ഡോ. ആദർശ് എസ്. എസ്.",
    qualificationNote:
      "ഈ യോഗ്യതാ വിവരങ്ങൾ ക്ലിനിക് നൽകിയതാണ്. കൂടുതൽ വിവരങ്ങൾക്ക് ക്ലിനിക്കുമായി ബന്ധപ്പെടുക.",
    appointmentInfo:
      "അപ്പോയിന്റ്മെന്റ് പ്രകാരമാണ് കൺസൾട്ടേഷൻ. സമയലഭ്യത അറിയാൻ ക്ലിനിക്കുമായി ബന്ധപ്പെടുക.",
  },
  contact: {
    title: "ബന്ധപ്പെടലും സ്ഥലവും",
    phone: "ഫോൺ",
    whatsapp: "വാട്ട്‌സ്ആപ്പ് അപ്പോയിന്റ്മെന്റ്",
    email: "ഇമെയിൽ",
    address: "ക്ലിനിക് വിലാസം",
    hours: "കൺസൾട്ടേഷൻ സമയം",
    map: "സ്ഥലവും വഴിയും കാണുക",
    mapNote: "ഗൂഗിൾ മാപ്‌സ് ദിശകൾ പുതിയ ടാബിൽ തുറക്കും.",
    weekdayHours: "തിങ്കൾ മുതൽ ശനി വരെ",
    sundayHours: "ഞായറാഴ്ച",
  },
  appointment: {
    title: "അപ്പോയിന്റ്മെന്റ് അഭ്യർത്ഥിക്കുക",
    subtitle:
      "താഴെയുള്ള വിവരങ്ങൾ ചേർത്താൽ ക്ലിനിക്കിലേക്ക് അയയ്ക്കാനുള്ള സന്ദേശം വാട്ട്‌സ്ആപ്പിൽ തുറക്കും. സന്ദേശം പരിശോധിച്ച് നിങ്ങൾ അയച്ചാൽ മാത്രമേ അത് ക്ലിനിക്കിലെത്തൂ.",
    fields: {
      name: "പേര്",
      phone: "നിങ്ങളുടെ ഫോൺ നമ്പർ",
      date: "ആഗ്രഹിക്കുന്ന തീയതി",
      treatment: "എന്തിനെക്കുറിച്ചാണ് സംസാരിക്കേണ്ടത്?",
      message: "കൂടുതൽ വിവരം (ഐച്ഛികം)",
    },
    selectTreatment: "ഒരു വിഷയം തിരഞ്ഞെടുക്കുക",
    generalConsultation: "പൊതുവായ ആയുർവേദ കൺസൾട്ടേഷൻ",
    treatmentOptions: [
      { value: "general", label: "പൊതുവായ ആയുർവേദ കൺസൾട്ടേഷൻ" },
      { value: "kizhi", label: "കിഴി" },
      { value: "abhyanga", label: "അഭ്യംഗം" },
      { value: "steam-bath", label: "വാഷ്പസ്നാനം" },
      { value: "nasyam", label: "നസ്യം" },
      { value: "kati-vasti", label: "കടി വസ്തി" },
      { value: "shirodhara", label: "ശിരോധാര" },
      { value: "leech-therapy", label: "അട്ട ചികിത്സ" },
      { value: "cupping-therapy", label: "കപ്പിംഗ് തെറാപ്പി" },
    ],
    errors: {
      name: "പേരിൽ കുറഞ്ഞത് രണ്ട് അക്ഷരങ്ങളെങ്കിലും നൽകുക.",
      phone: "സാധുവായ ഫോൺ നമ്പർ നൽകുക.",
      date: "ആഗ്രഹിക്കുന്ന തീയതി തിരഞ്ഞെടുക്കുക.",
      treatment: "അപ്പോയിന്റ്മെന്റിനുള്ള വിഷയം തിരഞ്ഞെടുക്കുക.",
      message: "കുറിപ്പ് 500 അക്ഷരങ്ങളിൽ കവിയരുത്.",
    },
    whatsappFailure:
      "വാട്ട്‌സ്ആപ്പ് തുറക്കാനായില്ല. അപ്പോയിന്റ്മെന്റിനായി ക്ലിനിക്കിലേക്ക് വിളിക്കുക.",
    privacyNote:
      "ഈ ഫോം നിങ്ങളുടെ ഉപകരണത്തിൽ വാട്ട്‌സ്ആപ്പ് തുറക്കുന്നു. വെബ്‌സൈറ്റ് നിങ്ങളുടെ വിവരങ്ങൾ സമർപ്പിക്കുകയോ സൂക്ഷിക്കുകയോ ചെയ്യുന്നില്ല.",
  },
  privacy: {
    title: "സ്വകാര്യതാ അറിയിപ്പ്",
    body:
      "അപ്പോയിന്റ്മെന്റ് ഫോം നിങ്ങളുടെ ഉപകരണത്തിൽ വാട്ട്‌സ്ആപ്പിലേക്ക് ഒരു സന്ദേശം തയ്യാറാക്കുന്നു. ഈ വെബ്‌സൈറ്റ് നിങ്ങൾ നൽകുന്ന വിവരങ്ങൾ അയയ്ക്കുകയോ സൂക്ഷിക്കുകയോ ചെയ്യുന്നില്ല. സന്ദേശം അയയ്ക്കാൻ തീരുമാനിച്ചാൽ വാട്ട്‌സ്ആപ്പിന്റെ നിബന്ധനകളും സ്വകാര്യതാ നയവുമാണ് ബാധകം. ക്ലിനിക്കിലേക്ക് നേരിട്ട് വിളിക്കുകയോ ഇമെയിൽ അയയ്ക്കുകയോ ചെയ്യാം.",
  },
  footer: {
    nav: "പര്യവേക്ഷണം",
    visit: "സന്ദർശിക്കുക / ബന്ധപ്പെടുക",
    hours: "കൺസൾട്ടേഷൻ സമയം",
    summary:
      "കേരളത്തിലെ തിരുവനന്തപുരത്ത് പാരമ്പര്യ ആയുർവേദ കൺസൾട്ടേഷനുകളും ചികിത്സകളും.",
    copyright: "© ഇധയ ആയുർവേദം. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
    privacy: "സ്വകാര്യതാ അറിയിപ്പ്",
  },
  notFound: {
    title: "പേജ് കണ്ടെത്താനായില്ല",
    body: "നിങ്ങൾ ആവശ്യപ്പെട്ട പേജ് കണ്ടെത്താനായില്ല.",
    home: "ഹോമിലേക്ക് മടങ്ങുക",
  },
  common: {
    weekdays: "തിങ്കൾ മുതൽ ശനി വരെ, വൈകിട്ട് 3:00–8:00",
    sunday: "ഞായറാഴ്ച, അപ്പോയിന്റ്മെന്റ് പ്രകാരം",
  },
};

export type Messages = typeof en;
export const messages = { en, ml };

export function getDictionary(locale: Locale = defaultLocale): Messages {
  return locale === "ml" ? ml : en;
}

export function getLocalizedPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  const trimmed =
    segments[0] && locales.includes(segments[0] as Locale)
      ? segments.slice(1)
      : segments;
  const path = trimmed.length ? `/${trimmed.join("/")}` : "/";
  return `/${locale}${path === "/" ? "" : path}`;
}

export function isSupportedLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
