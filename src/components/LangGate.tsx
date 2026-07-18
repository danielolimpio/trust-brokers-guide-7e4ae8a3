import { ReactNode, useEffect } from "react";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { isLang, DEFAULT_LANG } from "@/lib/langUtils";

/**
 * Validates the :lang segment. If invalid, redirect to /{DEFAULT_LANG}{restOfPath}.
 * If valid, sync i18next language, set <html lang>, then render children.
 */
export function LangGate({ children }: { children: ReactNode }) {
  const { lang } = useParams();
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (isLang(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    if (isLang(lang)) {
      const htmlLang = lang === "pt" ? "pt-BR" : lang === "es" ? "es-ES" : "en-US";
      document.documentElement.lang = htmlLang;
    }
  }, [lang, i18n]);

  if (!isLang(lang)) {
    // Redirect /xx/foo -> /en/xx/foo (rare) or /whatever -> /en/whatever
    const target = `/${DEFAULT_LANG}${location.pathname}${location.search}${location.hash}`;
    return <Navigate to={target} replace />;
  }

  return <>{children}</>;
}
