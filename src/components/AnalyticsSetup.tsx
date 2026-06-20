import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics 4 Configuration
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
    dataLayer: any[];
  }
}

const GA4_MEASUREMENT_ID = 'G-B2F2VJT83K';

export function AnalyticsSetup() {
  const location = useLocation();

  useEffect(() => {
    // Initialize Google Analytics 4
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      function gtag(command: string, targetId: string, config?: any) {
        window.dataLayer.push(arguments);
      }
      window.gtag = window.gtag || gtag;

      window.gtag('config', GA4_MEASUREMENT_ID, {
        send_page_view: false, // We'll handle page views manually
        cookie_flags: 'secure;samesite=none',
      });
    }
  }, []);

  // Track page views
  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA4_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });

      // Send custom page view event
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null; // This component doesn't render anything
}

// Custom tracking functions
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackBrokerView = (brokerName: string, brokerId: string) => {
  trackEvent('view_broker', 'Broker', `${brokerName} (${brokerId})`);
};

export const trackBrokerClick = (brokerName: string, brokerId: string, cta: string) => {
  trackEvent('click_broker_cta', 'Broker', `${brokerName} - ${cta}`, 1);
};

export const trackSearch = (searchTerm: string, results: number) => {
  trackEvent('search', 'Site Search', searchTerm, results);
};

export const trackFilterUse = (filterType: string, filterValue: string) => {
  trackEvent('use_filter', 'Broker Filter', `${filterType}: ${filterValue}`);
};

// Enhanced ecommerce tracking for broker conversions
export const trackBrokerConversion = (brokerName: string, brokerId: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${GA4_MEASUREMENT_ID}/broker_signup`,
      custom_parameters: {
        broker_name: brokerName,
        broker_id: brokerId,
        conversion_value: 1,
      }
    });
  }
};