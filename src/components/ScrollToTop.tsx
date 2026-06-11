import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls the window to the top on every route change.
 * Mounted once inside <BrowserRouter> so it applies to ALL pages,
 * articles, categories, broker pages, etc.
 */
export function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // Use 'auto' to avoid jarring animation; behaves like a fresh page load.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, search]);

  return null;
}

export default ScrollToTop;
