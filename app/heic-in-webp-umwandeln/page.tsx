import { getPageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { AdsSlot } from '@/components/AdsSlot';
import { Converter } from '@/components/Converter';
import { FAQ } from '@/components/FAQ';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = getPageMetadata(
  'HEIC in WEBP umwandeln – Modern & effizient (ohne Upload)',
  'HEIC in WEBP konvertieren – zukunftssicheres Format, 30% kleinere Dateien, 100% lokal im Browser ohne Upload.',
  '/heic-in-webp-umwandeln'
);

// WebApplication JSON-LD for WEBP converter
const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "HEIC in WEBP umwandeln",
  "url": "https://heic-zu-jpg.de/heic-in-webp-umwandeln",
  "description": "Moderner HEIC zu WEBP Konverter - 30% kleinere Dateien, bessere Qualität, 100% lokal im Browser",
  "applicationCategory": "PhotographyApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "featureList": [
    "HEIC zu WEBP konvertieren",
    "30% kleinere Dateien",
    "Moderne Browser-Unterstützung",
    "Lokale Verarbeitung",
    "Stapelverarbeitung"
  ]
};

// Breadcrumb JSON-LD
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://heic-zu-jpg.de"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "HEIC in WEBP umwandeln",
      "item": "https://heic-zu-jpg.de/heic-in-webp-umwandeln"
    }
  ]
};

