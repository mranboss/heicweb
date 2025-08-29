import { getPageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { AdsSlot } from '@/components/AdsSlot';
import { Converter } from '@/components/Converter';
import { FAQ } from '@/components/FAQ';

export const metadata = getPageMetadata(
  'HEIC in PNG umwandeln – Verlustarm & kostenlos (ohne Upload)',
  'HEIC in PNG konvertieren – 100% lokal im Browser, ohne Upload. Ideal für transparente Grafiken, Stapelverarbeitung inklusive.',
  '/heic-in-png-umwandeln'
);

// WebApplication JSON-LD for PNG converter
const webApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "HEIC in PNG umwandeln",
  "url": "https://heic-zu-jpg.de/heic-in-png-umwandeln",
  "description": "Kostenloser Online-Konverter für HEIC zu PNG - verlustarm, transparent, 100% lokal im Browser",
  "applicationCategory": "PhotographyApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "featureList": [
    "HEIC zu PNG konvertieren",
    "Verlustfreie Konvertierung",
    "Transparenz-Unterstützung",
    "Stapelverarbeitung",
    "Lokale Verarbeitung ohne Upload",
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
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "HEIC in PNG umwandeln",
      "item": "https://heic-zu-jpg.de/heic-in-png-umwandeln"
    }
  ]
};

const pngFaqData = [
  {
    question: "Warum PNG statt JPG für HEIC-Konvertierung wählen?",
    answer: "PNG ist verlustarm und unterstützt Transparenzen. Während JPG kleinere Dateien erzeugt, behält PNG die maximale Bildqualität bei und eignet sich besser für Grafiken mit klaren Kanten oder transparenten Bereichen."
  },
  {
    question: "Werden Transparenzen von HEIC nach PNG übertragen?",
    answer: "Ja, falls Ihre HEIC-Datei transparente Bereiche enthält, bleiben diese in der PNG-Version erhalten. JPG unterstützt keine Transparenz und würde diese durch einen weißen Hintergrund ersetzen."
  },
  {
    question: "Sind PNG-Dateien größer als JPG?",
    answer: "Ja, PNG-Dateien sind normalerweise 2-3x größer als vergleichbare JPG-Dateien, da PNG verlustarm komprimiert. Dafür erhalten Sie maximale Bildqualität ohne Komprimierungsartefakte."
  },
  {
    question: "Wann sollte ich PNG verwenden?",
    answer: "PNG eignet sich für Screenshots, Grafiken mit Text, Logos, Bilder mit Transparenz oder wenn maximale Qualität wichtiger ist als Dateigröße. Für normale Fotos ist JPG meist ausreichend."
  }
];

