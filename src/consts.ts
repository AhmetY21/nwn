export const SITE = {
  name: "Bedenin Sesi",
  title: "Bedenin Sesi | Beden farkındalığı ve beslenme ilişkisi üzerine",
  description:
    "Diyet kültüründen uzak, beden farkındalığına ve kanıta dayalı beslenme bilgisine odaklanan Türkçe içerik platformu.",
  url: "https://ahmety21.github.io",
  defaultOgImage: "/social-share.svg",
  author: "Editoryal ekip"
} as const;

export const NAV_ITEMS = [
  { href: "/", label: "Ana sayfa" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/makaleler", label: "Makaleler" },
  { href: "/bekleme-listesi", label: "Bekleme listesi" },
  { href: "/kaynaklar", label: "Kaynaklar" },
  { href: "/iletisim", label: "İletişim" }
] as const;

export const CATEGORY_KEYS = [
  "manifesto",
  "diyet-kulturu",
  "beden-farkindalgi",
  "beslenme-bilimi",
  "psikoloji",
  "pratikler"
] as const;

export const CATEGORY_LABELS = {
  manifesto: "Manifesto",
  "diyet-kulturu": "Diyet kültürü",
  "beden-farkindalgi": "Beden farkındalığı",
  "beslenme-bilimi": "Beslenme bilimi",
  psikoloji: "Psikoloji",
  pratikler: "Pratikler"
} as const;

export type Category = keyof typeof CATEGORY_LABELS;
