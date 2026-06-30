import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import prerender from "@prerenderer/rollup-plugin";

// Routes to pre-render as static HTML (improves SEO / indexability).
// Dynamic routes (e.g. /broker/:brokerId) and admin routes are intentionally excluded.
const PRERENDER_ROUTES = [
  "/",
  "/about",
  "/brokers",
  "/news",
  "/blog",
  "/blog/como-escolher-corretora-forex-confiavel-2026",
  "/blog/spread-forex-custos-comparar-corretoras-2026",
  "/contact",
  "/best-forex-brokers",
  "/top-regulated-brokers",
  "/best-spreads",
  "/highest-leverage",
  "/best-bonuses",
  "/new-brokers",
  "/best-for-beginners",
  "/best-for-professionals",
  "/best-mobile-apps",
  "/ecn-brokers",
  "/stp-brokers",
  "/market-makers",
  "/broker-reviews",
  "/trading-guides",
  "/market-analysis",
  "/reviews",
  "/guides",
  "/analysis",
  "/education",
  "/team",
  "/methodology",
  "/careers",
  "/press",
  "/privacy",
  "/terms",
  "/cookies",
  "/disclaimer",
  "/risk-warning",
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // Only pre-render in production builds to keep dev fast and stable.
    mode === "production" &&
      prerender({
        routes: PRERENDER_ROUTES,
        renderer: "@prerenderer/renderer-puppeteer",
        rendererOptions: {
          maxConcurrentRoutes: 4,
          renderAfterTime: 2000,
          headless: true,
          launchOptions: {
            args: ["--no-sandbox", "--disable-setuid-sandbox"],
          },
        },
        postProcess(renderedRoute: { route: string; html: string }) {
          renderedRoute.html = renderedRoute.html.replace(/<base[^>]*>/i, "");
        },
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
