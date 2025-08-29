declare global {
  interface Window {
    adsbygoogle: any[];
    gtag: any;
    dataLayer: any[];
  }
}

// AdSense configuration - replace with your actual publisher ID
export const ADSENSE_CLIENT_ID = 'pub-XXXXXXXXXXXXXXXX';

export function initializeAdSense() {
  if (typeof window !== 'undefined' && !window.adsbygoogle) {
    window.adsbygoogle = window.adsbygoogle || [];
    
    // Create AdSense script with proper consent mode
    const script = document.createElement('script');
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-${ADSENSE_CLIENT_ID}`;
    script.async = true;
    script.crossOrigin = 'anonymous';
    
    // Add data-ad-frequency-hint for better German compliance
    script.setAttribute('data-ad-frequency-hint', '30s');
    
    document.head.appendChild(script);
  }
}

export function initializeGoogleAnalytics() {
  if (typeof window !== 'undefined') {
    // Only initialize if GA4_ID is configured
    const GA4_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 Measurement ID
    
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
    script.async = true;
    document.head.appendChild(script);
    
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function() {
      window.dataLayer.push(arguments);
    };
    
    window.gtag('config', GA4_ID, {
      // IP anonymization for GDPR compliance
      'anonymize_ip': true,
      // Disable advertising features by default
      'allow_google_signals': false,
      'allow_ad_personalization_signals': false
    });
  }
}

export function updateConsentState(preferences: {
  analytics: boolean;
  marketing: boolean;
}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': preferences.analytics ? 'granted' : 'denied',
      'ad_storage': preferences.marketing ? 'granted' : 'denied',
      'ad_user_data': preferences.marketing ? 'granted' : 'denied',
      'ad_personalization': preferences.marketing ? 'granted' : 'denied'
    });
    
    // Initialize services based on consent
    if (preferences.analytics) {
      initializeGoogleAnalytics();
    }
    
    if (preferences.marketing) {
      initializeAdSense();
    }
  }
}

// German-specific AdSense configuration
export function configureGermanAdSense() {
  if (typeof window !== 'undefined' && window.adsbygoogle) {
    // Configure for German market with standard AdSense settings
    window.adsbygoogle.push({
      google_ad_client: ADSENSE_CLIENT_ID,
      enable_page_level_ads: true
    });
  }
} 