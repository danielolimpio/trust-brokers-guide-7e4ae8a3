export const SUPPORTED_LANGS = ["en", "pt", "es"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

export function isLang(v: string | undefined | null): v is Lang {
  return !!v && (SUPPORTED_LANGS as readonly string[]).includes(v);
}

/** Extract language segment from a pathname, defaulting to DEFAULT_LANG. */
export function getLangFromPath(pathname: string): Lang {
  const first = pathname.split("/").filter(Boolean)[0];
  return isLang(first) ? first : DEFAULT_LANG;
}

/** Return pathname without a leading language segment. Always starts with "/". */
export function stripLang(pathname: string): string {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 0 && isLang(parts[0])) parts.shift();
  const rest = parts.join("/");
  return rest ? `/${rest}` : "/";
}

/** Prefix a plain path (e.g. "/about") with a language segment. */
export function withLang(path: string, lang: Lang): string {
  if (!path.startsWith("/")) path = `/${path}`;
  if (path.startsWith("/admin")) return path;
  const stripped = stripLang(path);
  return stripped === "/" ? `/${lang}` : `/${lang}${stripped}`;
}

export function browserPreferredLang(): Lang {
  if (typeof navigator === "undefined") return DEFAULT_LANG;
  const langs = [navigator.language, ...(navigator.languages ?? [])];
  for (const raw of langs) {
    const code = raw.toLowerCase().split("-")[0];
    if (isLang(code)) return code;
  }
  return DEFAULT_LANG;
}