export default function HEICToPNGPage() {
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
              color: '#ffc107'
            }}>
              HEIC in PNG umwandeln
            </h1>
            <p style={{ 
              fontSize: '1.25rem', 
              color: '#6c757d', 
              maxWidth: '800px', 
              margin: '0 auto 2rem'
            }}>
              Verlustarm und transparent – konvertieren Sie HEIC-Dateien zu PNG für maximale Qualität. 
              100% lokal im Browser, keine Uploads erforderlich.
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
                href="/heic-in-webp-umwandeln" 
                style={{ 
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#17a2b8',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '4px',
                  fontWeight: 'bold'
                }}
              >
                HEIC zu WEBP
              </a>
            </div>
          </section>

          {/* Ad Slot 1 */}
          <AdsSlot slotId="png-top-banner" height={250} />

          {/* Converter */}
          <section style={{ marginBottom: '3rem' }}>
            <Converter />
          </section>

          {/* How it works */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Wie funktioniert es?
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {[
                {
                  step: 1,
                  title: "HEIC-Dateien auswählen",
                  content: "Laden Sie Ihre HEIC/HEIF-Dateien hoch oder ziehen Sie sie per Drag & Drop in den Bereich."
                },
                {
                  step: 2,
                  title: "PNG als Format wählen",
                  content: "Stellen Sie das Ausgabeformat auf PNG ein, um verlustfreie Qualität und Transparenz-Unterstützung zu erhalten."
                },
                {
                  step: 3,
                  title: "Konvertierung starten",
                  content: "Die Umwandlung erfolgt vollständig lokal in Ihrem Browser – keine Internetverbindung während der Verarbeitung nötig."
                },
                {
                  step: 4,
                  title: "PNG-Dateien herunterladen",
                  content: "Laden Sie die konvertierten PNG-Dateien einzeln oder als ZIP-Archive herunter."
                }
              ].map((item, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  backgroundColor: '#fff3cd',
                  borderRadius: '8px',
                  border: '1px solid #ffc107'
                }}>
                  <div style={{ 
                    backgroundColor: '#ffc107', 
                    color: '#856404', 
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
                      color: '#856404'
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

          {/* Advantages of PNG */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Vorteile von PNG
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
                backgroundColor: '#d4edda', 
                borderRadius: '8px',
                border: '1px solid #28a745',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#155724', marginBottom: '1rem' }}>🎯 Verlustfrei</h3>
                <p>PNG komprimiert ohne Qualitätsverlust. Jedes Pixel wird exakt so gespeichert, wie es im Original war.</p>
              </div>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#d1ecf1', 
                borderRadius: '8px',
                border: '1px solid #17a2b8',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#0c5460', marginBottom: '1rem' }}>💧 Transparenz</h3>
                <p>PNG unterstützt Alphakanäle für transparente und halbtransparente Bereiche – ideal für Grafiken.</p>
              </div>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#fff3cd', 
                borderRadius: '8px',
                border: '1px solid #ffc107',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#856404', marginBottom: '1rem' }}>📐 Scharfe Kanten</h3>
                <p>Perfekt für Screenshots, Diagramme, Logos oder Bilder mit Text – keine Komprimierungsartefakte.</p>
              </div>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#f8d7da', 
                borderRadius: '8px',
                border: '1px solid #dc3545',
                textAlign: 'center'
              }}>
                <h3 style={{ color: '#721c24', marginBottom: '1rem' }}>🌐 Universell</h3>
                <p>PNG wird von allen Browsern, Bildbearbeitungsprogrammen und Betriebssystemen unterstützt.</p>
              </div>
            </div>
          </section>

          {/* Ad Slot 2 */}
          <AdsSlot slotId="png-middle-banner" height={280} />

          {/* Use Cases */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Wann PNG verwenden?
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '1.5rem'
              }}>
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px',
                  border: '1px solid #dee2e6'
                }}>
                  <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>📱 Screenshots</h3>
                  <p>App-Screenshots, Desktop-Aufnahmen oder Bildschirmfotos mit scharfen Elementen und Text.</p>
                </div>
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px',
                  border: '1px solid #dee2e6'
                }}>
                  <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>🎨 Grafiken</h3>
                  <p>Logos, Icons, Diagramme oder Illustrationen mit klaren Linien und definierten Farbbereichen.</p>
                </div>
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px',
                  border: '1px solid #dee2e6'
                }}>
                  <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>💻 Web-Design</h3>
                  <p>Transparente Overlays, Buttons oder UI-Elemente für Websites und Apps.</p>
                </div>
                <div style={{ 
                  padding: '1.5rem', 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px',
                  border: '1px solid #dee2e6'
                }}>
                  <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>🖨️ Druck</h3>
                  <p>Hochqualitative Druckvorlagen, besonders bei Grafiken mit Text oder scharfen Kontrasten.</p>
                </div>
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
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔒</div>
                  <h4 style={{ marginBottom: '0.5rem' }}>Lokale Verarbeitung</h4>
                  <p style={{ fontSize: '0.9rem', margin: 0 }}>Keine Uploads, alles bleibt auf Ihrem Gerät</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
                  <h4 style={{ marginBottom: '0.5rem' }}>Schnell & Offline</h4>
                  <p style={{ fontSize: '0.9rem', margin: 0 }}>Nach dem Laden funktioniert es ohne Internet</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🗑️</div>
                  <h4 style={{ marginBottom: '0.5rem' }}>EXIF-Kontrolle</h4>
                  <p style={{ fontSize: '0.9rem', margin: 0 }}>Metadaten optional entfernen für Privatsphäre</p>
                </div>
              </div>
              <p style={{ 
                fontSize: '1rem', 
                textAlign: 'center',
                margin: 0,
                fontStyle: 'italic'
              }}>
                Ihre Bilder verlassen niemals Ihren Browser. Für anonyme Nutzungsstatistiken verwenden wir 
                DSGVO-konforme Analytics.
              </p>
            </div>
          </section>

          {/* PNG FAQ */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              PNG-spezifische FAQ
            </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {pngFaqData.map((item, index) => (
                <div key={index} style={{ 
                  marginBottom: '1.5rem',
                  padding: '1.5rem',
                  backgroundColor: '#fff3cd',
                  borderRadius: '8px',
                  border: '1px solid #ffc107'
                }}>
                  <h3 style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: 'bold', 
                    marginBottom: '0.5rem',
                    color: '#856404'
                  }}>
                    {item.question}
                  </h3>
                  <p style={{ margin: 0, lineHeight: 1.6 }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Ad Slot 3 */}
          <AdsSlot slotId="png-content-banner" height={250} />

          {/* Comparison Table */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              PNG vs. JPG vs. WEBP Vergleich
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
                  <tr style={{ backgroundColor: '#f8f9fa' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '2px solid #dee2e6' }}>Eigenschaft</th>
                    <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '2px solid #dee2e6', color: '#ffc107' }}>PNG</th>
                    <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '2px solid #dee2e6', color: '#007bff' }}>JPG</th>
                    <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '2px solid #dee2e6', color: '#17a2b8' }}>WEBP</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Komprimierung', 'Verlustfrei', 'Verlustbehaftet', 'Beides möglich'],
                    ['Dateigröße', 'Groß', 'Klein', 'Sehr klein'],
                    ['Transparenz', '✅ Ja', '❌ Nein', '✅ Ja'],
                    ['Browser-Support', '✅ Universell', '✅ Universell', '⚠️ Modern'],
                    ['Ideal für', 'Grafiken, Screenshots', 'Fotos', 'Web, modern']
                  ].map((row, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #dee2e6' }}>
                      <td style={{ padding: '1rem', fontWeight: 'bold' }}>{row[0]}</td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>{row[1]}</td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>{row[2]}</td>
                      <td style={{ padding: '1rem', textAlign: 'center' }}>{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                <small style={{ fontWeight: 'normal' }}>Standard-Konvertierung</small>
              </a>
              <a 
                href="/heic-in-webp-umwandeln" 
                style={{ 
                  padding: '1.5rem',
                  backgroundColor: '#d1ecf1',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#17a2b8',
                  border: '2px solid #17a2b8',
                  textAlign: 'center',
                  display: 'block',
                  fontWeight: 'bold'
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🚀</div>
                HEIC zu WEBP<br />
                <small style={{ fontWeight: 'normal' }}>Moderne Komprimierung</small>
              </a>
            </div>
          </section>

          {/* Call to Action */}
          <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ 
              padding: '3rem 2rem',
              backgroundColor: '#ffc107',
              borderRadius: '12px',
              color: '#856404'
            }}>
              <h2 style={{ 
                fontSize: '2rem', 
                marginBottom: '1rem',
                color: '#856404'
              }}>
                Jetzt HEIC zu PNG umwandeln
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                marginBottom: '2rem'
              }}>
                Verlustfreie Qualität, Transparenz-Unterstützung, 100% sicher und kostenlos.
              </p>
              <a 
                href="#converter" 
                style={{ 
                  display: 'inline-block',
                  padding: '1rem 2rem',
                  backgroundColor: '#856404',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '6px',
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}
              >
                Zum PNG-Konverter ↑
              </a>
            </div>
          </section>

          {/* Ad Slot 4 */}
          <AdsSlot slotId="png-bottom-banner" height={280} />
        </div>
      </div>
    </>
  );
} 