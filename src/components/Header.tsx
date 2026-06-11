import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSelector } from "@/components/LanguageSelector";
import logo from "@/assets/logo.png";

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: "Broker Reviews", href: "/broker-reviews" },
    { name: "Trading Guides", href: "/trading-guides" },
    { name: "Market Analysis", href: "/market-analysis" },
    { name: "Blog", href: "/blog" },
    { name: t("nav.brokers"), href: "/brokers" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <span className="sr-only">BrokerTrusted</span>
            <img
              src={logo}
              alt="BrokerTrusted - Premium Forex Broker Reviews"
              width={160}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>
        </div>

        <div className="flex lg:gap-x-12">
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex md:gap-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-semibold leading-6 transition-colors ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="hidden md:flex">
              <LanguageSelector />
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSelector />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-6">
                  <div className="flex items-center">
                    <Link to="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                      <span className="text-xl font-bold text-primary">BrokerTrusted</span>
                    </Link>
                  </div>
                  <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                      <div className="space-y-2 py-6">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-muted"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}