export default function HEICToWEBPPage() {
  return (
    <>
      <JsonLd json={webApplicationJsonLd} />
      <JsonLd json={breadcrumbJsonLd} />
      
      <div style={{ padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Breadcrumbs />
          
          {/* Hero Section */}
          <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              color: '#28a745'
            }}>
              HEIC in WEBP umwandeln
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#6c757d', 
              maxWidth: '800px', 
              margin: '0 auto 2rem'
            }}>
              Konvertieren Sie HEIC-Dateien in das moderne WEBP-Format. 
              30% kleinere Dateien bei besserer Qualität - 100% lokal ohne Upload.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
              <div style={{ 
                padding: '0.5rem 1rem',
                backgroundColor: '#d4edda',
                color: '#155724',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                ✅ Modernes Format
              </div>
              <div style={{ 
                padding: '0.5rem 1rem',
                backgroundColor: '#d1ecf1',
                color: '#0c5460',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                📱 Browser-Unterstützung
              </div>
              <div style={{ 
                padding: '0.5rem 1rem',
                backgroundColor: '#fff3cd',
                color: '#856404',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                💾 30% kleiner
              </div>
            </div>
          </section>

          <AdsSlot slotId="webp-converter-top" height={250} />

          {/* Converter Tool */}
          <section style={{ marginBottom: '4rem' }}>
            <Converter />
          </section>

          {/* WEBP Advantages */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '2rem',
              textAlign: 'center',
              color: '#28a745'
            }}>
              Warum WEBP?
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem'
            }}>
              <div style={{ 
                padding: '2rem', 
                backgroundColor: '#d4edda', 
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#155724', marginBottom: '1rem', fontSize: '1.5rem' }}>
                  📊 Bessere Komprimierung
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
                  WEBP-Dateien sind 25-35% kleiner als vergleichbare JPG-Dateien 
                  bei gleicher oder besserer Bildqualität.
                </p>
              </div>
              
              <div style={{ 
                padding: '2rem', 
                backgroundColor: '#d1ecf1', 
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#0c5460', marginBottom: '1rem', fontSize: '1.5rem' }}>
                  🌐 Weite Browser-Unterstützung
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
                  Unterstützt von Chrome, Firefox, Safari, Edge und modernen 
                  mobilen Browsern (95%+ aller Nutzer).
                </p>
              </div>
              
              <div style={{ 
                padding: '2rem', 
                backgroundColor: '#e8f4fd', 
                borderRadius: '12px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#007bff', marginBottom: '1rem', fontSize: '1.5rem' }}>
                  🎨 Erweiterte Features
                </h3>
                <p style={{ fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
                  Unterstützt Transparenz (wie PNG) und Animation, 
                  bei deutlich kleineren Dateigrößen.
                </p>
              </div>
            </div>
          </section>

          <AdsSlot slotId="webp-converter-middle" height={280} />

          {/* Browser Support */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              Browser-Kompatibilität
            </h2>
            
            <div style={{
              padding: '2rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #dee2e6'
            }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '1rem'
              }}>
                <div style={{ textAlign: 'center', padding: '1rem' }}>
                  <h4 style={{ color: '#28a745', marginBottom: '0.5rem' }}>✅ Chrome</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>Version 23+</p>
                </div>
                <div style={{ textAlign: 'center', padding: '1rem' }}>
                  <h4 style={{ color: '#28a745', marginBottom: '0.5rem' }}>✅ Firefox</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>Version 65+</p>
                </div>
                <div style={{ textAlign: 'center', padding: '1rem' }}>
                  <h4 style={{ color: '#28a745', marginBottom: '0.5rem' }}>✅ Safari</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>Version 14+</p>
                </div>
                <div style={{ textAlign: 'center', padding: '1rem' }}>
                  <h4 style={{ color: '#28a745', marginBottom: '0.5rem' }}>✅ Edge</h4>
                  <p style={{ margin: 0, fontSize: '0.9rem' }}>Version 18+</p>
                </div>
              </div>
              
              <div style={{ 
                textAlign: 'center', 
                marginTop: '1.5rem',
                padding: '1rem',
                backgroundColor: '#d4edda',
                borderRadius: '6px'
              }}>
                <strong style={{ color: '#155724' }}>
                  📊 Gesamt-Unterstützung: 95%+ aller Internetnutzer
                </strong>
              </div>
            </div>
          </section>

          {/* Comparison Table */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              WEBP vs. andere Formate
            </h2>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ 
                width: '100%',
                borderCollapse: 'collapse',
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Format</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Dateigröße</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Qualität</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Transparenz</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Browser-Support</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #dee2e6' }}>
                    <td style={{ padding: '1rem', fontWeight: 'bold', color: '#28a745' }}>WEBP</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Klein ✅</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Hoch ✅</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Ja ✅</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>95% ✅</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #dee2e6', backgroundColor: '#f8f9fa' }}>
                    <td style={{ padding: '1rem', fontWeight: 'bold' }}>JPG</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#ffc107' }}>Mittel ⚠️</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Gut ✅</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#dc3545' }}>Nein ❌</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>100% ✅</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '1rem', fontWeight: 'bold' }}>PNG</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#dc3545' }}>Groß ❌</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Perfekt ✅</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>Ja ✅</td>
                    <td style={{ padding: '1rem', textAlign: 'center', color: '#28a745' }}>100% ✅</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* CTA Section */}
          <section style={{ 
            textAlign: 'center', 
            padding: '3rem 2rem',
            backgroundColor: '#28a745',
            borderRadius: '12px',
            color: 'white',
            marginBottom: '3rem'
          }}>
            <h2 style={{ 
              fontSize: '2rem', 
              marginBottom: '1rem',
              color: 'white'
            }}>
              Bereit für das WEBP-Format?
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              Konvertieren Sie Ihre HEIC-Dateien jetzt in das moderne WEBP-Format.
            </p>
            <a 
              href="#converter"
              style={{ 
                display: 'inline-block',
                padding: '1rem 2rem',
                backgroundColor: 'white',
                color: '#28a745',
                textDecoration: 'none',
                borderRadius: '6px',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}
            >
              Jetzt umwandeln
            </a>
          </section>

          <AdsSlot slotId="webp-converter-bottom" height={280} />

          {/* More Formats */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Andere Formate
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1rem'
            }}>
              <a 
                href="/" 
                style={{ 
                  padding: '1.5rem',
                  backgroundColor: '#007bff',
                  color: 'white',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  display: 'block'
                }}
              >
                <strong>HEIC zu JPG</strong><br />
                <small style={{ opacity: 0.9 }}>Standard-Format</small>
              </a>
              <a 
                href="/heic-in-png-umwandeln" 
                style={{ 
                  padding: '1.5rem',
                  backgroundColor: '#ffc107',
                  color: '#212529',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  textAlign: 'center',
                  display: 'block'
                }}
              >
                <strong>HEIC zu PNG</strong><br />
                <small style={{ opacity: 0.8 }}>Verlustfreie Qualität</small>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 