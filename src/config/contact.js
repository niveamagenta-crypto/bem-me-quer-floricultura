export const WHATSAPP_NUMBER = "5524992771513";
export const WHATSAPP_DISPLAY = "+55 24 99277-1513";
export const DEFAULT_WHATSAPP_MESSAGE =
  "OlÃ¡, gostaria de um orÃ§amento para [evento/buquÃª], meu nome Ã© [seu nome]";

export const CONTACT_INFO = {
  businessName: "Bem Me Quer",
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappDisplay: WHATSAPP_DISPLAY,
  instagramHandle: "@bemmequer.angra",
  instagramUrl: "https://instagram.com/bemmequer.angra",
  address: "Angra dos Reis, RJ â€“ Brasil",
  serviceHours: {
    weekdays: "Segunda a SÃ¡bado: 9h - 18h",
    sunday: "Domingo: Sob consulta",
  },
  defaultWhatsappMessage: DEFAULT_WHATSAPP_MESSAGE,
};

export const buildWhatsappLink = (message = DEFAULT_WHATSAPP_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_LINK = buildWhatsappLink();
