import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronDown, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BrokerCard } from "./BrokerCard";
import { brokers } from "@/data/brokers";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const filterOptions = {
  country: ["All Countries", "Cyprus", "UK", "Australia", "USA", "Vanuatu"],
  rating: ["All Ratings", "4.5+", "4.6+", "4.7+", "4.8+", "4.9+"],
  bonuses: ["All", "With Bonuses", "No Bonuses"],
  regulation: ["All", "FCA", "CySEC", "ASIC", "CFTC"],
  investorProtection: ["All", "Up to €20,000", "Up to £85,000", "Up to $1M", "SIPC Coverage"],
};

const orderOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "rating", label: "Highest Rating" },
  { value: "deposit", label: "Lowest Min Deposit" },
  { value: "leverage", label: "Highest Leverage" },
];

export function BrokerRanking() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedRating, setSelectedRating] = useState("All Ratings");
  const [selectedBonuses, setSelectedBonuses] = useState("All");
  const [selectedRegulation, setSelectedRegulation] = useState("All");
  const [selectedProtection, setSelectedProtection] = useState("All");
  const [orderBy, setOrderBy] = useState("recommended");
  const [showMoreFilters, setShowMoreFilters] = useState(false);
  const [displayCount, setDisplayCount] = useState(10);

  // Filter brokers based on selected criteria
  const filteredBrokers = brokers.filter((broker) => {
    if (searchQuery && !broker.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (selectedCountry !== "All Countries" && broker.country !== selectedCountry) {
      return false;
    }
    if (selectedRating !== "All Ratings") {
      const minRating = parseFloat(selectedRating.replace("+", ""));
      if (broker.rating < minRating) return false;
    }
    if (selectedBonuses === "With Bonuses" && !broker.bonuses) return false;
    if (selectedBonuses === "No Bonuses" && broker.bonuses) return false;
    if (selectedRegulation !== "All" && !broker.regulation.includes(selectedRegulation)) {
      return false;
    }
    if (selectedProtection !== "All" && broker.investorProtection !== selectedProtection) {
      return false;
    }
    return true;
  });

  // Sort brokers based on selected order
  const sortedBrokers = [...filteredBrokers].sort((a, b) => {
    switch (orderBy) {
      case "rating":
        return b.rating - a.rating;
      case "deposit":
        return parseInt(a.minDeposit.replace(/[^0-9]/g, "") || "0") - 
               parseInt(b.minDeposit.replace(/[^0-9]/g, "") || "0");
      case "leverage":
        const aLev = a.maxLeverage.includes("Unlimited") ? 999999 : 
                     parseInt(a.maxLeverage.replace(/[^0-9]/g, "") || "0");
        const bLev = b.maxLeverage.includes("Unlimited") ? 999999 : 
                     parseInt(b.maxLeverage.replace(/[^0-9]/g, "") || "0");
        return bLev - aLev;
      default:
        return a.rank - b.rank;
    }
  });

  const activeFiltersCount = [
    selectedCountry !== "All Countries",
    selectedRating !== "All Ratings", 
    selectedBonuses !== "All",
    selectedRegulation !== "All",
    selectedProtection !== "All",
  ].filter(Boolean).length;

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t("brokers.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert-reviewed rankings of the most reliable and trustworthy Forex brokers with verified regulation, 
            updated regularly based on comprehensive safety analysis.
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            <a href="/methodology" className="text-success hover:underline">
              Our ranking methodology and broker verification process →
            </a>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg shadow-card p-6 mb-8">
          <div className="flex flex-col space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search brokers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-3">
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.country.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedRating} onValueChange={setSelectedRating}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.rating.map((rating) => (
                    <SelectItem key={rating} value={rating}>
                      {rating}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedBonuses} onValueChange={setSelectedBonuses}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Bonuses" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.bonuses.map((bonus) => (
                    <SelectItem key={bonus} value={bonus}>
                      {bonus}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                onClick={() => setShowMoreFilters(!showMoreFilters)}
                className="flex items-center space-x-2"
              >
                <Filter className="h-4 w-4" />
                <span>More Filters</span>
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-1">
                    {activeFiltersCount}
                  </Badge>
                )}
                <ChevronDown className={cn("h-4 w-4 transition-transform", showMoreFilters && "rotate-180")} />
              </Button>

              <div className="ml-auto">
                <Select value={orderBy} onValueChange={setOrderBy}>
                  <SelectTrigger className="w-[160px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {orderOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Extended Filters */}
            {showMoreFilters && (
              <div className="pt-4 border-t border-border animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Regulation</label>
                    <Select value={selectedRegulation} onValueChange={setSelectedRegulation}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {filterOptions.regulation.map((reg) => (
                          <SelectItem key={reg} value={reg}>
                            {reg}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Investor Protection</label>
                    <Select value={selectedProtection} onValueChange={setSelectedProtection}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {filterOptions.investorProtection.map((protection) => (
                          <SelectItem key={protection} value={protection}>
                            {protection}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-muted-foreground">
            Showing {Math.min(displayCount, sortedBrokers.length)} of {sortedBrokers.length} brokers
          </p>
          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedCountry("All Countries");
                setSelectedRating("All Ratings");
                setSelectedBonuses("All");
                setSelectedRegulation("All");
                setSelectedProtection("All");
                setSearchQuery("");
              }}
            >
              Clear all filters
            </Button>
          )}
        </div>

        {/* Broker Cards */}
        <div className="space-y-4">
          {sortedBrokers.slice(0, displayCount).map((broker) => (
            <BrokerCard key={broker.id} {...broker} />
          ))}
        </div>

        {/* Show More Button */}
        {displayCount < sortedBrokers.length && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setDisplayCount(prev => prev + 10)}
            >
              Show More Brokers ({sortedBrokers.length - displayCount} remaining)
            </Button>
          </div>
        )}

        {/* View All Brokers Button */}
        <div className="text-center mt-6">
          <Link to="/brokers" aria-label="Ver todas as corretoras">
            <Button size="lg" className="px-8">Ver Todas</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}