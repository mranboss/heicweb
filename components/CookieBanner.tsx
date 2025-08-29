'use client';

import { useState, useEffect } from 'react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      // Load existing preferences
      try {
        const savedPrefs = JSON.parse(localStorage.getItem('cookie-preferences') || '{}');
        setPreferences(prev => ({ ...prev, ...savedPrefs }));
        updateGoogleConsent(savedPrefs);
      } catch (error) {
        console.error('Error loading cookie preferences:', error);
      }
    }
  }, []);

  const updateGoogleConsent = (prefs: Partial<CookiePreferences>) => {
    // Use the centralized consent update function
    import('@/lib/adsense').then(({ updateConsentState }) => {
      updateConsentState({
        analytics: prefs.analytics || false,
        marketing: prefs.marketing || false
      });
    });
  };

  const handleAcceptAll = () => {
    const allPrefs = { necessary: true, analytics: true, marketing: true };
    saveConsent(allPrefs);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = { necessary: true, analytics: false, marketing: false };
    saveConsent(necessaryOnly);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', 'accepted');
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs));
    setPreferences(prefs);
    updateGoogleConsent(prefs);
    setShowBanner(false);
    
    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('consentUpdate'));
  };

  const handlePreferenceChange = (key: keyof CookiePreferences, value: boolean) => {
    if (key === 'necessary') return; // Necessary cookies cannot be disabled
    setPreferences(prev => ({ ...prev, [key]: value }));
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      boxShadow: '0 -4px 12px rgba(0,0,0,0.15)',
      borderTop: '3px solid #007bff',
      zIndex: 9999,
      padding: '1.5rem',
      maxHeight: '80vh',
      overflowY: 'auto',
      paddingBottom: 'max(1.5rem, env(safe-area-inset-bottom, 1.5rem))',
      paddingLeft: 'max(1.5rem, env(safe-area-inset-left, 1.5rem))',
      paddingRight: 'max(1.5rem, env(safe-area-inset-right, 1.5rem))'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {!showDetails ? (
          // Simple banner view
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <h3 style={{ 
                fontSize: '1.2rem', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                color: '#007bff'
              }}>
                🍪 Cookie-Einstellungen
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                lineHeight: 1.5, 
                margin: 0,
                color: '#333'
              }}>
                Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung zu bieten. 
                <strong> Für den HEIC-Konverter sind keine Cookies erforderlich</strong> - 
                alle Verarbeitung erfolgt lokal in Ihrem Browser. 
                Cookies werden nur für anonyme Statistiken und (falls gewünscht) Werbung verwendet.
              </p>
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '0.75rem', 
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
              <button
                onClick={handleAcceptAll}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Alle akzeptieren
              </button>
              
              <button
                onClick={handleAcceptNecessary}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Nur notwendige
              </button>
              
              <button
                onClick={() => setShowDetails(true)}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'transparent',
                  color: '#007bff',
                  border: '2px solid #007bff',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                Einstellungen
              </button>
            </div>
          </div>
        ) : (
          // Detailed preferences view
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: 'bold', 
                marginBottom: '0.5rem',
                color: '#007bff'
              }}>
                Cookie-Präferenzen
              </h3>
              <p style={{ 
                fontSize: '0.95rem', 
                lineHeight: 1.5, 
                margin: 0,
                color: '#333'
              }}>
                Wählen Sie, welche Cookies Sie zulassen möchten. Sie können Ihre Einstellungen jederzeit ändern.
              </p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              {/* Necessary Cookies */}
              <div style={{ 
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '6px',
                marginBottom: '1rem',
                border: '1px solid #dee2e6'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>
                    Notwendige Cookies
                  </h4>
                  <div style={{
                    padding: '0.25rem 0.75rem',
                    backgroundColor: '#28a745',
                    color: 'white',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold'
                  }}>
                    Immer aktiv
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', margin: 0, color: '#6c757d' }}>
                  Grundlegende Website-Funktionen. Können nicht deaktiviert werden.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div style={{ 
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '6px',
                marginBottom: '1rem',
                border: '1px solid #dee2e6'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>
                    Analytik-Cookies
                  </h4>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => handlePreferenceChange('analytics', e.target.checked)}
                      style={{ marginRight: '0.5rem' }}
                    />
                    <span style={{ fontSize: '0.9rem' }}>
                      {preferences.analytics ? 'Aktiv' : 'Inaktiv'}
                    </span>
                  </label>
                </div>
                <p style={{ fontSize: '0.85rem', margin: 0, color: '#6c757d' }}>
                  Google Analytics für anonyme Nutzungsstatistiken. Helfen uns, die Website zu verbessern.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div style={{ 
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '6px',
                marginBottom: '1rem',
                border: '1px solid #dee2e6'
              }}>
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '0.5rem'
                }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>
                    Marketing-Cookies
                  </h4>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => handlePreferenceChange('marketing', e.target.checked)}
                      style={{ marginRight: '0.5rem' }}
                    />
                    <span style={{ fontSize: '0.9rem' }}>
                      {preferences.marketing ? 'Aktiv' : 'Inaktiv'}
                    </span>
                  </label>
                </div>
                <p style={{ fontSize: '0.85rem', margin: 0, color: '#6c757d' }}>
                  Google AdSense für relevante Werbung. Unterstützen den kostenlosen Service.
                </p>
              </div>
            </div>

            <div style={{ 
              display: 'flex', 
              gap: '0.75rem', 
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <button
                  onClick={handleSavePreferences}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    marginRight: '0.5rem'
                  }}
                >
                  Einstellungen speichern
                </button>
                
                <button
                  onClick={() => setShowDetails(false)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'transparent',
                    color: '#6c757d',
                    border: '1px solid #6c757d',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  Zurück
                </button>
              </div>
              
              <div style={{ fontSize: '0.8rem', color: '#6c757d' }}>
                <a href="/datenschutz" style={{ color: '#007bff', textDecoration: 'none' }}>
                  Datenschutzerklärung
                </a>
                {' • '}
                <a href="/impressum" style={{ color: '#007bff', textDecoration: 'none' }}>
                  Impressum
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 