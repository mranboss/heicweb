declare global {
  interface Window {
    adsbygoogle: any[];
    gtag: any;
    dataLayer: any[];
  }
}

// AdSense configuration - replace with your actual publisher ID
export const ADSENSE_CLIENT_ID = 'pub-9540832620603421';

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
    
    if (preferences.analytics) {
      window.gtag('event', 'page_view');
    }
    
    if (preferences.marketing) {
      initializeAdSense();
    }
  }
}