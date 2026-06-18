import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamSection } from "@/components/TeamSection";
import { SEO } from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Users, Award } from "lucide-react";
import bgAbout from "@/assets/bg-about.jpg";

const values = [
  {
    icon: Shield,
    title: "Transparency",
    description: "We maintain complete transparency in our review process, methodology, and potential conflicts of interest.",
  },
  {
    icon: Target,
    title: "Accuracy",
    description: "Our reviews are based on rigorous testing, analysis, and real-world trading experience.",
  },
  {
    icon: Users,
    title: "Independence",
    description: "We remain completely independent and are not influenced by broker partnerships or advertising revenue.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from our analysis to our user experience.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <SEO
        title="About BrokersTrusted – Our Team & Mission"
        description="Meet the BrokersTrusted team. Learn how our independent analysts review and rank forex brokers using transparent, data-driven methodology."
        canonical="https://brokertrusted.com/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About BrokerTrusted",
          url: "https://brokertrusted.com/about",
          mainEntity: {
            "@type": "Organization",
            name: "BrokerTrusted",
            url: "https://brokertrusted.com",
            logo: "https://brokertrusted.com/og-image.jpg",
            description: "Independent forex broker reviews, rankings and comparisons.",
            sameAs: [
              "https://twitter.com/brokerstrusted",
              "https://www.linkedin.com/company/brokertrusted",
              "https://www.facebook.com/brokertrusted",
            ],
          },
        }}
      />
      <Header />
      
      
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden text-white">
          <img
            src={bgAbout}
            alt="Forex trading workstation background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/75 to-primary/70" />
          <div className="absolute inset-0 bg-black/55" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Brokers Trusted
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We are the definitive source for forex broker reviews and rankings, 
              providing unbiased analysis to help traders make informed decisions.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To empower traders worldwide with comprehensive, unbiased information about forex brokers, 
                  enabling them to make informed decisions that protect their capital and maximize their trading potential.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">What We Do</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We conduct in-depth analysis of forex brokers worldwide, evaluating everything 
                      from regulatory compliance and trading conditions to customer service and platform reliability. 
                      Our comprehensive reviews help traders choose brokers that align with their needs and goals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Why We Started</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Founded by experienced traders and financial professionals, we recognized the need 
                      for truly independent broker analysis. Too many comparison sites are influenced by 
                      affiliate commissions. We prioritize accuracy and transparency above all else.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core principles guide everything we do at Brokers Trusted
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-success-light">
                        <IconComponent className="h-8 w-8 text-success" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Methodology</h2>
                <p className="text-lg text-muted-foreground">
                  How we evaluate and rank forex brokers
                </p>
              </div>

              <div className="space-y-8">
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">1. Regulatory Compliance (25%)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We assess regulatory status, investor protection schemes, segregation of client funds, 
                      and compliance with international financial standards. Only properly regulated brokers 
                      receive our "Trusted" designation.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">2. Trading Conditions (25%)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We analyze spreads, commission structures, execution speeds, slippage rates, 
                      and available leverage. Real trading accounts are used to test actual conditions 
                      rather than relying solely on advertised rates.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">3. Platform & Technology (20%)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We evaluate trading platforms for reliability, features, ease of use, and mobile accessibility. 
                      Our technical team conducts extensive testing to assess platform stability and performance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">4. Customer Service (15%)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We test customer support responsiveness, knowledge, and availability across multiple channels. 
                      Mystery shopping techniques ensure authentic assessment of service quality.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">5. Costs & Fees (15%)</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We analyze all costs including deposits, withdrawals, inactivity fees, and currency conversion charges. 
                      Hidden fees are identified and factored into our overall assessment.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <TeamSection />
      </main>

      <Footer />
    </div>
  );
}