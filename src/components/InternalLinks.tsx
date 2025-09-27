import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, TrendingUp, Shield, Users, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const internalLinks = {
  en: [
    {
      title: "How to Choose a Trusted Forex Broker",
      description: "Complete guide to selecting safe, regulated brokers with proper licensing and investor protection.",
      href: "/guides/choose-forex-broker",
      icon: Shield,
      category: "Safety Guide"
    },
    {
      title: "Best Regulated Forex Brokers 2025",
      description: "Top-rated brokers with FCA, CySEC, and ASIC regulation. Compare features, spreads, and safety ratings.",
      href: "/regulated-brokers",
      icon: TrendingUp,
      category: "Broker Rankings"
    },
    {
      title: "Forex Broker Safety Checklist",
      description: "Essential criteria for verifying broker trustworthiness, regulation status, and fund security.",
      href: "/guides/broker-safety-checklist",
      icon: BookOpen,
      category: "Educational"
    },
    {
      title: "Compare Top Forex Brokers",
      description: "Side-by-side comparison of spreads, fees, platforms, and regulatory compliance for leading brokers.",
      href: "/compare-brokers",
      icon: Users,
      category: "Comparison Tool"
    }
  ],
  pt: [
    {
      title: "Como Escolher uma Corretora Forex Confiável",
      description: "Guia completo para selecionar corretoras seguras e regulamentadas com licenciamento e proteção adequados.",
      href: "/guias/escolher-corretora-forex",
      icon: Shield,
      category: "Guia de Segurança"
    },
    {
      title: "Melhores Corretoras Forex Regulamentadas 2025",
      description: "Corretoras mais bem avaliadas com regulamentação FCA, CySEC e ASIC. Compare recursos e classificações.",
      href: "/corretoras-regulamentadas",
      icon: TrendingUp,
      category: "Rankings"
    },
    {
      title: "Lista de Verificação de Segurança",
      description: "Critérios essenciais para verificar a confiabilidade, status regulatório e segurança dos fundos.",
      href: "/guias/seguranca-corretoras",
      icon: BookOpen,
      category: "Educacional"
    },
    {
      title: "Comparar Principais Corretoras",
      description: "Comparação lado a lado de spreads, taxas, plataformas e conformidade regulatória.",
      href: "/comparar-corretoras",
      icon: Users,
      category: "Ferramenta de Comparação"
    }
  ],
  es: [
    {
      title: "Cómo Elegir un Bróker Forex Confiable",
      description: "Guía completa para seleccionar brókers seguros y regulados con licencias y protección adecuadas.",
      href: "/guias/elegir-broker-forex",
      icon: Shield,
      category: "Guía de Seguridad"
    },
    {
      title: "Mejores Brókers Forex Regulados 2025",
      description: "Brókers mejor calificados con regulación FCA, CySEC y ASIC. Compara características y calificaciones.",
      href: "/brokers-regulados",
      icon: TrendingUp,
      category: "Rankings"
    },
    {
      title: "Lista de Verificación de Seguridad",
      description: "Criterios esenciales para verificar la confiabilidad, estado regulatorio y seguridad de fondos.",
      href: "/guias/seguridad-brokers",
      icon: BookOpen,
      category: "Educativo"
    },
    {
      title: "Comparar Principales Brókers",
      description: "Comparación lado a lado de spreads, tarifas, plataformas y cumplimiento regulatorio.",
      href: "/comparar-brokers",
      icon: Users,
      category: "Herramienta de Comparación"
    }
  ]
};

export function InternalLinks() {
  const { i18n } = useTranslation();
  
  const currentLinks = internalLinks[i18n.language as keyof typeof internalLinks] || internalLinks.en;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Essential Forex Broker Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert guides and tools to help you choose the safest, most trusted forex brokers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {currentLinks.map((link, index) => {
            const IconComponent = link.icon;
            
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <Link to={link.href} className="block">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 rounded-lg bg-success/10 group-hover:bg-success/20 transition-colors">
                          <IconComponent className="h-6 w-6 text-success" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded">
                            {link.category}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-success transition-colors">
                          {link.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                          {link.description}
                        </p>
                        
                        <div className="flex items-center text-success text-sm font-medium">
                          <span>Read More</span>
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}