import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = {
  en: [
    {
      id: "trustworthy-broker",
      question: "How do I know if a forex broker is trustworthy?",
      answer: "A trustworthy forex broker should be regulated by reputable financial authorities like FCA (UK), CySEC (Cyprus), ASIC (Australia), or CFTC (USA). Look for segregated client funds, transparent fee structures, positive user reviews, and proper licensing documentation. At BrokerTrusted, we verify all these criteria before featuring any broker."
    },
    {
      id: "safe-regulators",
      question: "What regulators license safe forex brokers?",
      answer: "The most trusted regulatory bodies include: FCA (Financial Conduct Authority - UK), CySEC (Cyprus Securities Exchange Commission), ASIC (Australian Securities and Investments Commission), CFTC (Commodity Futures Trading Commission - USA), BaFin (Germany), and FSA (Japan). These regulators enforce strict capital requirements and investor protection schemes."
    },
    {
      id: "safest-broker-2026",
      question: "What is the safest forex broker in 2025?",
      answer: "The safest forex brokers in 2026 are those with tier-1 regulation, strong capital reserves, and comprehensive investor protection. Our top-rated brokers include IG Markets (FCA regulated), Saxo Bank (multiple tier-1 licenses), and Interactive Brokers (CFTC regulated). Safety depends on regulation, fund segregation, and insurance coverage."
    },
    {
      id: "minimum-deposit",
      question: "What's the minimum deposit for trusted forex brokers?",
      answer: "Minimum deposits vary significantly among trusted brokers. Many reputable brokers offer accounts starting from $100-$500, while premium brokers may require $10,000+. Lower minimums don't indicate lower quality - many top-tier brokers offer accessible entry points for retail traders."
    },
    {
      id: "spreads-comparison",
      question: "How do I compare forex broker spreads?",
      answer: "Compare spreads during different market sessions (London, New York, Tokyo) as they fluctuate. Look at major pairs like EUR/USD, GBP/USD, and USD/JPY. Consider both raw spreads and total trading costs including commissions. Our broker reviews include real-time spread comparisons from live trading conditions."
    },
    {
      id: "withdrawal-process",
      question: "How long do withdrawals take from regulated brokers?",
      answer: "Regulated brokers typically process withdrawals within 1-5 business days for bank transfers, 1-3 days for e-wallets, and instantly for some digital payment methods. Processing times depend on verification status, withdrawal amount, and chosen payment method. Delays often indicate regulatory compliance checks."
    }
  ],
  pt: [
    {
      id: "trustworthy-broker",
      question: "Como saber se uma corretora forex é confiável?",
      answer: "Uma corretora forex confiável deve ser regulamentada por autoridades financeiras respeitáveis como FCA (Reino Unido), CySEC (Chipre), ASIC (Austrália) ou CFTC (EUA). Procure por fundos segregados de clientes, estruturas de taxas transparentes, avaliações positivas de usuários e documentação de licenciamento adequada."
    },
    {
      id: "safe-regulators", 
      question: "Quais reguladores licenciam corretoras forex seguras?",
      answer: "Os órgãos reguladores mais confiáveis incluem: FCA (Reino Unido), CySEC (Chipre), ASIC (Austrália), CFTC (EUA), BaFin (Alemanha) e FSA (Japão). Estes reguladores impõem requisitos rigorosos de capital e esquemas de proteção ao investidor."
    },
    {
      id: "safest-broker-2026",
      question: "Qual é a corretora forex mais segura em 2026?",
      answer: "As corretoras forex mais seguras em 2026 são aquelas com regulamentação tier-1, fortes reservas de capital e proteção abrangente ao investidor. Nossas corretoras melhor avaliadas incluem IG Markets, Saxo Bank e Interactive Brokers."
    },
    {
      id: "minimum-deposit",
      question: "Qual o depósito mínimo para corretoras confiáveis?",
      answer: "Os depósitos mínimos variam significativamente entre corretoras confiáveis. Muitas corretoras respeitáveis oferecem contas a partir de $100-$500, enquanto corretoras premium podem exigir $10.000+."
    },
    {
      id: "spreads-comparison",
      question: "Como comparar spreads de corretoras forex?",
      answer: "Compare spreads durante diferentes sessões de mercado (Londres, Nova York, Tóquio) pois eles flutuam. Observe pares principais como EUR/USD, GBP/USD e USD/JPY. Considere spreads brutos e custos totais incluindo comissões."
    },
    {
      id: "withdrawal-process",
      question: "Quanto tempo levam saques de corretoras regulamentadas?",
      answer: "Corretoras regulamentadas geralmente processam saques em 1-5 dias úteis para transferências bancárias, 1-3 dias para carteiras eletrônicas, e instantaneamente para alguns métodos de pagamento digital."
    }
  ],
  es: [
    {
      id: "trustworthy-broker",
      question: "¿Cómo sé si un bróker forex es confiable?",
      answer: "Un bróker forex confiable debe estar regulado por autoridades financieras respetables como FCA (Reino Unido), CySEC (Chipre), ASIC (Australia) o CFTC (EE.UU.). Busque fondos segregados de clientes, estructuras de tarifas transparentes y documentación de licencias adecuada."
    },
    {
      id: "safe-regulators",
      question: "¿Qué reguladores licencian brókers forex seguros?",
      answer: "Los organismos reguladores más confiables incluyen: FCA (Reino Unido), CySEC (Chipre), ASIC (Australia), CFTC (EE.UU.), BaFin (Alemania) y FSA (Japón). Estos reguladores imponen requisitos estrictos de capital y esquemas de protección al inversor."
    },
    {
      id: "safest-broker-2026",
      question: "¿Cuál es el bróker forex más seguro en 2026?",
      answer: "Los brókers forex más seguros en 2026 son aquellos con regulación tier-1, fuertes reservas de capital y protección integral al inversor. Nuestros brókers mejor calificados incluyen IG Markets, Saxo Bank e Interactive Brokers."
    },
    {
      id: "minimum-deposit",
      question: "¿Cuál es el depósito mínimo para brókers confiables?",
      answer: "Los depósitos mínimos varían significativamente entre brókers confiables. Muchos brókers respetables ofrecen cuentas desde $100-$500, mientras que brókers premium pueden requerir $10,000+."
    },
    {
      id: "spreads-comparison",
      question: "¿Cómo comparar spreads de brókers forex?",
      answer: "Compare spreads durante diferentes sesiones de mercado (Londres, Nueva York, Tokio) ya que fluctúan. Observe pares principales como EUR/USD, GBP/USD y USD/JPY. Considere spreads brutos y costos totales incluyendo comisiones."
    },
    {
      id: "withdrawal-process",
      question: "¿Cuánto tardan los retiros de brókers regulados?",
      answer: "Los brókers regulados generalmente procesan retiros en 1-5 días hábiles para transferencias bancarias, 1-3 días para billeteras electrónicas, e instantáneamente para algunos métodos de pago digital."
    }
  ]
};

export function FAQSection() {
  const { t, i18n } = useTranslation();
  
  const currentFAQ = faqData[i18n.language as keyof typeof faqData] || faqData.en;
  
  // Structured Data for FAQ
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": currentFAQ.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions About Trusted Forex Brokers
            </h2>
            <p className="text-lg text-muted-foreground">
              Get expert answers to the most common questions about choosing safe, regulated forex brokers.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {currentFAQ.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-4">
              Still have questions about choosing a trusted forex broker?
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              Contact Our Expert Team →
            </a>
          </div>
        </div>
      </div>

      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData)
        }}
      />
    </section>
  );
}