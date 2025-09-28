import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { TrendingUp, Facebook, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  brokers: [
    { name: "Best Forex Brokers", href: "/best-brokers" },
    { name: "Top Regulated Brokers", href: "/regulated-brokers" },
    { name: "Best Spreads", href: "/best-spreads" },
    { name: "Highest Leverage", href: "/highest-leverage" },
    { name: "Best Bonuses", href: "/best-bonus" },
    { name: "New Brokers", href: "/new-brokers" },
  ],
  categories: [
    { name: "Best for Beginners", href: "/beginners" },
    { name: "Best for Professionals", href: "/professionals" },
    { name: "Best Mobile Apps", href: "/mobile-apps" },
    { name: "ECN Brokers", href: "/ecn-brokers" },
    { name: "STP Brokers", href: "/stp-brokers" },
    { name: "Market Makers", href: "/market-makers" },
  ],
  resources: [
    { name: "Broker Reviews", href: "/reviews" },
    { name: "Trading Guides", href: "/guides" },
    { name: "Market Analysis", href: "/analysis" },
    { name: "Educational Content", href: "/education" },
    { name: "Forex News", href: "/news" },
    { name: "Blog", href: "/blog" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Methodology", href: "/methodology" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Risk Warning", href: "/risk-warning" },
  ],
};

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success">
                  <TrendingUp className="h-5 w-5 text-success-foreground" />
                </div>
                <span className="text-xl font-bold">
                  Brokers<span className="text-success">Trusted</span>
                </span>
              </div>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                {t("footer.description")}
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-success" />
                  <span className="text-sm">contact@brokertrusted.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-success" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-success" />
                  <span className="text-sm">London, United Kingdom</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground/60 hover:text-success transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-success transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-success transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-success transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Brokers */}
            <div>
              <h3 className="font-semibold mb-4 text-success">Best Brokers</h3>
              <ul className="space-y-2">
                {footerLinks.brokers.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-primary-foreground/80 hover:text-success transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-4 text-success">Categories</h3>
              <ul className="space-y-2">
                {footerLinks.categories.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-primary-foreground/80 hover:text-success transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4 text-success">Resources</h3>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-primary-foreground/80 hover:text-success transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4 text-success">Company</h3>
              <ul className="space-y-2 mb-6">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-primary-foreground/80 hover:text-success transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-primary-foreground/80">
              {footerLinks.legal.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <Link 
                    to={link.href} 
                    className="hover:text-success transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < footerLinks.legal.length - 1 && (
                    <span className="ml-6 text-primary-foreground/40">|</span>
                  )}
                </span>
              ))}
            </div>
            
            <div className="text-sm text-primary-foreground/80">
              © 2025 Copyright | BrokerTrusted | All rights reserved | Developed by 
              <a href="https://danielolimpio.com/" target="_blank" rel="noopener noreferrer" className="underline ml-1">DanielOlimpio</a>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Warning Banner */}
      <div className="bg-danger text-danger-foreground">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center">
            <p className="text-sm font-medium">
              <strong>Risk Warning:</strong> Your capital is at risk. Statistically, 74-89% of retail investors lose money when trading CFDs. 
              Please ensure you understand the risks involved and seek independent advice if necessary.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}