import { getPageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { AdsSlot } from '@/components/AdsSlot';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = getPageMetadata(
  'Was ist HEIC? Vorteile, Nachteile & Kompatibilität',
  'HEIC/HEIF erklärt: Was steckt dahinter, welche Vorteile/Nachteile gibt es und wann lohnt sich die Umwandlung in JPG/PNG/WEBP?',
  '/was-ist-heic'
);

export default function WasIstHEICPage() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <Breadcrumbs />
        
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#007bff'
          }}>
            Was ist HEIC?
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#6c757d', 
            maxWidth: '700px', 
            margin: '0 auto 2rem'
          }}>
            Alles über das moderne Bildformat von Apple: Entstehung, Funktionsweise, 
            Vor- und Nachteile im Überblick.
          </p>
          <a 
            href="/" 
            style={{ 
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              backgroundColor: '#007bff',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold'
            }}
          >
            HEIC jetzt umwandeln
          </a>
        </header>

        <AdsSlot slotId="heic-guide-top" height={250} />

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#007bff' }}>
            Definition: HEIC und HEIF
          </h2>
          <div style={{ 
            padding: '2rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            border: '1px solid #dee2e6',
            marginBottom: '2rem'
          }}>
            <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>HEIC (High Efficiency Image Container)</h3>
            <p style={{ marginBottom: '1rem' }}>
              HEIC ist ein Dateiformat für Bilder, das von Apple seit iOS 11 (2017) als Standard 
              verwendet wird. Es basiert auf dem HEIF-Standard und bietet deutlich bessere 
              Komprimierung als das traditionelle JPG-Format.
            </p>
            
            <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>HEIF (High Efficiency Image Format)</h3>
            <p style={{ margin: 0 }}>
              HEIF ist der zugrundeliegende internationale Standard (ISO/IEC 23008-12), 
              entwickelt von der Moving Picture Experts Group (MPEG). HEIC ist Apples 
              Implementierung dieses Standards.
            </p>
          </div>
        </section>

        <AdsSlot slotId="heic-guide-middle" height={280} />

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#007bff' }}>
            Vorteile von HEIC
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem'
          }}>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#d4edda', 
              borderRadius: '8px',
              border: '1px solid #28a745'
            }}>
              <h3 style={{ color: '#155724', marginBottom: '1rem' }}>💾 Kleinere Dateigröße</h3>
              <p style={{ margin: 0 }}>
                HEIC-Dateien sind bei gleicher Bildqualität etwa 50% kleiner als JPG-Dateien. 
                Das spart Speicherplatz und Bandbreite beim Teilen.
              </p>
            </div>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#d1ecf1', 
              borderRadius: '8px',
              border: '1px solid #17a2b8'
            }}>
              <h3 style={{ color: '#0c5460', marginBottom: '1rem' }}>🎨 Bessere Bildqualität</h3>
              <p style={{ margin: 0 }}>
                Unterstützung für 16-Bit-Farbtiefe (statt 8-Bit bei JPG), erweiterte Farbräume 
                und bessere Komprimierungsalgorithmen.
              </p>
            </div>
          </div>
        </section>

        <AdsSlot slotId="heic-guide-bottom" height={280} />

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#007bff' }}>
            Wann HEIC umwandeln?
          </h2>
          <div style={{ 
            padding: '2rem',
            backgroundColor: '#e8f4fd',
            borderRadius: '8px',
            border: '1px solid #007bff'
          }}>
            <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>Empfohlene Konvertierung zu JPG:</h3>
            <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              <li>📧 E-Mail-Versand an Nicht-Apple-Nutzer</li>
              <li>🌐 Upload auf Websites oder Social Media</li>
              <li>💼 Berufliche Nutzung (Bewerbungen, Präsentationen)</li>
              <li>🖨️ Drucken in Fotolaboren oder Copyshops</li>
              <li>💻 Bearbeitung in Software ohne HEIC-Support</li>
              <li>📱 Teilen mit Android-Nutzern</li>
            </ul>
            
            <div style={{ textAlign: 'center' }}>
              <a 
                href="/" 
                style={{ 
                  display: 'inline-block',
                  padding: '1rem 2rem',
                  backgroundColor: '#007bff',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}
              >
                HEIC jetzt kostenlos umwandeln
              </a>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            Mehr zum Thema HEIC
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1rem'
          }}>
            <a 
              href="/heic-vs-jpg" 
              style={{ 
                padding: '1.5rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#333',
                border: '1px solid #dee2e6',
                textAlign: 'center',
                display: 'block'
              }}
            >
              <strong>HEIC vs JPG</strong><br />
              <small style={{ color: '#6c757d' }}>Direkter Vergleich</small>
            </a>
            <a 
              href="/anleitung/iphone-heic-zu-jpg" 
              style={{ 
                padding: '1.5rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#333',
                border: '1px solid #dee2e6',
                textAlign: 'center',
                display: 'block'
              }}
            >
              <strong>iPhone Anleitung</strong><br />
              <small style={{ color: '#6c757d' }}>HEIC zu JPG auf iOS</small>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
} 