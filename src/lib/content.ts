export type Treatment = {
  slug: string;
  name: { en: string; ml: string };
  short: { en: string; ml: string };
  overview: { en: string; ml: string };
  procedure: { en: string; ml: string };
  whoMayNeed: { en: string; ml: string };
  precautions: { en: string; ml: string };
  imageAlt: { en: string; ml: string };
  image: string;
};

export const treatments: Treatment[] = [
  {
    slug: "kizhi",
    name: { en: "Kizhi Therapy", ml: "കിഴി ചികിത്സ" },
    short: {
      en: "A traditional therapy using warm herbal boluses, considered only after an individual assessment.",
      ml: "ചൂടുള്ള ഔഷധക്കിഴികൾ ഉപയോഗിക്കുന്ന പരമ്പരാഗത ചികിത്സ. വ്യക്തിഗത വിലയിരുത്തലിന് ശേഷമേ ഇത് പരിഗണിക്കാവൂ.",
    },
    overview: {
      en: "Kizhi is a traditional Ayurvedic external therapy. The materials and method used depend on the practitioner's assessment and the person's needs.",
      ml: "കിഴി ഒരു പരമ്പരാഗത ബാഹ്യചികിത്സയാണ്. ഉപയോഗിക്കുന്ന ഔഷധങ്ങളും ചികിത്സാരീതിയും വ്യക്തിയുടെ ആവശ്യവും ഡോക്ടറുടെ വിലയിരുത്തലും അനുസരിച്ച് തീരുമാനിക്കുന്നു.",
    },
    procedure: {
      en: "A practitioner may apply warm cloth boluses containing selected herbs to specific body areas. The temperature, materials, and duration should be determined by the practitioner.",
      ml: "തിരഞ്ഞെടുത്ത ഔഷധങ്ങൾ നിറച്ച തുണിക്കിഴികൾ ചൂടാക്കി ശരീരത്തിലെ പ്രത്യേക ഭാഗങ്ങളിൽ പ്രയോഗിക്കാം. കിഴിയുടെ ചൂട്, ഔഷധങ്ങൾ, ചികിത്സയുടെ ദൈർഘ്യം എന്നിവ ഡോക്ടർ നിശ്ചയിക്കണം.",
    },
    whoMayNeed: {
      en: "A physician may assess this option for someone discussing muscle or joint discomfort. The cause of symptoms should be assessed first.",
      ml: "പേശികളിലോ സന്ധികളിലോ ഉള്ള അസ്വസ്ഥതയെക്കുറിച്ച് സംസാരിക്കുന്നവർക്ക് ഈ ചികിത്സ പരിഗണിക്കാമോ എന്ന് ഡോക്ടർ വിലയിരുത്തും. ആദ്യം ലക്ഷണങ്ങളുടെ കാരണം പരിശോധിക്കണം.",
    },
    precautions: {
      en: "Tell the practitioner about reduced skin sensation, skin conditions, fever, pregnancy, or other health conditions. Excess heat can burn skin; do not attempt this therapy at home.",
      ml: "ചർമ്മത്തിലെ സ്പർശബോധക്കുറവ്, ചർമ്മരോഗങ്ങൾ, പനി, ഗർഭാവസ്ഥ, മറ്റ് ആരോഗ്യപ്രശ്നങ്ങൾ എന്നിവ ഡോക്ടറോട് പറയുക. അമിതചൂട് പൊള്ളലേൽപ്പിക്കാം; വീട്ടിൽ ഈ ചികിത്സ പരീക്ഷിക്കരുത്.",
    },
    imageAlt: {
      en: "Practitioner applying warm herbal boluses during Kizhi therapy",
      ml: "കിഴി ചികിത്സയിൽ ചൂടുള്ള ഔഷധക്കിഴികൾ ശരീരത്തിൽ പ്രയോഗിക്കുന്ന ചികിത്സകൻ",
    },
    image: "/images/treatments/kizhi-therapy.jpg",
  },
  {
    slug: "abhyanga",
    name: { en: "Abhyanga (Ayurvedic Oil Massage)", ml: "അഭ്യംഗം (ആയുർവേദ എണ്ണമസാജ്)" },
    short: {
      en: "A traditional oil massage whose suitability and method should be discussed with a practitioner.",
      ml: "അനുയോജ്യതയും രീതിയും ഡോക്ടറുമായി ചർച്ച ചെയ്തശേഷം മാത്രം പരിഗണിക്കേണ്ട പരമ്പരാഗത എണ്ണമസാജ്.",
    },
    overview: {
      en: "Abhyanga is a traditional Ayurvedic oil massage. The oil, body areas, and massage approach should be selected for the individual after consultation.",
      ml: "അഭ്യംഗം ഒരു പരമ്പരാഗത എണ്ണമസാജാണ്. കൂടിയാലോചനയ്ക്കുശേഷം വ്യക്തിക്ക് അനുയോജ്യമായ എണ്ണയും ശരീരഭാഗങ്ങളും മസാജ് രീതിയും തിരഞ്ഞെടുക്കണം.",
    },
    procedure: {
      en: "A trained practitioner applies oil using massage movements selected for the individual. The session should be adjusted or stopped if there is discomfort or an adverse reaction.",
      ml: "പരിശീലനം നേടിയ തെറാപ്പിസ്റ്റ് വ്യക്തിക്ക് അനുയോജ്യമായ രീതിയിൽ എണ്ണ ഉപയോഗിച്ച് മസാജ് ചെയ്യും. അസ്വസ്ഥതയോ പ്രതികരണമോ ഉണ്ടായാൽ ചികിത്സ ക്രമീകരിക്കുകയോ നിർത്തുകയോ വേണം.",
    },
    whoMayNeed: {
      en: "Discuss your goals and health history with the practitioner; massage is not appropriate for every person or condition.",
      ml: "നിങ്ങളുടെ ലക്ഷ്യങ്ങളും ആരോഗ്യചരിത്രവും ഡോക്ടറുമായി ചർച്ച ചെയ്യുക. മസാജ് എല്ലാവർക്കും എല്ലാ അവസ്ഥകളിലും അനുയോജ്യമാകണമെന്നില്ല.",
    },
    precautions: {
      en: "Mention allergies, sensitive or broken skin, fever, recent injury, pregnancy, and any medical advice restricting massage before the session.",
      ml: "അലർജി, സെൻസിറ്റീവ് അല്ലെങ്കിൽ മുറിവുള്ള ചർമ്മം, പനി, അടുത്തകാലത്തെ പരിക്ക്, ഗർഭാവസ്ഥ, മസാജ് ഒഴിവാക്കണമെന്ന് നൽകിയ വൈദ്യോപദേശം എന്നിവ സെഷനുമുമ്പ് അറിയിക്കുക.",
    },
    imageAlt: {
      en: "Therapist applying oil during a traditional full-body massage",
      ml: "പരമ്പരാഗത ശരീരമസാജിനിടെ എണ്ണ പുരട്ടുന്ന തെറാപ്പിസ്റ്റ്",
    },
    image: "/images/treatments/abhyanga-oil-massage.jpg",
  },
  {
    slug: "steam-bath",
    name: { en: "Steam Bath (Swedana)", ml: "സ്വേദനം (ആവി ചികിത്സ)" },
    short: {
      en: "A supervised heat therapy that requires screening for heat tolerance and health conditions.",
      ml: "ചൂട് സഹിക്കാനുള്ള ശേഷിയും ആരോഗ്യാവസ്ഥയും വിലയിരുത്തിയശേഷം മേൽനോട്ടത്തിൽ മാത്രം ചെയ്യേണ്ട ചികിത്സ.",
    },
    overview: {
      en: "Steam bath is a heat-based therapy that may be included in a traditional care plan. A practitioner should decide whether it is appropriate for the individual.",
      ml: "സ്വേദനം ചൂടും ആവിയും ഉപയോഗിക്കുന്ന ചികിത്സാരീതിയാണ്. വ്യക്തിക്ക് ഇത് അനുയോജ്യമാണോ എന്ന് ഡോക്ടർ വിലയിരുത്തണം.",
    },
    procedure: {
      en: "The person is exposed to warm steam for a practitioner-determined period in a supervised setting. Temperature, duration, hydration, and the ability to stop promptly are important.",
      ml: "പരിശീലിതരുടെ മേൽനോട്ടത്തിൽ, ഡോക്ടർ നിശ്ചയിക്കുന്ന സമയത്തേക്ക് ചൂടുള്ള ആവി നൽകുന്നു. ചൂടും ദൈർഘ്യവും നിയന്ത്രിക്കണം; ആവശ്യമായാൽ ഉടൻ നിർത്താൻ കഴിയണം.",
    },
    whoMayNeed: {
      en: "A practitioner should review cardiovascular or respiratory conditions, pregnancy, dehydration risk, and heat sensitivity before considering steam.",
      ml: "ഹൃദയമോ ശ്വാസകോശമോ സംബന്ധിച്ച പ്രശ്നങ്ങൾ, ഗർഭാവസ്ഥ, നിർജലീകരണ സാധ്യത, ചൂടിനോടുള്ള അസഹിഷ്ണുത എന്നിവയുണ്ടെങ്കിൽ ആവിച്ചികിത്സയ്ക്ക് മുമ്പ് ഡോക്ടറുടെ വിലയിരുത്തൽ തേടുക.",
    },
    precautions: {
      en: "Stop if you feel dizzy, faint, breathless, nauseated, or unwell. Do not use steam therapy without professional guidance if you have a condition affected by heat.",
      ml: "തലചുറ്റൽ, ബോധക്ഷയം, ശ്വാസംമുട്ടൽ, ഓക്കാനം, അസ്വസ്ഥത എന്നിവ അനുഭവപ്പെട്ടാൽ ചികിത്സ ഉടൻ നിർത്തുക. ചൂട് ബാധിക്കാവുന്ന ആരോഗ്യപ്രശ്നങ്ങളുണ്ടെങ്കിൽ വിദഗ്ധോപദേശമില്ലാതെ ആവിച്ചികിത്സ ചെയ്യരുത്.",
    },
    imageAlt: {
      en: "Person receiving supervised herbal steam therapy in a traditional wooden Swedana chamber",
      ml: "പരമ്പരാഗത മരച്ചെമ്പിൽ മേൽനോട്ടത്തോടെ ആവിച്ചികിത്സ സ്വീകരിക്കുന്ന വ്യക്തി",
    },
    image: "/images/treatments/swedana-steam-chamber.svg",
  },
  {
    slug: "nasyam",
    name: { en: "Nasyam", ml: "നസ്യം" },
    short: {
      en: "A specialized nasal therapy that should only be considered and administered by a qualified practitioner.",
      ml: "യോഗ്യതയുള്ള ഡോക്ടറുടെ വിലയിരുത്തലിനും മേൽനോട്ടത്തിനും ശേഷം മാത്രം ചെയ്യേണ്ട പ്രത്യേക നാസികാചികിത്സ.",
    },
    overview: {
      en: "Nasyam is a traditional Ayurvedic procedure involving application through the nose. It requires a qualified practitioner's assessment and should not be self-administered.",
      ml: "മൂക്കിലൂടെ ഔഷധം പ്രയോഗിക്കുന്ന പരമ്പരാഗത ചികിത്സാരീതിയാണ് നസ്യം. യോഗ്യതയുള്ള ഡോക്ടർ വിലയിരുത്തിയശേഷം മാത്രമേ ചെയ്യാവൂ; സ്വയം ചെയ്യരുത്.",
    },
    procedure: {
      en: "The practitioner assesses the person and selects the preparation and method. Any preparation is administered in a clinical setting with appropriate hygiene and observation.",
      ml: "വ്യക്തിയെ വിലയിരുത്തിയശേഷം ഡോക്ടർ ഔഷധവും രീതിയും നിശ്ചയിക്കുന്നു. ആവശ്യമായ ശുചിത്വവും നിരീക്ഷണവും ഉറപ്പാക്കുന്ന ചികിത്സാസാഹചര്യത്തിൽ മാത്രമേ ഇത് ചെയ്യാവൂ.",
    },
    whoMayNeed: {
      en: "A person considering this procedure should first discuss nasal, sinus, breathing, and other health concerns with a qualified practitioner.",
      ml: "ഈ ചികിത്സ പരിഗണിക്കുന്നവർ മൂക്ക്, സൈനസ്, ശ്വസനം എന്നിവയുമായി ബന്ധപ്പെട്ട പ്രശ്നങ്ങളും മറ്റ് ആരോഗ്യവിവരങ്ങളും യോഗ്യതയുള്ള ഡോക്ടറുമായി ആദ്യം ചർച്ച ചെയ്യണം.",
    },
    precautions: {
      en: "Do not self-administer. Active nasal bleeding, significant congestion, allergies, recent nasal procedures, or breathing difficulty require professional review before any nasal treatment.",
      ml: "സ്വയം ചെയ്യരുത്. മൂക്കിൽ രക്തസ്രാവമോ കടുത്ത അടപ്പോ അലർജിയോ ശ്വസനപ്രശ്നമോ ഉണ്ടെങ്കിൽ, അല്ലെങ്കിൽ അടുത്തിടെ മൂക്കിൽ ശസ്ത്രക്രിയ നടത്തിയിട്ടുണ്ടെങ്കിൽ, ചികിത്സയ്ക്ക് മുമ്പ് ഡോക്ടറെ സമീപിക്കുക.",
    },
    imageAlt: {
      en: "Qualified practitioner administering prescribed nasal drops during Nasyam",
      ml: "നസ്യം ചികിത്സയിൽ നിർദേശിച്ച ഔഷധത്തുള്ളികൾ മൂക്കിൽ പ്രയോഗിക്കുന്ന യോഗ്യതയുള്ള ചികിത്സകൻ",
    },
    image: "/images/treatments/nasyam-practitioner.svg",
  },
  {
    slug: "kati-vasti",
    name: { en: "Kati Vasti", ml: "കടി വസ്തി" },
    short: {
      en: "A localized warm-oil procedure for the lower back, considered after assessment of the cause of pain.",
      ml: "നടുവേദനയുടെ കാരണം പരിശോധിച്ചശേഷം മാത്രം പരിഗണിക്കേണ്ട, അരക്കെട്ടിൽ ചൂടുള്ള എണ്ണ ഉപയോഗിക്കുന്ന ചികിത്സ.",
    },
    overview: {
      en: "Kati Vasti is a traditional localized procedure in which warm oil is held over the lower back within a shaped boundary. It does not replace assessment of back pain.",
      ml: "അരക്കെട്ടിനു മുകളിൽ മാവുകൊണ്ട് തയ്യാറാക്കിയ അതിരിനുള്ളിൽ ചൂടുള്ള എണ്ണ നിലനിർത്തുന്ന പരമ്പരാഗത ചികിത്സയാണ് കടി വസ്തി. നടുവേദനയുടെ വൈദ്യപരിശോധനയ്ക്ക് ഇത് പകരമല്ല.",
    },
    procedure: {
      en: "A practitioner prepares the area and applies warm oil within a dough boundary for a clinician-determined period, monitoring skin comfort and temperature throughout.",
      ml: "മാവുകൊണ്ട് തയ്യാറാക്കിയ അതിരിനുള്ളിൽ ഡോക്ടർ നിശ്ചയിച്ച സമയത്തേക്ക് ചൂടുള്ള എണ്ണ നിലനിർത്തുന്നു. ചികിത്സയ്ക്കിടെ ചർമ്മത്തിന്റെ സുഖവും എണ്ണയുടെ ചൂടും നിരീക്ഷിക്കണം.",
    },
    whoMayNeed: {
      en: "People with lower-back discomfort should first discuss its cause with a clinician, especially after injury or when pain is severe, persistent, or spreading.",
      ml: "നടുവേദനയുടെ കാരണം ആദ്യം ഡോക്ടറുമായി ചർച്ച ചെയ്യുക. പരിക്കിന് ശേഷമുണ്ടാകുന്നതോ കഠിനമോ നീണ്ടുനിൽക്കുന്നതോ പടരുന്നതോ ആയ വേദനയാണെങ്കിൽ പ്രത്യേകിച്ചും വൈദ്യപരിശോധന തേടുക.",
    },
    precautions: {
      en: "Tell the practitioner about reduced sensation, skin conditions, fever, pregnancy, or prior spinal problems. New weakness, numbness around the groin, or bladder/bowel changes need urgent medical assessment.",
      ml: "സ്പർശബോധക്കുറവ്, ചർമ്മപ്രശ്നങ്ങൾ, പനി, ഗർഭാവസ്ഥ, നട്ടെല്ലിലെ മുൻപ്രശ്നങ്ങൾ എന്നിവ അറിയിക്കുക. പുതിയ ബലക്കുറവ്, തുടയിടുക്കിലെ മരവിപ്പ്, മൂത്രമല നിയന്ത്രണത്തിലെ മാറ്റം എന്നിവയുണ്ടെങ്കിൽ അടിയന്തര വൈദ്യസഹായം തേടുക.",
    },
    imageAlt: {
      en: "Warm oil retained over the lower back within a dough ring during Kati Vasti",
      ml: "കടി വസ്തി ചികിത്സയിൽ മാവുകൊണ്ടുള്ള വളയത്തിനുള്ളിൽ നടുവിൽ ചൂടുള്ള എണ്ണ നിലനിർത്തുന്നത്",
    },
    image: "/images/treatments/kati-vasti.jpg",
  },
  {
    slug: "shirodhara",
    name: { en: "Shirodhara", ml: "ശിരോധാര" },
    short: {
      en: "A supervised traditional procedure involving a steady stream of liquid over the forehead.",
      ml: "നെറ്റിയിൽ തുടർച്ചയായി ദ്രാവകം ഒഴിക്കുന്ന പരമ്പരാഗത ചികിത്സ; പരിശീലിതരുടെ മേൽനോട്ടത്തിൽ മാത്രം ചെയ്യേണ്ടതാണ്.",
    },
    overview: {
      en: "Shirodhara is a traditional Ayurvedic procedure in which a selected liquid is poured in a controlled stream over the forehead. It should be planned by a practitioner.",
      ml: "തിരഞ്ഞെടുത്ത ദ്രാവകം നിയന്ത്രിതമായി നെറ്റിയിൽ ഒഴിക്കുന്ന പരമ്പരാഗത ചികിത്സയാണ് ശിരോധാര. ഡോക്ടറുടെ നിർദേശപ്രകാരം മാത്രമേ ചെയ്യാവൂ.",
    },
    procedure: {
      en: "The person rests in a supported position while a trained practitioner controls the liquid, temperature, and duration. The session should be stopped if it causes discomfort.",
      ml: "സുഖകരമായി കിടക്കുന്ന വ്യക്തിയുടെ നെറ്റിയിലേക്ക് പരിശീലനം നേടിയ ചികിത്സകൻ ദ്രാവകം ഒഴിക്കും. ദ്രാവകത്തിന്റെ ചൂടും ഒഴുക്കും ചികിത്സയുടെ ദൈർഘ്യവും നിയന്ത്രിക്കണം; അസ്വസ്ഥത തോന്നിയാൽ നിർത്തണം.",
    },
    whoMayNeed: {
      en: "Discuss your reasons for considering this therapy and your health history with a practitioner before scheduling.",
      ml: "ഈ ചികിത്സ പരിഗണിക്കുന്നതിന്റെ കാരണവും നിങ്ങളുടെ ആരോഗ്യചരിത്രവും മുൻകൂട്ടി ഡോക്ടറുമായി ചർച്ച ചെയ്യുക.",
    },
    precautions: {
      en: "Scalp or eye irritation, recent head injury, severe headache, or neurological symptoms need clinical review first. Do not use this therapy to delay assessment of concerning symptoms.",
      ml: "തലയോട്ടിയിലോ കണ്ണിലോ അസ്വസ്ഥത, അടുത്തകാലത്തെ തലയ്ക്കുള്ള പരിക്ക്, കഠിനമായ തലവേദന, നാഡീസംബന്ധമായ ലക്ഷണങ്ങൾ എന്നിവയുണ്ടെങ്കിൽ ആദ്യം ഡോക്ടറെ കാണുക. ആശങ്കാജനകമായ ലക്ഷണങ്ങളുടെ പരിശോധന വൈകിക്കരുത്.",
    },
    imageAlt: {
      en: "Warm oil flowing from a vessel onto a patient's forehead during Shirodhara",
      ml: "ശിരോധാരയിൽ പാത്രത്തിൽനിന്ന് നെറ്റിയിലേക്ക് ചൂടുള്ള എണ്ണ ഒഴുകുന്നത്",
    },
    image: "/images/treatments/shirodhara-treatment.svg",
  },
  {
    slug: "leech-therapy",
    name: { en: "Leech Therapy (Jalauka)", ml: "അട്ട ചികിത്സ (ജലൗക)" },
    short: {
      en: "An invasive procedure requiring specialist assessment, informed consent, and strict infection-control safeguards.",
      ml: "വിദഗ്ധ വിലയിരുത്തൽ, വിവരങ്ങൾ അറിഞ്ഞുള്ള സമ്മതം, കർശനമായ അണുബാധാ നിയന്ത്രണം എന്നിവ ആവശ്യമായ ചികിത്സ.",
    },
    overview: {
      en: "Leech therapy is an invasive procedure that can involve bleeding and infection risks. It must never be attempted at home and should only be considered by a suitably qualified practitioner after assessment.",
      ml: "രക്തസ്രാവത്തിനും അണുബാധയ്ക്കും സാധ്യതയുള്ള ചികിത്സയാണ് അട്ട ചികിത്സ. വീട്ടിൽ പരീക്ഷിക്കരുത്. വിലയിരുത്തലിന് ശേഷം യോഗ്യതയുള്ള വിദഗ്ധൻ മാത്രമേ ഇത് പരിഗണിക്കാവൂ.",
    },
    procedure: {
      en: "If a qualified practitioner considers it appropriate, they should explain the procedure and risks, obtain informed consent, use an appropriate clinical setting and infection-control measures, and arrange follow-up.",
      ml: "യോഗ്യതയുള്ള വിദഗ്ധൻ അനുയോജ്യമെന്ന് വിലയിരുത്തിയാൽ, നടപടിക്രമവും അപകടസാധ്യതകളും വിശദീകരിച്ച് വ്യക്തിയുടെ സമ്മതം നേടണം. ഉചിതമായ ചികിത്സാസാഹചര്യത്തിലും അണുബാധാ നിയന്ത്രണത്തോടെയും നടത്തി തുടർപരിചരണവും ഉറപ്പാക്കണം.",
    },
    whoMayNeed: {
      en: "Only a specialist can decide whether this invasive procedure is appropriate. An alternative, non-invasive option may be safer.",
      ml: "ഈ ചികിത്സ അനുയോജ്യമാണോ എന്ന് വിദഗ്ധൻ മാത്രമേ തീരുമാനിക്കാവൂ. മുറിവേൽപ്പിക്കാത്ത മറ്റൊരു മാർഗം കൂടുതൽ സുരക്ഷിതമായേക്കാം.",
    },
    precautions: {
      en: "Bleeding disorders, anaemia, immune suppression, pregnancy, anticoagulant medicines, and infection risk require careful medical review. Seek prompt care for persistent bleeding, fever, or spreading redness.",
      ml: "രക്തസ്രാവസംബന്ധമായ രോഗങ്ങൾ, വിളർച്ച, പ്രതിരോധശേഷിക്കുറവ്, ഗർഭാവസ്ഥ, രക്തം കട്ടപിടിക്കുന്നത് തടയുന്ന മരുന്നുകളുടെ ഉപയോഗം എന്നിവയുണ്ടെങ്കിൽ വിശദമായ വൈദ്യപരിശോധന വേണം. രക്തസ്രാവം തുടരുകയോ പനിയോ ചുവപ്പ് പടരുകയോ ചെയ്താൽ ഉടൻ ചികിത്സ തേടുക.",
    },
    imageAlt: {
      en: "Illustration of leech therapy being performed in a clean clinical setting",
      ml: "ശുചിത്വമുള്ള ചികിത്സാസാഹചര്യത്തിൽ അട്ട ചികിത്സ നടത്തുന്നതിന്റെ ചിത്രം",
    },
    image: "/images/treatments/leech-therapy-clinical.svg",
  },
  {
    slug: "cupping-therapy",
    name: { en: "Cupping Therapy", ml: "കപ്പിംഗ് തെറാപ്പി" },
    short: {
      en: "A suction-based procedure with possible side effects that should be discussed with a qualified practitioner.",
      ml: "പാർശ്വഫലങ്ങൾക്ക് സാധ്യതയുള്ള സക്ഷൻ ചികിത്സ. യോഗ്യതയുള്ള ഡോക്ടറുമായി ചർച്ച ചെയ്തശേഷം മാത്രം പരിഗണിക്കുക.",
    },
    overview: {
      en: "Cupping uses cups to create suction on the skin. Techniques vary, and some forms may break the skin; any proposed treatment needs individual assessment.",
      ml: "കപ്പുകൾ ഉപയോഗിച്ച് ചർമ്മത്തിൽ വലിവ് സൃഷ്ടിക്കുന്ന രീതിയാണ് കപ്പിംഗ്. രീതികൾ വ്യത്യാസപ്പെടാം; ചിലതിൽ ചർമ്മത്തിൽ ചെറിയ മുറിവുണ്ടാക്കും. ചികിത്സയ്ക്ക് മുമ്പ് വ്യക്തിഗത വിലയിരുത്തൽ വേണം.",
    },
    procedure: {
      en: "A practitioner places cups on selected areas for a planned duration. Ask whether the method is dry or involves skin puncture, how equipment is sterilized, and what aftercare is needed.",
      ml: "തിരഞ്ഞെടുത്ത ശരീരഭാഗങ്ങളിൽ നിശ്ചിത സമയത്തേക്ക് കപ്പുകൾ വയ്ക്കുന്നു. ചർമ്മത്തിൽ മുറിവുണ്ടാക്കുന്ന രീതിയാണോ, ഉപകരണങ്ങൾ എങ്ങനെ അണുവിമുക്തമാക്കും, ചികിത്സയ്ക്കുശേഷം എന്ത് പരിചരണം വേണം എന്നിവ ചോദിച്ച് മനസ്സിലാക്കുക.",
    },
    whoMayNeed: {
      en: "Discuss the reason for considering cupping with a clinician; it is not a substitute for investigating the cause of pain or other symptoms.",
      ml: "കപ്പിംഗ് പരിഗണിക്കുന്നതിന്റെ കാരണം ഡോക്ടറുമായി ചർച്ച ചെയ്യുക. വേദനയുടെയോ മറ്റ് ലക്ഷണങ്ങളുടെയോ കാരണം കണ്ടെത്താനുള്ള വൈദ്യപരിശോധനയ്ക്ക് ഇത് പകരമല്ല.",
    },
    precautions: {
      en: "Bruising, burns, infection, and bleeding are possible. Tell the practitioner about skin conditions, bleeding risk, anticoagulant medicines, pregnancy, or immune conditions. Avoid unsterile or self-administered procedures.",
      ml: "ചതവ്, പൊള്ളൽ, അണുബാധ, രക്തസ്രാവം എന്നിവ ഉണ്ടാകാം. ചർമ്മരോഗങ്ങൾ, രക്തസ്രാവസാധ്യത, രക്തം കട്ടപിടിക്കുന്നത് തടയുന്ന മരുന്നുകളുടെ ഉപയോഗം, ഗർഭാവസ്ഥ, പ്രതിരോധശേഷിക്കുറവ് എന്നിവ ഡോക്ടറെ അറിയിക്കുക. അണുവിമുക്തമല്ലാത്ത ഉപകരണങ്ങൾ ഉപയോഗിക്കുന്നതും സ്വയം ചികിത്സിക്കുന്നതും ഒഴിവാക്കുക.",
    },
    imageAlt: {
      en: "Therapist applying a cup to a patient's skin during cupping therapy",
      ml: "കപ്പിംഗ് ചികിത്സയ്ക്കിടെ രോഗിയുടെ ചർമ്മത്തിൽ കപ്പ് വയ്ക്കുന്ന തെറാപ്പിസ്റ്റ്",
    },
    image: "/images/treatments/cupping-therapy.jpg",
  },
];

export const treatmentMap: Record<string, Treatment> = Object.fromEntries(
  treatments.map((treatment) => [treatment.slug, treatment]),
);
