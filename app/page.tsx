import { Converter } from '@/components/Converter';
import { AdsSlot } from '@/components/AdsSlot';
import { FAQ } from '@/components/FAQ';
import { JsonLd } from '@/components/JsonLd';

// JSON-LD for WebApplication
const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "HEIC in JPG umwandeln",
  "url": "https://heic-zu-jpg.de",
  "description": "Kostenloser Online-Konverter für HEIC zu JPG/PNG/WEBP - 100% lokal im Browser",
  "applicationCategory": "PhotographyApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "featureList": [
    "HEIC zu JPG konvertieren",
    "HEIC zu PNG konvertieren", 
    "HEIC zu WEBP konvertieren",
    "Stapelverarbeitung",
    "Lokale Verarbeitung ohne Upload",
    "Qualitätseinstellungen",
    "EXIF-Daten entfernen"
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
      "name": "HEIC in JPG umwandeln",
      "item": "https://heic-zu-jpg.de"
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <JsonLd json={webApplicationJsonLd} />
      <JsonLd json={breadcrumbJsonLd} />
      
      <div style={{ padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Hero Section */}
          <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              color: '#007bff'
            }}>
              HEIC in JPG umwandeln
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#6c757d', 
              maxWidth: '800px', 
              margin: '0 auto 2rem'
            }}>
              Kostenlos, schnell und sicher – die Umwandlung erfolgt vollständig lokal in Ihrem Browser. 
              Keine Uploads, Ihre Bilder verlassen Ihr Gerät nicht.
            </p>
          </section>

          {/* Converter */}
          <section style={{ marginBottom: '3rem' }}>
            <Converter />
          </section>

          {/* Why this tool */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Warum dieses Tool?
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '2rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>🔒 Datenschutz</h3>
                <p>Keine Uploads – Verarbeitung lokal im Browser</p>
              </div>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>⚡ Qualität</h3>
                <p>Hohe Bildqualität, Qualitätsstufe einstellbar</p>
              </div>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>📦 Effizienz</h3>
                <p>Stapelverarbeitung ohne Begrenzung</p>
              </div>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>🎛️ Kontrolle</h3>
                <p>EXIF-Daten beibehalten oder entfernen</p>
              </div>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#f8f9fa', 
                borderRadius: '8px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>💻 Kompatibilität</h3>
                <p>Funktioniert auf Windows, macOS, iOS und Android</p>
              </div>
            </div>
          </section>

          {/* Ad Slot 1 - High Priority (after converter) */}
          <AdsSlot slotId="content-top" height={250} priority="high" />

          {/* How it works */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              So funktioniert es
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '1.5rem',
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px'
              }}>
                <div style={{ 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  borderRadius: '50%', 
                  width: '40px', 
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  marginRight: '1rem',
                  flexShrink: 0
                }}>
                  1
                </div>
                <p style={{ margin: 0 }}>HEIC-Dateien auswählen oder per Drag & Drop hinzufügen</p>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '1.5rem',
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px'
              }}>
                <div style={{ 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  borderRadius: '50%', 
                  width: '40px', 
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  marginRight: '1rem',
                  flexShrink: 0
                }}>
                  2
                </div>
                <p style={{ margin: 0 }}>Ausgabeformat und Qualität festlegen</p>
              </div>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '1.5rem',
                padding: '1rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px'
              }}>
                <div style={{ 
                  backgroundColor: '#007bff', 
                  color: 'white', 
                  borderRadius: '50%', 
                  width: '40px', 
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  marginRight: '1rem',
                  flexShrink: 0
                }}>
                  3
                </div>
                <p style={{ margin: 0 }}>Umwandeln und als ZIP oder einzeln herunterladen</p>
              </div>
            </div>
          </section>

          {/* Security & Privacy */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Sicherheit & Datenschutz
            </h2>
            <div style={{ 
              maxWidth: '800px', 
              margin: '0 auto',
              padding: '2rem',
              backgroundColor: '#e8f4fd',
              borderRadius: '8px',
              border: '1px solid #007bff'
            }}>
              <p style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                Die Konvertierung erfolgt vollständig lokal. Es werden keine Bilddateien an Server übertragen oder gespeichert.
              </p>
              <p style={{ margin: 0 }}>
                Für anonyme Nutzungsstatistiken und (sofern gewünscht) Werbung verwenden wir ein Einwilligungsbanner (CMP) 
                im Einklang mit der DSGVO.
              </p>
            </div>
          </section>

          {/* Use Cases */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Häufige Anwendungsfälle
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <ul style={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                <li>Bilder für E-Mail, Bewerbungen, Druck oder ältere Programme kompatibel machen</li>
                <li>Große HEIC-Sammlungen schnell in JPG umwandeln</li>
                <li>EXIF-Daten vor dem Teilen entfernen</li>
              </ul>
            </div>
          </section>

          {/* More Formats */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Mehr Formate
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '1.5rem',
              maxWidth: '800px',
              margin: '0 auto'
            }}>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#fff3cd', 
                borderRadius: '8px',
                border: '1px solid #ffc107',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#856404', marginBottom: '1rem' }}>PNG Format</h3>
                <p style={{ marginBottom: '1rem' }}>Verlustarm, ideal für Transparenzen</p>
                <a 
                  href="/heic-in-png-umwandeln" 
                  style={{ 
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#ffc107',
                    color: '#856404',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: 'bold'
                  }}
                >
                  HEIC in PNG umwandeln
                </a>
              </div>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#d1ecf1', 
                borderRadius: '8px',
                border: '1px solid #17a2b8',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#0c5460', marginBottom: '1rem' }}>WEBP Format</h3>
                <p style={{ marginBottom: '1rem' }}>Moderne, effiziente Komprimierung</p>
                <a 
                  href="/heic-in-webp-umwandeln" 
                  style={{ 
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    backgroundColor: '#17a2b8',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: 'bold'
                  }}
                >
                  HEIC in WEBP umwandeln
                </a>
              </div>
            </div>
          </section>

          {/* SEO Text */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              HEIC zu JPG Konverter - Professionell und sicher
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.8 }}>
              <p>
                HEIC ist das Standardformat vieler Apple-Geräte und bietet eine effiziente Komprimierung bei hoher Bildqualität. 
                Für die Weitergabe, das Drucken oder die Nutzung in älteren Programmen wird jedoch oft JPG benötigt. 
                Mit diesem kostenlosen Online-Konverter wandeln Sie HEIC zu JPG direkt im Browser um – sicher, schnell und ohne Upload.
              </p>
              <p>
                Ihre Bilder bleiben auf Ihrem Gerät, sensible Inhalte werden weder übertragen noch gespeichert. 
                Sie können mehrere Dateien auf einmal konvertieren, die Qualität anpassen und auf Wunsch EXIF-Daten entfernen. 
                Ideal für den schnellen Workflow im Alltag – auf Windows, macOS und Mobilgeräten.
              </p>
            </div>
          </section>

          {/* Ad Slot 2 - Medium Priority (middle content) */}
          <AdsSlot slotId="content-middle" height={280} priority="medium" />

          {/* FAQ Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Häufig gestellte Fragen
            </h2>
            <FAQ />
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <a 
                href="/faq" 
                style={{ 
                  color: '#007bff', 
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 'bold'
                }}
              >
                Alle FAQ anzeigen →
              </a>
            </div>
          </section>

          {/* Related Links */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Hilfe & Anleitungen
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1rem',
              maxWidth: '1000px',
              margin: '0 auto'
            }}>
              <a 
                href="/anleitung/iphone-heic-zu-jpg" 
                style={{ 
                  padding: '1rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#333',
                  border: '1px solid #dee2e6',
                  textAlign: 'center',
                  display: 'block'
                }}
              >
                <strong>iPhone HEIC zu JPG</strong><br />
                <small style={{ color: '#6c757d' }}>Anleitung für iOS</small>
              </a>
              <a 
                href="/anleitung/windows-heic-zu-jpg" 
                style={{ 
                  padding: '1rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#333',
                  border: '1px solid #dee2e6',
                  textAlign: 'center',
                  display: 'block'
                }}
              >
                <strong>Windows HEIC zu JPG</strong><br />
                <small style={{ color: '#6c757d' }}>Anleitung für Windows</small>
              </a>
              <a 
                href="/anleitung/mac-heic-zu-jpg" 
                style={{ 
                  padding: '1rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#333',
                  border: '1px solid #dee2e6',
                  textAlign: 'center',
                  display: 'block'
                }}
              >
                <strong>Mac HEIC zu JPG</strong><br />
                <small style={{ color: '#6c757d' }}>Anleitung für macOS</small>
              </a>
              <a 
                href="/was-ist-heic" 
                style={{ 
                  padding: '1rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#333',
                  border: '1px solid #dee2e6',
                  textAlign: 'center',
                  display: 'block'
                }}
              >
                <strong>Was ist HEIC?</strong><br />
                <small style={{ color: '#6c757d' }}>Format erklärt</small>
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 