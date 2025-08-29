import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { CookieBanner } from '@/components/CookieBanner';
import { SimpleNavigation } from '@/components/SimpleNavigation';

export const metadata: Metadata = getPageMetadata(
  'HEIC in JPG umwandeln – Kostenlos, schnell, sicher (ohne Upload)',
  'Konvertieren Sie HEIC zu JPG online. 100% lokal im Browser – keine Datei-Uploads, kostenlos, hohe Qualität, Stapelverarbeitung.'
);

// Global JSON-LD for Organization and Website
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "HEIC zu JPG Konverter",
  "url": "https://heic-zu-jpg.de",
  "logo": "https://heic-zu-jpg.de/logo.png",
  "description": "Kostenloser Online-Konverter für HEIC zu JPG/PNG/WEBP",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "url": "https://heic-zu-jpg.de/impressum"
  }
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "HEIC zu JPG Konverter",
  "url": "https://heic-zu-jpg.de",
  "description": "Konvertieren Sie HEIC-Dateien kostenlos zu JPG, PNG oder WEBP",
  "inLanguage": "de-DE",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://heic-zu-jpg.de/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <JsonLd json={organizationJsonLd} />
        <JsonLd json={websiteJsonLd} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Google Consent Mode v2 - Initialize BEFORE any Google tags */}
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Set default consent state (required before any Google tags)
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied', 
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'granted',
              'personalization_storage': 'denied',
              'security_storage': 'granted'
            });
            
            // Set ads data redaction
            gtag('set', 'ads_data_redaction', true);
            gtag('set', 'url_passthrough', false);
          `
        }} />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        lineHeight: 1.6,
        color: '#333'
      }}>
        <SimpleNavigation />
        
        <main style={{ minHeight: 'calc(100vh - 140px)' }}>
          {children}
        </main>
        
        <footer style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '2rem 0',
          marginTop: '3rem',
          textAlign: 'center',
          borderTop: '1px solid #dee2e6'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <nav style={{ marginBottom: '1rem' }}>
              <a href="/impressum" style={{ 
                color: '#007bff', 
                textDecoration: 'none', 
                margin: '0 1rem',
                fontSize: '0.9rem'
              }}>
                Impressum
              </a>
              <a href="/datenschutz" style={{ 
                color: '#007bff', 
                textDecoration: 'none', 
                margin: '0 1rem',
                fontSize: '0.9rem'
              }}>
                Datenschutz
              </a>
            </nav>
            <p style={{ 
              fontSize: '0.85rem', 
              color: '#6c757d',
              margin: 0
            }}>
              © 2024 HEIC zu JPG Konverter. Alle Rechte vorbehalten.
            </p>
          </div>
        </footer>
        
        {/* GDPR Cookie Banner */}
        <CookieBanner />
      </body>
    </html>
  );
} 