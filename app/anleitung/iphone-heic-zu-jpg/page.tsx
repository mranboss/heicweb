import { getPageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { AdsSlot } from '@/components/AdsSlot';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export const metadata = getPageMetadata(
  'iPhone: HEIC in JPG umwandeln – Schnell & ohne Upload',
  'HEIC auf dem iPhone in JPG umwandeln: Browser-Tool, iOS-Einstellungen und Alternativen. Schritt-für-Schritt-Anleitung.',
  '/anleitung/iphone-heic-zu-jpg'
);

// HowTo JSON-LD
const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "iPhone: HEIC in JPG umwandeln",
  "description": "Schritt-für-Schritt Anleitung zum Umwandeln von HEIC-Dateien in JPG auf dem iPhone",
  "image": "https://heic-zu-jpg.de/iphone-heic-guide.jpg",
  "totalTime": "PT5M",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "EUR",
    "value": "0"
  },
  "supply": [
    {
      "@type": "HowToSupply",
      "name": "iPhone mit HEIC-Dateien"
    },
    {
      "@type": "HowToSupply", 
      "name": "Safari Browser oder Chrome"
    }
  ],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "HEIC zu JPG Online-Konverter"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "name": "Browser-Konverter öffnen",
      "text": "Öffnen Sie heic-zu-jpg.de in Safari oder Chrome auf Ihrem iPhone.",
      "image": "https://heic-zu-jpg.de/step1-iphone.jpg"
    },
    {
      "@type": "HowToStep", 
      "name": "HEIC-Dateien auswählen",
      "text": "Tippen Sie auf 'Dateien auswählen' und wählen Sie Ihre HEIC-Bilder aus der Fotos-App.",
      "image": "https://heic-zu-jpg.de/step2-iphone.jpg"
    },
    {
      "@type": "HowToStep",
      "name": "Format und Qualität einstellen",
      "text": "Wählen Sie JPG als Ausgabeformat und stellen Sie die gewünschte Qualität ein.",
      "image": "https://heic-zu-jpg.de/step3-iphone.jpg"
    },
    {
      "@type": "HowToStep",
      "name": "Konvertierung starten",
      "text": "Tippen Sie auf 'Jetzt umwandeln' - die Konvertierung erfolgt lokal auf Ihrem iPhone.",
      "image": "https://heic-zu-jpg.de/step4-iphone.jpg"
    },
    {
      "@type": "HowToStep",
      "name": "JPG-Dateien herunterladen",
      "text": "Laden Sie die konvertierten JPG-Dateien herunter und speichern Sie sie in Ihrer Fotos-App.",
      "image": "https://heic-zu-jpg.de/step5-iphone.jpg"
    }
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
      "name": "Anleitungen",
      "item": "https://heic-zu-jpg.de/anleitung"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "iPhone HEIC zu JPG",
      "item": "https://heic-zu-jpg.de/anleitung/iphone-heic-zu-jpg"
    }
  ]
};

