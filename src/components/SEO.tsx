import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

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
  
  const siteTitle = "BrokerTrusted";
  const defaultDescription = "BrokerTrusted – Verified & Regulated Forex Brokers You Can Trust. Independent reviews of the safest, most trusted forex brokers in 2026.";
  
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} – Verified & Regulated Forex Brokers You Can Trust`;
  const metaDescription = description || defaultDescription;
  const currentUrl = canonical || window.location.href;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />
      <meta name="language" content={i18n.language} />
      <link rel="canonical" href={currentUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content={i18n.language === 'pt' ? 'pt_BR' : i18n.language === 'es' ? 'es_ES' : 'en_US'} />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="author" content="BrokerTrusted Editorial Team" />
      <meta name="publisher" content="BrokerTrusted" />
      <meta name="copyright" content="© 2026 BrokerTrusted. All rights reserved." />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Analytics and Verification Placeholders */}
      <meta name="google-site-verification" content="YOUR_GSC_VERIFICATION_CODE_HERE" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Google Analytics 4 */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA4_MEASUREMENT_ID"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'YOUR_GA4_MEASUREMENT_ID');
        `}
      </script>
    </Helmet>
  );
};