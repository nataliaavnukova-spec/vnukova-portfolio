// Site copy in both languages.
// First-screen text is the approved version from docs/site-plan.md (section 3).

export type Language = "ua" | "en";

export const languages: { code: Language; label: string }[] = [
  { code: "ua", label: "UA" },
  { code: "en", label: "EN" },
];

export const content = {
  ua: {
    homeLabel: "Наталя Внукова — на головну",
    navLabel: "Основна навігація",
    languageLabel: "Мова сайту",
    nav: [
      { label: "Роботи", href: "#work" },
      { label: "Про мене", href: "#about" },
      { label: "Контакт", href: "#contact" },
    ],
    hero: {
      photoAlt: "Портрет Наталі Внукової",
      greeting: "Привіт, я ",
      name: "Наталя",
      role: "UI/UX та Product Designer",
      subtitle: "Проєктую вебсервіси для бізнесу, якими просто користуватися.",
      primaryAction: "Переглянути роботи",
      secondaryAction: "Написати мені",
    },
  },
  en: {
    homeLabel: "Natalia Vnukova — home",
    navLabel: "Main navigation",
    languageLabel: "Site language",
    nav: [
      { label: "Work", href: "#work" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    hero: {
      photoAlt: "Portrait of Natalia Vnukova",
      greeting: "Hi, I’m ",
      name: "Natalia",
      role: "a UI/UX and Product Designer",
      subtitle: "I design web services for businesses that are simple to use.",
      primaryAction: "View my work",
      secondaryAction: "Get in touch",
    },
  },
} as const;
