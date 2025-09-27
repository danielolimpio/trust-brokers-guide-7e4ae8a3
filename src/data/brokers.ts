import exnessLogo from "@/assets/brokers/exness-logo.png";
import fxproLogo from "@/assets/brokers/fxpro-logo.png";
import icmarketsLogo from "@/assets/brokers/icmarkets-logo.png";

export interface Broker {
  id: string;
  rank: number;
  name: string;
  logo: string;
  rating: number;
  maxRating: number;
  keyStrength: string;
  isTrusted: boolean;
  features: string[];
  minDeposit: string;
  maxLeverage: string;
  regulation: string;
  tradingPlatforms: string[];
  country: string;
  bonuses: boolean;
  investorProtection: string;
}

export const brokers: Broker[] = [
  {
    id: "exness",
    rank: 1,
    name: "Exness",
    logo: exnessLogo,
    rating: 4.9,
    maxRating: 5,
    keyStrength: "Best Range of Trading Instruments",
    isTrusted: true,
    features: ["Zero Commissions", "Instant Withdrawals", "Unlimited Leverage", "MT4/MT5"],
    minDeposit: "$1",
    maxLeverage: "1:Unlimited",
    regulation: "FCA, FSCA, CySEC",
    tradingPlatforms: ["MT4", "MT5", "Exness Terminal"],
    country: "Cyprus",
    bonuses: true,
    investorProtection: "Up to €20,000",
  },
  {
    id: "fxpro",
    rank: 2,
    name: "FxPro",
    logo: fxproLogo,
    rating: 4.7,
    maxRating: 5,
    keyStrength: "Best For App Trading",
    isTrusted: true,
    features: ["Award-Winning Support", "Advanced Platforms", "DMA Access", "Negative Balance Protection"],
    minDeposit: "$100",
    maxLeverage: "1:500",
    regulation: "FCA, CySEC, FSCA, SCB",
    tradingPlatforms: ["MT4", "MT5", "cTrader", "FxPro Edge"],
    country: "Cyprus",
    bonuses: false,
    investorProtection: "Up to €20,000",
  },
  {
    id: "icmarkets",
    rank: 3,
    name: "IC Markets",
    logo: icmarketsLogo,
    rating: 4.6,
    maxRating: 5,
    keyStrength: "Best For Tight Spreads",
    isTrusted: true,
    features: ["Raw Spreads", "Fast Execution", "ECN Trading", "Advanced Tools"],
    minDeposit: "$200",
    maxLeverage: "1:500",
    regulation: "ASIC, FSA, CySEC",
    tradingPlatforms: ["MT4", "MT5", "cTrader"],
    country: "Australia",
    bonuses: false,
    investorProtection: "Up to $1M AUD",
  },
  {
    id: "xm",
    rank: 4,
    name: "XM",
    logo: exnessLogo, // Using placeholder
    rating: 4.7,
    maxRating: 5,
    keyStrength: "Best For Low Trading Costs",
    isTrusted: true,
    features: ["No Deposit Fees", "Educational Resources", "Multiple Account Types", "24/7 Support"],
    minDeposit: "$5",
    maxLeverage: "1:888",
    regulation: "FCA, ASIC, CySEC",
    tradingPlatforms: ["MT4", "MT5"],
    country: "Cyprus",
    bonuses: true,
    investorProtection: "Up to €20,000",
  },
  {
    id: "purime",
    rank: 5,
    name: "PU Prime",
    logo: fxproLogo, // Using placeholder
    rating: 4.6,
    maxRating: 5,
    keyStrength: "Investor Protection",
    isTrusted: true,
    features: ["100% Deposit Insurance", "Segregated Accounts", "Prime Liquidity", "Low Spreads"],
    minDeposit: "$20",
    maxLeverage: "1:1000",
    regulation: "FSA, SVGFSA",
    tradingPlatforms: ["MT4", "MT5"],
    country: "Vanuatu",
    bonuses: false,
    investorProtection: "100% Deposit Matched",
  },
  {
    id: "libertex",
    rank: 6,
    name: "Libertex",
    logo: icmarketsLogo, // Using placeholder
    rating: 4.7,
    maxRating: 5,
    keyStrength: "Very Low Commissions",
    isTrusted: true,
    features: ["Commission-Free CFDs", "Award-Winning Platform", "Educational Academy", "Social Trading"],
    minDeposit: "$100",
    maxLeverage: "1:600",
    regulation: "CySEC, FSC",
    tradingPlatforms: ["Libertex", "MT4", "MT5"],
    country: "Cyprus",
    bonuses: true,
    investorProtection: "Up to €20,000",
  },
  {
    id: "forex-com",
    rank: 7,
    name: "Forex.com",
    logo: exnessLogo, // Using placeholder
    rating: 4.6,
    maxRating: 5,
    keyStrength: "Best Trading Platforms",
    isTrusted: true,
    features: ["Advanced Charting", "Risk Management Tools", "Market Research", "API Trading"],
    minDeposit: "$100",
    maxLeverage: "1:400",
    regulation: "CFTC, NFA, FCA, ASIC",
    tradingPlatforms: ["MT4", "TradingView", "Web Platform"],
    country: "USA",
    bonuses: false,
    investorProtection: "SIPC Coverage",
  },
  {
    id: "cityindex",
    rank: 8,
    name: "City Index",
    logo: fxproLogo, // Using placeholder
    rating: 4.6,
    maxRating: 5,
    keyStrength: "Investor Protection",
    isTrusted: true,
    features: ["FSCS Protected", "Advanced Research", "Mobile Trading", "Expert Analysis"],
    minDeposit: "$250",
    maxLeverage: "1:200",
    regulation: "FCA, ASIC",
    tradingPlatforms: ["AT Pro", "MT4", "Mobile Apps"],
    country: "UK",
    bonuses: false,
    investorProtection: "Up to £85,000",
  },
  {
    id: "hycm",
    rank: 9,
    name: "HYCM",
    logo: icmarketsLogo, // Using placeholder
    rating: 4.6,
    maxRating: 5,
    keyStrength: "Best Offer On Diverse Assets",
    isTrusted: true,
    features: ["40+ Years Experience", "Institutional Grade", "Multiple Regulations", "Premium Service"],
    minDeposit: "$100",
    maxLeverage: "1:325",
    regulation: "FCA, DFSA, CMA",
    tradingPlatforms: ["MT4", "MT5", "HY Mobile"],
    country: "UK",
    bonuses: false,
    investorProtection: "Up to £1M",
  },
  {
    id: "nordfx",
    rank: 10,
    name: "NordFX",
    logo: exnessLogo, // Using placeholder
    rating: 4.5,
    maxRating: 5,
    keyStrength: "Best Trading Conditions",
    isTrusted: true,
    features: ["Low Spreads", "Fast Execution", "Multiple Bonuses", "Educational Resources"],
    minDeposit: "$10",
    maxLeverage: "1:1000",
    regulation: "VFSC, FSA",
    tradingPlatforms: ["MT4", "MT5"],
    country: "Vanuatu",
    bonuses: true,
    investorProtection: "Up to $20,000",
  },
];