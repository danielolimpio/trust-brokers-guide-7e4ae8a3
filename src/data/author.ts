import danielOlimpioPhoto from "@/assets/authors/daniel-olimpio.jpg";

export type AuthorSocial = {
  platform: "linkedin" | "facebook" | "x" | "instagram" | "website";
  label: string;
  href: string;
};

export type AuthorProfile = {
  name: string;
  role: string;
  shortBio: string;
  fullBio: string[];
  photo: string;
  website: string;
  socials: AuthorSocial[];
};

export const danielOlimpio: AuthorProfile = {
  name: "Daniel Olímpio",
  role: "Web Developer & Forex Professional",
  shortBio:
    "Web Developer and Forex Professional. Founder and lead developer of the Broker Trusted blog, focused on independent broker research, trading education and trustworthy financial content.",
  fullBio: [
    "Daniel Olímpio is a Web Developer and Forex Professional with hands-on experience in building data-driven financial platforms, broker comparison systems and trader-focused educational content.",
    "He leads the development of the Broker Trusted blog, where the editorial mission is to deliver independent, well-researched and EEAT-compliant material on forex brokers, regulation, trading costs, platforms and risk management.",
    "His work combines a senior engineering background with practical knowledge of foreign exchange markets, technical analysis, MetaTrader and TradingView, allowing him to translate complex broker mechanics into clear, actionable insights for retail and professional traders.",
    "Beyond Broker Trusted, Daniel maintains an active online presence sharing analysis, tutorials and behind-the-scenes content about development, finance and digital projects.",
  ],
  photo: danielOlimpioPhoto,
  website: "https://danielolimpio.com/",
  socials: [
    { platform: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/danielolimpio-com/" },
    { platform: "facebook", label: "Facebook", href: "https://www.facebook.com/danielolimpio.com.br" },
    { platform: "x", label: "X (Twitter)", href: "https://x.com/danielolimpio_" },
    { platform: "instagram", label: "Instagram", href: "https://www.instagram.com/danielolimpio_com" },
    { platform: "website", label: "danielolimpio.com", href: "https://danielolimpio.com/" },
  ],
};
