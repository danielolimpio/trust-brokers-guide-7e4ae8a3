import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { getSeoKeywords } from '@/lib/seoKeywords';
import { stripLang, SUPPORTED_LANGS } from '@/lib/langUtils';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  structuredData?: object;
}

const SITE_URL = "https://brokertrusted.com";

const localeMap: Record<string, string> = {
  en: 'en_US',
  pt: 'pt_BR',
  es: 'es_ES',
};

const hreflangMap: Record<string, string> = {
  en: 'en',
  pt: 'pt-BR',
  es: 'es-ES',
};

export const SEO = ({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = "https://brokertrusted.com/og-image.jpg",
  ogType = "website",
  noindex = false,
  structuredData
}: SEOProps) => {
  const { i18n } = useTranslation();
  const location = useLocation();

  const siteTitle = "BrokerTrusted";
  const defaultDescription = "BrokerTrusted – Verified & Regulated Forex Brokers You Can Trust. Independent reviews of the safest, most trusted forex brokers in 2026.";

  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} – Verified & Regulated Forex Brokers You Can Trust`;
  const metaDescription = description || defaultDescription;

  const pathNoLang = stripLang(location.pathname);
  const currentLang = (i18n.language || 'en') as string;
  const canonicalUrl = canonical || `${SITE_URL}/${currentLang}${pathNoLang === '/' ? '' : pathNoLang}`;

  const expandedKeywords = getSeoKeywords(location.pathname, keywords);

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={expandedKeywords.join(', ')} />
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="language" content={currentLang} />
      <link rel="canonical" href={canonicalUrl} />

      {/* hreflang alternates for i18n SEO */}
      {SUPPORTED_LANGS.map((code) => (
        <link
          key={code}
          rel="alternate"
          hrefLang={hreflangMap[code]}
          href={`${SITE_URL}/${code}${pathNoLang === '/' ? '' : pathNoLang}`}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${SITE_URL}/en${pathNoLang === '/' ? '' : pathNoLang}`}
      />

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content={localeMap[currentLang] || 'en_US'} />
      {SUPPORTED_LANGS.filter((c) => c !== currentLang).map((code) => (
        <meta key={code} property="og:locale:alternate" content={localeMap[code]} />
      ))}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Tags */}
      <meta name="author" content="BrokerTrusted Editorial Team" />
      <meta name="publisher" content="BrokerTrusted" />
      <meta name="copyright" content="© 2026 BrokerTrusted. All rights reserved." />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />

      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};
