import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getLangFromPath, isLang, withLang } from "@/lib/langUtils";

/**
 * Global click handler: any internal <a href="/..."> that doesn't already
 * carry a language prefix is rewritten to include the current language.
 * This lets us keep <Link to="/about"> in components untouched while all
 * navigation preserves /:lang.
 */
export function GlobalLinkInterceptor() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const lang = getLangFromPath(location.pathname);

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/")) return;
      if (href.startsWith("//")) return;
      if (href.startsWith("/admin")) return;

      const firstSeg = href.split("/").filter(Boolean)[0];
      if (isLang(firstSeg)) return; // already language-prefixed

      const next = withLang(href, lang);
      if (next === href) return;
      e.preventDefault();
      navigate(next);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [location.pathname, navigate]);

  return null;
}
