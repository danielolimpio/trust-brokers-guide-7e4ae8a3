import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const forexRates = [
  { pair: "EUR/USD", rate: "1.0845", change: "+0.0023", percentage: "+0.21%", trend: "up" },
  { pair: "GBP/USD", rate: "1.2734", change: "-0.0012", percentage: "-0.09%", trend: "down" },
  { pair: "USD/JPY", rate: "149.85", change: "+0.67", percentage: "+0.45%", trend: "up" },
  { pair: "USD/CHF", rate: "0.8756", change: "-0.0008", percentage: "-0.09%", trend: "down" },
  { pair: "AUD/USD", rate: "0.6542", change: "+0.0015", percentage: "+0.23%", trend: "up" },
  { pair: "USD/CAD", rate: "1.3567", change: "+0.0034", percentage: "+0.25%", trend: "up" },
  { pair: "NZD/USD", rate: "0.6123", change: "-0.0007", percentage: "-0.11%", trend: "down" },
  { pair: "EUR/GBP", rate: "0.8512", change: "+0.0019", percentage: "+0.22%", trend: "up" },
];

export function ForexRatesWidget() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Forex Cross Rates
          </h2>
          <p className="text-lg text-muted-foreground">
            Live exchange rates for major currency pairs
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Last updated: {new Date().toLocaleString()}
          </p>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Major Currency Pairs</span>
              <Badge variant="outline" className="text-xs">
                Live Rates
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold text-foreground">Pair</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground">Rate</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground">Change</th>
                    <th className="text-right py-3 px-4 font-semibold text-foreground">%</th>
                    <th className="text-center py-3 px-4 font-semibold text-foreground">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {forexRates.map((rate, index) => (
                    <tr 
                      key={rate.pair} 
                      className={cn(
                        "border-b border-border hover:bg-muted/50 transition-colors",
                        index % 2 === 0 && "bg-muted/20"
                      )}
                    >
                      <td className="py-3 px-4">
                        <span className="font-medium text-foreground">{rate.pair}</span>
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-foreground">
                        {rate.rate}
                      </td>
                      <td className={cn(
                        "py-3 px-4 text-right font-mono",
                        rate.trend === "up" ? "text-success" : "text-danger"
                      )}>
                        {rate.change}
                      </td>
                      <td className={cn(
                        "py-3 px-4 text-right font-medium",
                        rate.trend === "up" ? "text-success" : "text-danger"
                      )}>
                        {rate.percentage}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {rate.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-success inline" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-danger inline" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                Rates are indicative and for informational purposes only. 
                Actual trading rates may differ and are subject to market conditions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}