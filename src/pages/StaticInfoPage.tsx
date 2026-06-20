import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

type StaticPageKey = "team" | "methodology" | "careers" | "press" | "privacy" | "terms" | "cookies" | "disclaimer" | "risk-warning";

const staticPages: Record<StaticPageKey, {
  title: string;
  description: string;
  heading: string;
  intro: string;
  keywords: string[];
  sections: { title: string; body: string }[];
}> = {
  team: {
    title: "BrokerTrusted Editorial Team",
    description: "Meet the BrokerTrusted analysts and editors behind our independent forex broker reviews, rankings and trading education.",
    heading: "BrokerTrusted Editorial Team",
    intro: "Our editorial team reviews forex brokers using transparent criteria focused on regulation, safety, trading costs, execution quality and platform reliability.",
    keywords: ["forex broker editorial team", "broker review analysts", "independent forex experts"],
    sections: [
      { title: "Independent Analysis", body: "BrokerTrusted separates research from promotion. Reviews are based on broker regulation, account conditions, platform testing, spreads, commissions, withdrawals and support quality." },
      { title: "Specialist Coverage", body: "Our coverage includes regulated forex brokers, ECN brokers, STP brokers, market makers, beginner platforms, professional accounts, mobile apps and risk-management education." },
    ],
  },
  methodology: {
    title: "Forex Broker Review Methodology",
    description: "See how BrokerTrusted evaluates forex brokers using regulation, safety, spreads, fees, execution, platforms, withdrawals and support checks.",
    heading: "Forex Broker Review Methodology",
    intro: "Our methodology is designed to help traders compare forex brokers on measurable trust, cost and usability factors rather than marketing claims.",
    keywords: ["forex broker methodology", "broker review criteria", "forex broker testing"],
    sections: [
      { title: "Safety First", body: "We prioritize regulatory status, licensing jurisdictions, investor protection rules, negative balance protection, segregated funds and transparent risk disclosures." },
      { title: "Trading Conditions", body: "Broker scores consider average spreads, commissions, swaps, execution speed, slippage, order types, platforms, account types and withdrawal experience." },
    ],
  },
  careers: {
    title: "Careers at BrokerTrusted",
    description: "Career opportunities for analysts, editors and researchers focused on forex broker reviews, regulation and trading education.",
    heading: "Careers at BrokerTrusted",
    intro: "BrokerTrusted works with researchers, editors and market specialists who understand forex trading, broker regulation and investor protection.",
    keywords: ["forex analyst careers", "broker review jobs", "financial content careers"],
    sections: [
      { title: "What We Look For", body: "We value analytical thinking, clear writing, regulatory awareness and practical understanding of forex platforms, spreads, account types and risk management." },
      { title: "Editorial Standards", body: "Every contributor must follow our independent review standards, avoid conflicts of interest and support transparent comparisons for traders." },
    ],
  },
  press: {
    title: "BrokerTrusted Press & Media",
    description: "Press information for BrokerTrusted, an independent forex broker review and comparison platform covering regulated brokers and trading education.",
    heading: "BrokerTrusted Press & Media",
    intro: "BrokerTrusted publishes independent research on trusted forex brokers, broker regulation, trading costs, platform quality and market education.",
    keywords: ["BrokerTrusted press", "forex broker research", "forex media contact"],
    sections: [
      { title: "About BrokerTrusted", body: "BrokerTrusted helps traders compare regulated forex brokers through rankings, in-depth reviews, market analysis and educational guides." },
      { title: "Media Enquiries", body: "For commentary about forex broker regulation, trading platforms, spreads, broker safety or market education, contact the editorial team through the contact page." },
    ],
  },
  privacy: {
    title: "Privacy Policy",
    description: "BrokerTrusted privacy policy explaining how we handle website data, analytics, contact information and user privacy.",
    heading: "Privacy Policy",
    intro: "This privacy policy explains how BrokerTrusted handles information connected with website usage, contact requests and analytics.",
    keywords: ["BrokerTrusted privacy policy", "forex website privacy", "trading website data policy"],
    sections: [
      { title: "Information We Use", body: "We may use basic analytics, technical logs and information voluntarily submitted through contact forms to operate, secure and improve the website." },
      { title: "Your Choices", body: "Users can limit cookies through browser settings and contact BrokerTrusted with privacy questions or data-related requests." },
    ],
  },
  terms: {
    title: "Terms of Service",
    description: "BrokerTrusted terms of service for using broker reviews, forex rankings, educational guides and market analysis content.",
    heading: "Terms of Service",
    intro: "These terms explain the conditions for using BrokerTrusted content, including forex broker reviews, rankings, comparisons and educational resources.",
    keywords: ["BrokerTrusted terms", "forex review terms", "broker comparison terms"],
    sections: [
      { title: "Educational Use", body: "BrokerTrusted content is provided for research and educational purposes and does not constitute financial, investment or trading advice." },
      { title: "Content Accuracy", body: "We aim to keep broker information current, but trading conditions, regulations, spreads and fees can change. Always verify details with the broker before opening an account." },
    ],
  },
  cookies: {
    title: "Cookie Policy",
    description: "BrokerTrusted cookie policy explaining analytics, site functionality and user control over cookies.",
    heading: "Cookie Policy",
    intro: "BrokerTrusted may use cookies and similar technologies to support analytics, improve performance and understand how visitors use broker comparison pages.",
    keywords: ["BrokerTrusted cookie policy", "forex website cookies", "analytics cookies"],
    sections: [
      { title: "How Cookies Help", body: "Cookies can help measure page performance, popular broker review pages, trading guide engagement and technical issues affecting the site." },
      { title: "Managing Cookies", body: "You can manage or block cookies through your browser settings. Some preferences or analytics features may work differently when cookies are disabled." },
    ],
  },
  disclaimer: {
    title: "Forex Trading Disclaimer",
    description: "Important BrokerTrusted disclaimer about forex, CFD trading risks, broker information and educational content limitations.",
    heading: "Forex Trading Disclaimer",
    intro: "Forex and CFD trading involve significant risk. BrokerTrusted publishes research and educational content, not personalized investment advice.",
    keywords: ["forex disclaimer", "CFD trading disclaimer", "broker review disclaimer"],
    sections: [
      { title: "No Investment Advice", body: "Broker reviews, rankings, guides and market analysis are informational. Traders should make independent decisions and consider professional advice where appropriate." },
      { title: "Broker Information", body: "Regulation, spreads, leverage, fees, bonuses and account features may change. Confirm current conditions directly with each broker before trading." },
    ],
  },
  "risk-warning": {
    title: "Forex & CFD Risk Warning",
    description: "Risk warning for forex and CFD trading. Understand leverage, volatility, margin and the possibility of losing money before trading.",
    heading: "Forex & CFD Risk Warning",
    intro: "Trading leveraged products such as forex and CFDs carries a high level of risk and may not be suitable for every investor.",
    keywords: ["forex risk warning", "CFD risk warning", "leveraged trading risk"],
    sections: [
      { title: "Capital at Risk", body: "Retail traders can lose money rapidly because leverage magnifies both profits and losses. Only trade with capital you can afford to lose." },
      { title: "Risk Controls", body: "Use position sizing, stop losses, conservative leverage, a trading plan and broker safety checks before trading live markets." },
    ],
  },
};

export default function StaticInfoPage({ page }: { page: StaticPageKey }) {
  const content = staticPages[page];
  const canonicalPath = page === "risk-warning" ? "/risk-warning" : `/${page}`;

  return (
    <div className="min-h-screen">
      <SEO
        title={content.title}
        description={content.description}
        keywords={content.keywords}
        canonical={`https://brokertrusted.com${canonicalPath}`}
      />
      <Header />
      <main>
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{content.heading}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">{content.intro}</p>
            <div className="space-y-8">
              {content.sections.map((section) => (
                <section key={section.title} aria-labelledby={`${page}-${section.title.toLowerCase().replace(/\s+/g, "-")}`}>
                  <h2 id={`${page}-${section.title.toLowerCase().replace(/\s+/g, "-")}`} className="text-2xl font-semibold text-foreground mb-3">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
