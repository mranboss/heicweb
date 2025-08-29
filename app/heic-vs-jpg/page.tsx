import { getPageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { AdsSlot } from '@/components/AdsSlot';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = getPageMetadata(
  'HEIC vs JPG – Unterschiede, Qualität & Dateigröße',
  'HEIC vs JPG im Vergleich: Qualität, Größe, Kompatibilität, Transparenz, Metadaten. Praxisnahe Empfehlungen.',
  '/heic-vs-jpg'
);

// Article JSON-LD
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "HEIC vs JPG: Welches Format ist besser?",
  "description": "Detaillierter Vergleich zwischen HEIC und JPG: Vor- und Nachteile, Qualität, Dateigröße und Kompatibilität",
  "image": "https://heic-zu-jpg.de/heic-vs-jpg-comparison.jpg",
  "author": {
    "@type": "Organization",
    "name": "HEIC zu JPG Konverter"
  },
  "publisher": {
    "@type": "Organization",
    "name": "HEIC zu JPG Konverter",
    "logo": {
      "@type": "ImageObject",
      "url": "https://heic-zu-jpg.de/logo.png"
    }
  },
  "datePublished": "2024-01-01",
  "dateModified": "2024-12-01"
};

export default function HEICvsJPGPage() {
  return (
    <>
      <JsonLd json={articleJsonLd} />
      
      <div style={{ padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <Breadcrumbs />
          
          {/* Header */}
          <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              color: '#007bff'
            }}>
              HEIC vs JPG
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#6c757d', 
              maxWidth: '700px', 
              margin: '0 auto 2rem'
            }}>
              Direkter Vergleich: Welches Bildformat ist für welchen Zweck besser geeignet?
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
              HEIC zu JPG umwandeln
            </a>
          </header>

          <AdsSlot slotId="comparison-top" height={250} />

          {/* Quick Comparison */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Schneller Überblick
            </h2>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse',
                backgroundColor: 'white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                borderRadius: '8px',
                overflow: 'hidden'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Eigenschaft</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>HEIC</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>JPG</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>Gewinner</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Dateigröße', '50% kleiner', 'Standard', 'HEIC'],
                    ['Bildqualität', '16-Bit Farbtiefe', '8-Bit Farbtiefe', 'HEIC'],
                    ['Kompatibilität', 'Begrenzt (Apple)', 'Universell', 'JPG'],
                    ['Transparenz', '✅ Unterstützt', '❌ Nicht unterstützt', 'HEIC'],
                    ['Browser-Support', 'Nur Safari', 'Alle Browser', 'JPG'],
                    ['E-Mail/Teilen', 'Problematisch', 'Problemlos', 'JPG'],
                    ['Bearbeitung', 'Wenige Programme', 'Alle Programme', 'JPG'],
                    ['Live Photos', '✅ Unterstützt', '❌ Nicht unterstützt', 'HEIC'],
                    ['Speicherplatz', 'Sehr effizient', 'Standard', 'HEIC'],
                    ['Geschwindigkeit', 'Langsamer', 'Schneller', 'JPG']
                  ].map((row, index) => (
                    <tr key={index} style={{ 
                      borderBottom: '1px solid #dee2e6',
                      backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white'
                    }}>
                      <td style={{ padding: '1rem', fontWeight: 'bold' }}>{row[0]}</td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>{row[1]}</td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>{row[2]}</td>
                      <td style={{ 
                        padding: '1rem', 
                        textAlign: 'center', 
                        fontWeight: 'bold',
                        color: row[3] === 'HEIC' ? '#007bff' : '#28a745'
                      }}>
                        {row[3]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Detailed Comparison */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Detaillierter Vergleich
            </h2>

            {/* File Size */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                📊 Dateigröße & Komprimierung
              </h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '1.5rem'
              }}>
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: '#e8f4fd', 
                  borderRadius: '8px',
                  border: '1px solid #007bff'
                }}>
                  <h4 style={{ color: '#007bff', marginBottom: '1rem' }}>HEIC</h4>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                    <li>50% kleinere Dateien bei gleicher Qualität</li>
                    <li>H.265/HEVC Codec für moderne Komprimierung</li>
                    <li>Beispiel: 10MB JPG → 5MB HEIC</li>
                    <li>Ideal für Speicherplatz-Optimierung</li>
                  </ul>
                </div>
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: '#d4edda', 
                  borderRadius: '8px',
                  border: '1px solid #28a745'
                }}>
                  <h4 style={{ color: '#28a745', marginBottom: '1rem' }}>JPG</h4>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                    <li>Etablierte DCT-Komprimierung seit 1992</li>
                    <li>Größere Dateien, aber bewährt</li>
                    <li>Optimiert für Web-Übertragung</li>
                    <li>Verschiedene Qualitätsstufen wählbar</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Quality */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                🎨 Bildqualität & Farbtiefe
              </h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '1.5rem'
              }}>
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: '#e8f4fd', 
                  borderRadius: '8px',
                  border: '1px solid #007bff'
                }}>
                  <h4 style={{ color: '#007bff', marginBottom: '1rem' }}>HEIC</h4>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                    <li><strong>16-Bit Farbtiefe</strong> (65.536 Farben pro Kanal)</li>
                    <li>Erweiterte Farbräume (P3, Rec. 2020)</li>
                    <li>Bessere Gradation in dunklen Bereichen</li>
                    <li>Weniger Komprimierungsartefakte</li>
                  </ul>
                </div>
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: '#d4edda', 
                  borderRadius: '8px',
                  border: '1px solid #28a745'
                }}>
                  <h4 style={{ color: '#28a745', marginBottom: '1rem' }}>JPG</h4>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                    <li><strong>8-Bit Farbtiefe</strong> (256 Farben pro Kanal)</li>
                    <li>sRGB Farbraum (Standard)</li>
                    <li>Ausreichend für meiste Anwendungen</li>
                    <li>Sichtbare Artefakte bei starker Komprimierung</li>
                  </ul>
                </div>
              </div>
            </div>

            <AdsSlot slotId="comparison-middle" height={280} />

            {/* Compatibility */}
            <div style={{ marginBottom: '3rem' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                🌐 Kompatibilität & Support
              </h3>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '1.5rem'
              }}>
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: '#f8d7da', 
                  borderRadius: '8px',
                  border: '1px solid #dc3545'
                }}>
                  <h4 style={{ color: '#dc3545', marginBottom: '1rem' }}>HEIC - Begrenzt</h4>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                    <li>✅ Apple-Geräte (iOS 11+, macOS High Sierra+)</li>
                    <li>⚠️ Windows 10/11 (mit HEIF-Erweiterung)</li>
                    <li>⚠️ Android 10+ (gerätespezifisch)</li>
                    <li>❌ Ältere Systeme, die meisten Websites</li>
                  </ul>
                </div>
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: '#d4edda', 
                  borderRadius: '8px',
                  border: '1px solid #28a745'
                }}>
                  <h4 style={{ color: '#28a745', marginBottom: '1rem' }}>JPG - Universell</h4>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                    <li>✅ Alle Betriebssysteme</li>
                    <li>✅ Alle Browser und Apps</li>
                    <li>✅ Alle Bildbearbeitungsprogramme</li>
                    <li>✅ Hardware-Decoder in Kameras/Druckern</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Wann welches Format verwenden?
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: '2rem'
            }}>
              {/* HEIC Use Cases */}
              <div style={{ 
                padding: '2rem', 
                backgroundColor: '#e8f4fd', 
                borderRadius: '8px',
                border: '2px solid #007bff'
              }}>
                <h3 style={{ color: '#007bff', marginBottom: '1.5rem', textAlign: 'center' }}>
                  📱 Verwende HEIC wenn...
                </h3>
                <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                  <li>Du ausschließlich Apple-Geräte nutzt</li>
                  <li>Speicherplatz kritisch ist (iPhone/iPad)</li>
                  <li>Du Live Photos verwendest</li>
                  <li>Maximale Bildqualität wichtig ist</li>
                  <li>Du in der Fotos-App archivierst</li>
                  <li>Professionelle Fotobearbeitung (RAW-ähnlich)</li>
                  <li>Backup in iCloud ohne Platzverschwendung</li>
                </ul>
                <div style={{ 
                  marginTop: '1.5rem',
                  padding: '1rem',
                  backgroundColor: '#007bff',
                  borderRadius: '4px',
                  textAlign: 'center'
                }}>
                  <strong style={{ color: 'white' }}>
                    Ideal für: Apple-Ökosystem, Archivierung
                  </strong>
                </div>
              </div>

              {/* JPG Use Cases */}
              <div style={{ 
                padding: '2rem', 
                backgroundColor: '#d4edda', 
                borderRadius: '8px',
                border: '2px solid #28a745'
              }}>
                <h3 style={{ color: '#28a745', marginBottom: '1.5rem', textAlign: 'center' }}>
                  🌐 Verwende JPG wenn...
                </h3>
                <ul style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
                  <li>Du Bilder teilen/versenden willst</li>
                  <li>Upload auf Websites/Social Media</li>
                  <li>Kompatibilität mit älteren Geräten</li>
                  <li>E-Mail-Versendung</li>
                  <li>Drucken in Fotolaboren</li>
                  <li>Bearbeitung in Adobe/anderen Tools</li>
                  <li>Professionelle/geschäftliche Nutzung</li>
                </ul>
                <div style={{ 
                  marginTop: '1.5rem',
                  padding: '1rem',
                  backgroundColor: '#28a745',
                  borderRadius: '4px',
                  textAlign: 'center'
                }}>
                  <strong style={{ color: 'white' }}>
                    Ideal für: Teilen, Web, Universelle Nutzung
                  </strong>
                </div>
              </div>
            </div>
          </section>

          <AdsSlot slotId="comparison-content" height={250} />

          {/* Recommendations */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              💡 Unsere Empfehlungen
            </h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '1.5rem'
            }}>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#fff3cd', 
                borderRadius: '8px',
                border: '1px solid #ffc107'
              }}>
                <h3 style={{ color: '#856404', marginBottom: '1rem' }}>🍎 Reine Apple-Nutzer</h3>
                <p style={{ margin: 0 }}>
                  <strong>Strategie:</strong> HEIC behalten für Archivierung, zu JPG konvertieren nur bei 
                  Bedarf zum Teilen. iPhone-Einstellung auf "Maximale Kompatibilität" nur bei häufigem 
                  Nicht-Apple-Austausch.
                </p>
              </div>
              
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#d1ecf1', 
                borderRadius: '8px',
                border: '1px solid #17a2b8'
              }}>
                <h3 style={{ color: '#0c5460', marginBottom: '1rem' }}>🔄 Mixed-Environment</h3>
                <p style={{ margin: 0 }}>
                  <strong>Strategie:</strong> iPhone auf "Maximale Kompatibilität" stellen oder 
                  regelmäßig HEIC zu JPG konvertieren. Backup in HEIC, Workflow in JPG für 
                  maximale Flexibilität.
                </p>
              </div>
              
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#f8d7da', 
                borderRadius: '8px',
                border: '1px solid #dc3545'
              }}>
                <h3 style={{ color: '#721c24', marginBottom: '1rem' }}>💼 Business/Professional</h3>
                <p style={{ margin: 0 }}>
                  <strong>Strategie:</strong> Standardmäßig JPG verwenden. HEIC nur für interne 
                  Apple-Workflows. Immer vor Kundenkommunikation, Präsentationen oder 
                  Website-Upload konvertieren.
                </p>
              </div>
            </div>
          </section>

          {/* Conversion Tools */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              🔧 Konvertierung leicht gemacht
            </h2>
            
            <div style={{ 
              padding: '2rem',
              backgroundColor: '#007bff',
              borderRadius: '12px',
              color: 'white',
              textAlign: 'center'
            }}>
              <h3 style={{ 
                fontSize: '1.8rem', 
                marginBottom: '1rem',
                color: 'white'
              }}>
                Kostenloser HEIC zu JPG Konverter
              </h3>
              <p style={{ 
                fontSize: '1.1rem', 
                marginBottom: '2rem',
                opacity: 0.9
              }}>
                100% lokal im Browser • Keine Uploads • Stapelverarbeitung • Kostenlos
              </p>
              <div style={{ 
                display: 'flex', 
                gap: '1rem', 
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <a 
                  href="/" 
                  style={{ 
                    display: 'inline-block',
                    padding: '1rem 2rem',
                    backgroundColor: 'white',
                    color: '#007bff',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                  }}
                >
                  HEIC zu JPG
                </a>
                <a 
                  href="/heic-in-png-umwandeln" 
                  style={{ 
                    display: 'inline-block',
                    padding: '1rem 2rem',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '6px',
                    fontWeight: 'bold',
                    border: '2px solid white'
                  }}
                >
                  HEIC zu PNG
                </a>
              </div>
            </div>
          </section>

          {/* Related Links */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              📚 Weiterführende Informationen
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1rem'
            }}>
              <a 
                href="/was-ist-heic" 
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
                <strong>Was ist HEIC?</strong><br />
                <small style={{ color: '#6c757d' }}>Format im Detail erklärt</small>
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
                <small style={{ color: '#6c757d' }}>HEIC auf iOS umwandeln</small>
              </a>
              <a 
                href="/faq" 
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
                <strong>FAQ</strong><br />
                <small style={{ color: '#6c757d' }}>Häufige Fragen & Antworten</small>
              </a>
              <a 
                href="/heic-in-webp-umwandeln" 
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
                <strong>HEIC zu WEBP</strong><br />
                <small style={{ color: '#6c757d' }}>Moderne Alternative</small>
              </a>
            </div>
          </section>

          <AdsSlot slotId="comparison-bottom" height={280} />
        </div>
      </div>
    </>
  );
} 