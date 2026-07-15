const topicClusters = [
  {
    title: "Trusted Forex Broker Research",
    description:
      "BrokerTrusted compares regulated forex brokers by safety, licenses, execution quality, spreads, fees, account types, withdrawal speed and platform reliability so traders can identify brokers with stronger trust signals.",
    image: "/topics/research.webp",
    imageAlt: "Trusted Forex Broker Research infographic by BrokerTrusted",
    terms: [
      "trusted forex brokers",
      "regulated forex brokers",
      "forex broker reviews",
      "forex broker comparison",
      "safe forex brokers",
    ],
  },
  {
    title: "Regulation, Safety & Investor Protection",
    description:
      "Our broker research prioritizes FCA, CySEC, ASIC, NFA, CFTC, FSCA and DFSA regulation, segregated client funds, negative balance protection, transparent terms and consistent withdrawal processing.",
    image: "/topics/regulation.webp",
    imageAlt: "Regulation, Safety and Investor Protection infographic",
    terms: [
      "FCA regulated forex brokers",
      "ASIC regulated brokers",
      "CySEC forex brokers",
      "negative balance protection",
      "broker scam check",
    ],
  },
  {
    title: "Spreads, Execution & Trading Costs",
    description:
      "We evaluate low spread forex brokers, ECN accounts, STP execution, no dealing desk models, raw spread pricing, commissions, slippage, requotes and trading costs on major currency pairs such as EUR/USD, GBP/USD and USD/JPY.",
    image: "/topics/spreads.webp",
    imageAlt: "Spreads, Execution and Trading Costs infographic",
    terms: [
      "low spread forex brokers",
      "ECN forex brokers",
      "STP forex brokers",
      "raw spread accounts",
      "forex trading costs",
    ],
  },
  {
    title: "Trading Platforms, Apps & Account Features",
    description:
      "Broker comparisons include MetaTrader 4, MetaTrader 5, cTrader, TradingView integration, iOS and Android trading apps, demo accounts, copy trading, VPS hosting and professional account tools.",
    image: "/topics/platforms.webp",
    imageAlt: "Trading Platforms, Apps and Account Features infographic",
    terms: [
      "forex trading platforms",
      "best forex mobile apps",
      "MetaTrader 4 brokers",
      "MetaTrader 5 brokers",
      "copy trading brokers",
    ],
  },
  {
    title: "Forex Education, Strategy & Risk Management",
    description:
      "Our trading guides cover forex basics, technical analysis, market structure, trading psychology, risk per trade, stop loss placement, position sizing and a complete 2026 roadmap for beginner and advanced traders.",
    image: "/topics/education.webp",
    imageAlt: "Forex Education, Strategy and Risk Management infographic",
    terms: [
      "forex trading guide 2026",
      "forex risk management",
      "technical analysis forex",
      "forex trading strategies",
      "forex trading for beginners",
    ],
  },
  {
    title: "Market Analysis & Broker News",
    description:
      "Market coverage focuses on currency pair analysis, economic calendar events, central bank decisions, inflation data, interest-rate expectations, broker updates and trading conditions that can affect spreads and volatility.",
    image: "/topics/market-analysis.webp",
    imageAlt: "Market Analysis and Broker News infographic",
    terms: [
      "forex market analysis",
      "currency pair analysis",
      "economic calendar forex",
      "forex broker news",
      "market sentiment analysis",
    ],
  },
];


export function SEOKeywordSection() {
  return (
    <section className="py-20 bg-background" aria-labelledby="seo-topics-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 id="seo-topics-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Forex Broker Research Topics Covered by BrokerTrusted
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Detailed broker research for traders comparing regulation, spreads, platforms, execution models, account types and forex education before choosing where to trade.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topicClusters.map((cluster) => (
            <article
              key={cluster.title}
              className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-elegant"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                <img
                  src={cluster.image}
                  alt={cluster.imageAlt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">{cluster.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-5">{cluster.description}</p>
                <ul className="flex flex-wrap gap-2" aria-label={`${cluster.title} keywords`}>
                  {cluster.terms.map((term) => (
                    <li key={term} className="rounded-md bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                      {term}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