export default function iPhoneGuidePage() {
  return (
    <>
      <JsonLd json={howToJsonLd} />
      <JsonLd json={breadcrumbJsonLd} />
      
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
              iPhone: HEIC in JPG umwandeln
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#6c757d', 
              maxWidth: '700px', 
              margin: '0 auto 2rem'
            }}>
              Drei bewährte Methoden, um HEIC-Dateien auf dem iPhone in das universell kompatible JPG-Format zu konvertieren.
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
              Jetzt umwandeln
            </a>
          </header>

          {/* Ad Slot */}
          <AdsSlot slotId="iphone-guide-top" height={250} />

          {/* Method 1: Browser Converter */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              color: '#007bff'
            }}>
              Methode 1: Browser-Konverter (empfohlen)
            </h2>
            <div style={{ 
              padding: '1.5rem',
              backgroundColor: '#e8f4fd',
              borderRadius: '8px',
              border: '1px solid #007bff',
              marginBottom: '2rem'
            }}>
              <p style={{ fontSize: '1.1rem', margin: 0 }}>
                <strong>✅ Vorteile:</strong> Kostenlos, keine App-Installation, 100% privat (keine Uploads), 
                Stapelverarbeitung, funktioniert offline nach dem ersten Laden.
              </p>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Schritt-für-Schritt Anleitung:</h3>
            <div style={{ marginBottom: '2rem' }}>
              {[
                {
                  step: 1,
                  title: "Browser öffnen",
                  content: "Öffnen Sie Safari oder Chrome auf Ihrem iPhone und navigieren Sie zu heic-zu-jpg.de"
                },
                {
                  step: 2,
                  title: "HEIC-Dateien auswählen",
                  content: "Tippen Sie auf 'Dateien auswählen' oder 'HEIC-Dateien hierher ziehen'. Wählen Sie Ihre HEIC-Bilder aus der Fotos-App aus."
                },
                {
                  step: 3,
                  title: "Einstellungen anpassen",
                  content: "Wählen Sie JPG als Ausgabeformat. Stellen Sie die Bildqualität ein (80% ist empfohlen für gute Balance zwischen Qualität und Dateigröße)."
                },
                {
                  step: 4,
                  title: "EXIF-Daten entscheiden",
                  content: "Entscheiden Sie, ob Metadaten (GPS, Aufnahmedatum) beibehalten oder entfernt werden sollen. Für Datenschutz wird Entfernung empfohlen."
                },
                {
                  step: 5,
                  title: "Konvertierung starten",
                  content: "Tippen Sie auf 'Jetzt umwandeln'. Die Konvertierung erfolgt vollständig lokal auf Ihrem iPhone - keine Internetverbindung während der Verarbeitung nötig."
                },
                {
                  step: 6,
                  title: "JPG-Dateien herunterladen",
                  content: "Nach der Konvertierung tippen Sie auf 'Download'. Bei mehreren Dateien erhalten Sie eine ZIP-Datei. Speichern Sie die Bilder in Ihrer Fotos-App."
                }
              ].map((item, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '8px'
                }}>
                  <div style={{ 
                    backgroundColor: '#007bff', 
                    color: 'white', 
                    borderRadius: '50%', 
                    width: '30px', 
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    marginRight: '1rem',
                    flexShrink: 0,
                    fontSize: '0.9rem'
                  }}>
                    {item.step}
                  </div>
                  <div>
                    <h4 style={{ 
                      fontSize: '1.1rem', 
                      fontWeight: 'bold', 
                      marginBottom: '0.5rem',
                      color: '#333'
                    }}>
                      {item.title}
                    </h4>
                    <p style={{ margin: 0, lineHeight: 1.6 }}>
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ad Slot */}
          <AdsSlot slotId="iphone-guide-middle" height={280} />

          {/* Method 2: iOS Settings */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              color: '#007bff'
            }}>
              Methode 2: iOS-Einstellungen ändern
            </h2>
            <div style={{ 
              padding: '1.5rem',
              backgroundColor: '#fff3cd',
              borderRadius: '8px',
              border: '1px solid #ffc107',
              marginBottom: '2rem'
            }}>
              <p style={{ fontSize: '1.1rem', margin: 0 }}>
                <strong>ℹ️ Hinweis:</strong> Diese Methode verhindert neue HEIC-Aufnahmen, konvertiert aber nicht 
                bereits vorhandene HEIC-Dateien.
              </p>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Für zukünftige Fotos:</h3>
            <ol style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
              <li><strong>Einstellungen</strong> öffnen</li>
              <li><strong>Kamera</strong> auswählen</li>
              <li><strong>Formate</strong> antippen</li>
              <li><strong>Maximale Kompatibilität</strong> aktivieren</li>
            </ol>
            <p style={{ 
              fontSize: '1rem', 
              color: '#6c757d',
              fontStyle: 'italic',
              marginTop: '1rem'
            }}>
              Neue Fotos werden nun automatisch als JPG aufgenommen. Bereits vorhandene HEIC-Dateien 
              müssen weiterhin mit Methode 1 oder 3 konvertiert werden.
            </p>
          </section>

          {/* Method 3: Export from Photos */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              marginBottom: '1.5rem',
              color: '#007bff'
            }}>
              Methode 3: Export aus der Fotos-App
            </h2>
            <div style={{ 
              padding: '1.5rem',
              backgroundColor: '#fff3cd',
              borderRadius: '8px',
              border: '1px solid #ffc107',
              marginBottom: '2rem'
            }}>
              <p style={{ fontSize: '1.1rem', margin: 0 }}>
                <strong>⚠️ Begrenzt:</strong> Funktioniert nur beim Teilen/Versenden von Einzelbildern. 
                Für Stapelverarbeitung ist Methode 1 besser geeignet.
              </p>
            </div>

            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Beim Teilen konvertieren:</h3>
            <ol style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
              <li>HEIC-Foto in der <strong>Fotos-App</strong> öffnen</li>
              <li><strong>Teilen-Button</strong> (Quadrat mit Pfeil) antippen</li>
              <li>Ziel-App auswählen (Mail, Messages, etc.)</li>
              <li>iOS konvertiert automatisch zu JPG beim Versenden</li>
            </ol>
          </section>

          {/* Ad Slot */}
          <AdsSlot slotId="iphone-guide-content" height={250} />

          {/* Tips and Tricks */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Tipps & Tricks
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
                <h3 style={{ color: '#155724', marginBottom: '1rem' }}>💾 Speicherplatz sparen</h3>
                <p>HEIC-Dateien sind etwa 50% kleiner als JPG. Behalten Sie HEIC für die Archivierung 
                und konvertieren Sie nur bei Bedarf zu JPG.</p>
              </div>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#d1ecf1', 
                borderRadius: '8px',
                border: '1px solid #17a2b8'
              }}>
                <h3 style={{ color: '#0c5460', marginBottom: '1rem' }}>🔒 Datenschutz</h3>
                <p>Bei Methode 1 bleiben Ihre Bilder vollständig auf dem iPhone. Bei Methode 3 werden 
                EXIF-Daten automatisch entfernt beim Teilen.</p>
              </div>
              <div style={{ 
                padding: '1.5rem', 
                backgroundColor: '#f8d7da', 
                borderRadius: '8px',
                border: '1px solid #dc3545'
              }}>
                <h3 style={{ color: '#721c24', marginBottom: '1rem' }}>⚡ Performance</h3>
                <p>Schließen Sie andere Apps während der Konvertierung großer Mengen, um genügend 
                Arbeitsspeicher zur Verfügung zu haben.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
              Häufige Fragen
            </h2>
            {[
              {
                question: "Warum sind meine iPhone-Fotos plötzlich HEIC statt JPG?",
                answer: "Seit iOS 11 nutzt Apple standardmäßig HEIC für bessere Komprimierung. Sie können dies in den Kamera-Einstellungen unter 'Formate' auf 'Maximale Kompatibilität' umstellen."
              },
              {
                question: "Kann ich die Original-HEIC-Dateien nach der Konvertierung löschen?",
                answer: "Das ist Ihre Entscheidung. HEIC bietet bessere Qualität bei kleinerer Dateigröße. Für maximale Kompatibilität ist JPG jedoch besser geeignet."
              },
              {
                question: "Funktioniert der Browser-Konverter auch offline?",
                answer: "Ja, nach dem ersten Laden der Seite kann die Konvertierung auch ohne Internetverbindung durchgeführt werden."
              },
              {
                question: "Werden Live Photos unterstützt?",
                answer: "Nur das Standbild wird konvertiert. Die Video-Komponente von Live Photos geht verloren."
              }
            ].map((faq, index) => (
              <div key={index} style={{ 
                marginBottom: '1.5rem',
                padding: '1.5rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                border: '1px solid #dee2e6'
              }}>
                <h3 style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 'bold', 
                  marginBottom: '0.5rem',
                  color: '#007bff'
                }}>
                  {faq.question}
                </h3>
                <p style={{ margin: 0, lineHeight: 1.6 }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </section>

          {/* Call to Action */}
          <section style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ 
              padding: '3rem 2rem',
              backgroundColor: '#007bff',
              borderRadius: '12px',
              color: 'white'
            }}>
              <h2 style={{ 
                fontSize: '2rem', 
                marginBottom: '1rem',
                color: 'white'
              }}>
                Bereit zum Konvertieren?
              </h2>
              <p style={{ 
                fontSize: '1.2rem', 
                marginBottom: '2rem',
                opacity: 0.9
              }}>
                Wandeln Sie Ihre HEIC-Dateien jetzt kostenlos und sicher in JPG um.
              </p>
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
                Zum HEIC-Konverter
              </a>
            </div>
          </section>

          {/* Ad Slot */}
          <AdsSlot slotId="iphone-guide-bottom" height={280} />
        </div>
      </div>
    </>
  );
} 