import { getPageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { AdsSlot } from '@/components/AdsSlot';
import { Converter } from '@/components/Converter';

export const metadata = getPageMetadata(
  'HEIC in WEBP umwandeln – Modern, klein & schnell (ohne Upload)',
  'HEIC in WEBP konvertieren – lokal im Browser, ohne Upload. Moderne Komprimierung, hohe Qualität, kostenlos.',
  '/heic-in-webp-umwandeln'
);

// WebApplication JSON-LD
const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "HEIC in WEBP umwandeln",
  "url": "https://heic-zu-jpg.de/heic-in-webp-umwandeln",
  "description": "Kostenloser Online-Konverter für HEIC zu WEBP - moderne Komprimierung, 100% lokal im Browser",
  "applicationCategory": "PhotographyApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "featureList": [
    "HEIC zu WEBP konvertieren",
    "Moderne Komprimierung",
    "Kleinste Dateigröße",
    "Transparenz-Unterstützung",
    "Stapelverarbeitung",
    "Lokale Verarbeitung ohne Upload"
  ]
};

export default function HEICToWEBPPage() {
  return (
    <>
      <JsonLd json={webApplicationJsonLd} />
      
      <div style={{ padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Hero Section */}
          <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              color: '#17a2b8'
            }}>
              HEIC in WEBP umwandeln
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#6c757d', 
              maxWidth: '800px', 
              margin: '0 auto 2rem'
            }}>
              Das modernste Bildformat – konvertieren Sie HEIC zu WEBP für beste Komprimierung und Web-Performance. 
              100% lokal im Browser, keine Uploads.
            </p>
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '2rem'
            }}>
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
                HEIC zu JPG
              </a>
              <a 
                href="/heic-in-png-umwandeln" 
                style={{ 
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#ffc107',
                  color: '#856404',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold'
                }}
              >
                HEIC zu PNG
              </a>
            </div>
          </section>

          <AdsSlot slotId="webp-top-banner" height={250} />

          {/* Converter */}
          <section style={{ marginBottom: '3rem' }}>
            <Converter />
          </section>

          {/* Why WEBP */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Warum WEBP wählen?
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
                backgroundColor: '#d1ecf1', 
                borderRadius: '8px',
                border: '1px solid #17a2b8',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#0c5460', marginBottom: '1rem' }}>🚀 Kleinste Dateien</h3>
                <p>WEBP ist 25-35% kleiner als JPG und 26% kleiner als PNG bei gleicher Qualität.</p>
              </div>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#d1ecf1', 
                borderRadius: '8px',
                border: '1px solid #17a2b8',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#0c5460', marginBottom: '1rem' }}>⚡ Web-optimiert</h3>
                <p>Speziell für das Web entwickelt von Google. Schnellere Ladezeiten garantiert.</p>
              </div>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#d1ecf1', 
                borderRadius: '8px',
                border: '1px solid #17a2b8',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#0c5460', marginBottom: '1rem' }}>🎨 Flexibel</h3>
                <p>Unterstützt sowohl verlustfreie als auch verlustbehaftete Komprimierung plus Transparenz.</p>
              </div>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#d1ecf1', 
                borderRadius: '8px',
                border: '1px solid #17a2b8',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#0c5460', marginBottom: '1rem' }}>🌐 Moderne Browser</h3>
                <p>Unterstützt von Chrome, Firefox, Safari, Edge. Über 95% Browser-Abdeckung.</p>
              </div>
            </div>
          </section>

          <AdsSlot slotId="webp-middle-banner" height={280} />

          {/* How it works */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              So funktioniert die WEBP-Konvertierung
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {[
                {
                  step: 1,
                  title: "HEIC-Dateien hochladen",
                  content: "Wählen Sie Ihre HEIC/HEIF-Dateien aus oder ziehen Sie sie per Drag & Drop hinein."
                },
                {
                  step: 2,
                  title: "WEBP als Format wählen",
                  content: "Stellen Sie das Ausgabeformat auf WEBP ein für moderne, effiziente Komprimierung."
                },
                {
                  step: 3,
                  title: "Qualität optimieren",
                  content: "Wählen Sie zwischen verlustfreier (100%) oder optimierter Komprimierung (80-95%)."
                },
                {
                  step: 4,
                  title: "Konvertierung & Download",
                  content: "Die Umwandlung erfolgt lokal. Laden Sie WEBP-Dateien einzeln oder als ZIP herunter."
                }
              ].map((item, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  backgroundColor: '#d1ecf1',
                  borderRadius: '8px',
                  border: '1px solid #17a2b8'
                }}>
                  <div style={{ 
                    backgroundColor: '#17a2b8', 
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
                    {item.step}
                  </div>
                  <div>
                    <h4 style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: 'bold', 
                      marginBottom: '0.5rem',
                      color: '#0c5460'
                    }}>
                      {item.title}
                    </h4>
                    <p style={{ margin: 0, color: '#333' }}>
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Web Use Cases */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              WEBP im Web-Einsatz
            </h2>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '1.5rem'
              }}>
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px',
                  border: '1px solid #dee2e6'
                }}>
                  <h3 style={{ color: '#17a2b8', marginBottom: '1rem' }}>💻 Websites</h3>
                  <p style={{ marginBottom: '1rem' }}>
                    Schnellere Ladezeiten, bessere Core Web Vitals, höhere Google-Rankings.
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                    <li>E-Commerce Produktbilder</li>
                    <li>Blog-Artikel Illustrationen</li>
                    <li>Portfolio-Galerien</li>
                  </ul>
                </div>
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px',
                  border: '1px solid #dee2e6'
                }}>
                  <h3 style={{ color: '#17a2b8', marginBottom: '1rem' }}>📱 Progressive Web Apps</h3>
                  <p style={{ marginBottom: '1rem' }}>
                    Ideal für mobile Apps mit begrenzter Bandbreite und Speicher.
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                    <li>App-Icons und UI-Elemente</li>
                    <li>User-generated Content</li>
                    <li>Caching-optimierte Bilder</li>
                  </ul>
                </div>
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px',
                  border: '1px solid #dee2e6'
                }}>
                  <h3 style={{ color: '#17a2b8', marginBottom: '1rem' }}>🎮 Gaming & VR</h3>
                  <p style={{ marginBottom: '1rem' }}>
                    Textur-Komprimierung für 3D-Anwendungen und VR-Experiences.
                  </p>
                  <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                    <li>Game Asset Optimierung</li>
                    <li>VR Environment Textures</li>
                    <li>AR Overlay Graphics</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <AdsSlot slotId="webp-content-banner" height={250} />

          {/* Format Comparison */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              WEBP vs. andere Formate
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
                  <tr style={{ backgroundColor: '#17a2b8', color: 'white' }}>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Eigenschaft</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>WEBP</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>JPG</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>PNG</th>
                    <th style={{ padding: '1rem', textAlign: 'center' }}>HEIC</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Dateigröße', 'Sehr klein', 'Mittel', 'Groß', 'Klein'],
                    ['Komprimierung', 'Beides', 'Verlustbehaftet', 'Verlustfrei', 'Verlustbehaftet'],
                    ['Transparenz', '✅ Ja', '❌ Nein', '✅ Ja', '✅ Ja'],
                    ['Browser-Support', '95%+', '100%', '100%', '5%'],
                    ['Web-Performance', 'Exzellent', 'Gut', 'Schlecht', 'Nicht verfügbar'],
                    ['Ladezeit', 'Sehr schnell', 'Schnell', 'Langsam', 'N/A'],
                    ['SEO-Vorteil', '✅ Ja', '❌ Nein', '❌ Nein', '❌ Nein']
                  ].map((row, index) => (
                    <tr key={index} style={{ 
                      borderBottom: '1px solid #dee2e6',
                      backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white'
                    }}>
                      <td style={{ padding: '1rem', fontWeight: 'bold' }}>{row[0]}</td>
                      <td style={{ 
                        padding: '1rem', 
                        textAlign: 'center',
                        backgroundColor: '#d1ecf1',
                        fontWeight: 'bold',
                        color: '#0c5460'
                      }}>
                        {row[1]}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>{row[2]}</td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>{row[3]}</td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Browser Support */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Browser-Unterstützung
            </h2>
            <div style={{ 
              padding: '2rem',
              backgroundColor: '#d1ecf1',
              borderRadius: '8px',
              border: '1px solid #17a2b8'
            }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
                  <strong>Chrome 23+</strong><br />
                  <small>2012, vollständiger Support</small>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
                  <strong>Firefox 65+</strong><br />
                  <small>2019, vollständiger Support</small>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
                  <strong>Safari 14+</strong><br />
                  <small>2020, vollständiger Support</small>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
                  <strong>Edge 18+</strong><br />
                  <small>2018, vollständiger Support</small>
                </div>
              </div>
              <p style={{ 
                textAlign: 'center',
                margin: 0,
                fontSize: '1.1rem',
                fontWeight: 'bold',
                color: '#0c5460'
              }}>
                Über 95% aller aktiven Browser unterstützen WEBP vollständig!
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ 
              padding: '3rem 2rem',
              background: 'linear-gradient(135deg, #17a2b8 0%, #0c5460 100%)',
              borderRadius: '12px',
              color: 'white'
            }}>
              <h2 style={{ 
                fontSize: '2rem', 
                marginBottom: '1rem',
                color: 'white'
              }}>
                Jetzt HEIC zu WEBP umwandeln
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                marginBottom: '2rem',
                opacity: 0.9
              }}>
                Modernste Komprimierung, beste Web-Performance, 100% kostenlos.
              </p>
              <a 
                href="#converter" 
                style={{ 
                  display: 'inline-block',
                  padding: '1rem 2rem',
                  backgroundColor: 'white',
                  color: '#17a2b8',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}
              >
                Zum WEBP-Konverter ↑
              </a>
            </div>
          </section>

          {/* Related Tools */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Weitere Konverter
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
                  backgroundColor: '#e8f4fd',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#007bff',
                  border: '2px solid #007bff',
                  textAlign: 'center',
                  display: 'block',
                  fontWeight: 'bold'
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📄</div>
                HEIC zu JPG<br />
                <small style={{ fontWeight: 'normal' }}>Universell kompatibel</small>
              </a>
              <a 
                href="/heic-in-png-umwandeln" 
                style={{ 
                  padding: '1.5rem',
                  backgroundColor: '#fff3cd',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#856404',
                  border: '2px solid #ffc107',
                  textAlign: 'center',
                  display: 'block',
                  fontWeight: 'bold'
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🎨</div>
                HEIC zu PNG<br />
                <small style={{ fontWeight: 'normal' }}>Verlustfrei & transparent</small>
              </a>
            </div>
          </section>

          <AdsSlot slotId="webp-bottom-banner" height={280} />
        </div>
      </div>
    </>
  );
} 