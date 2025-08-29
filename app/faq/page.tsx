import { getPageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';
import { AdsSlot } from '@/components/AdsSlot';

export const metadata = getPageMetadata(
  'FAQ – HEIC in JPG umwandeln (ohne Upload)',
  'Antworten zu Datenschutz, Formaten, Qualität, Kompatibilität, Limits und Nutzung unseres HEIC-zu-JPG Konverters.',
  '/faq'
);

const faqData = [
  {
    question: "Werden meine Bilder hochgeladen?",
    answer: "Nein, alle HEIC-Dateien werden vollständig lokal in Ihrem Browser verarbeitet. Es werden keine Dateien an unsere Server übertragen oder gespeichert. Die Konvertierung erfolgt mittels JavaScript-Bibliotheken direkt in Ihrem Browser."
  },
  {
    question: "Gibt es Limits für die Anzahl oder Größe der Dateien?",
    answer: "Es gibt keine künstlichen Limits von unserer Seite. Die praktische Begrenzung hängt vom verfügbaren Arbeitsspeicher Ihres Browsers ab. Moderne Browser können problemlos hunderte von Bildern verarbeiten, solange genügend RAM verfügbar ist."
  },
  {
    question: "Welche Formate werden unterstützt?",
    answer: "Eingabe: HEIC und HEIF (High Efficiency Image Container/Format). Ausgabe: JPG (Standard), PNG oder WEBP. Sie können das gewünschte Ausgabeformat vor der Konvertierung auswählen."
  },
  {
    question: "Was passiert mit EXIF-Daten?",
    answer: "Sie haben die Wahl: EXIF-Metadaten (wie GPS-Koordinaten, Kameraeinstellungen, Aufnahmedatum) können entweder beibehalten oder aus Datenschutzgründen entfernt werden. Wir empfehlen die Entfernung vor dem Teilen von Bildern."
  },
  {
    question: "Wie ist die Bildqualität nach der Konvertierung?",
    answer: "JPG und WEBP sind verlustbehaftete Formate - die Qualität ist von 10% bis 100% einstellbar (Standard: 80%). PNG ist verlustarm und behält die ursprüngliche Qualität bei, erzeugt aber größere Dateien."
  },
  {
    question: "Ist der Service kostenlos?",
    answer: "Ja, der Service ist vollständig kostenlos und wird es bleiben. Werbung hilft uns dabei, den Dienst bereitzustellen, zu verbessern und die Serverkosten zu decken."
  },
  {
    question: "Auf welchen Geräten funktioniert der Konverter?",
    answer: "Der Konverter funktioniert auf allen modernen Browsern: Chrome, Firefox, Safari, Edge. Unterstützte Betriebssysteme: Windows, macOS, Linux, iOS, Android. Eine Internetverbindung ist nur für den ersten Seitenaufruf erforderlich."
  },
  {
    question: "Warum sollte ich HEIC in JPG umwandeln?",
    answer: "HEIC ist hauptsächlich auf Apple-Geräten verbreitet. JPG hingegen ist universell kompatibel mit allen Geräten, Programmen und Websites. JPG-Dateien lassen sich problemlos per E-Mail versenden, drucken oder in Social Media hochladen."
  },
  {
    question: "Kann ich die Konvertierung rückgängig machen?",
    answer: "Nein, die Konvertierung von HEIC zu JPG ist nicht umkehrbar, da JPG ein verlustbehaftetes Format ist. Bewahren Sie daher immer die Original-HEIC-Dateien auf, falls Sie diese später benötigen."
  },
  {
    question: "Was ist der Unterschied zwischen HEIC und JPG?",
    answer: "HEIC bietet bessere Komprimierung bei gleicher Qualität (etwa 50% kleinere Dateien) und unterstützt moderne Features wie 16-Bit-Farbtiefe. JPG ist älter, universell kompatibel, aber weniger effizient komprimiert."
  },
  {
    question: "Funktioniert der Konverter offline?",
    answer: "Nach dem ersten Laden der Seite kann die Konvertierung auch offline durchgeführt werden, da alle benötigten Bibliotheken im Browser zwischengespeichert werden. Eine dauerhafte Internetverbindung ist nicht erforderlich."
  },
  {
    question: "Werden Transparenzen unterstützt?",
    answer: "HEIC unterstützt Transparenzen, JPG jedoch nicht. Wenn Ihre HEIC-Datei transparente Bereiche enthält, wählen Sie PNG als Ausgabeformat, um die Transparenz zu erhalten."
  },
  {
    question: "Kann ich mehrere Dateien gleichzeitig konvertieren?",
    answer: "Ja, Stapelverarbeitung ist möglich. Wählen Sie einfach mehrere HEIC-Dateien aus oder ziehen Sie sie per Drag & Drop in den Upload-Bereich. Alle Dateien werden automatisch konvertiert und können als ZIP-Datei heruntergeladen werden."
  },
  {
    question: "Was tue ich bei Fehlern während der Konvertierung?",
    answer: "Stellen Sie sicher, dass es sich um gültige HEIC/HEIF-Dateien handelt. Bei sehr großen Dateien kann der Arbeitsspeicher knapp werden - versuchen Sie, weniger Dateien gleichzeitig zu konvertieren. Ein Browser-Neustart kann auch helfen."
  }
];

// FAQ Page JSON-LD
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
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
      "name": "FAQ",
      "item": "https://heic-zu-jpg.de/faq"
    }
  ]
};

export default function FAQPage() {
  return (
    <>
      <JsonLd json={faqJsonLd} />
      <JsonLd json={breadcrumbJsonLd} />
      
      <div style={{ padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Header */}
          <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem',
              color: '#007bff'
            }}>
              Häufig gestellte Fragen (FAQ)
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#6c757d', 
              maxWidth: '700px', 
              margin: '0 auto 2rem'
            }}>
              Hier finden Sie Antworten auf die wichtigsten Fragen zu unserem HEIC-zu-JPG Konverter.
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
          <AdsSlot slotId="faq-top" height={250} />

          {/* FAQ Content */}
          <section style={{ marginBottom: '3rem' }}>
            {faqData.map((item, index) => (
              <div key={index} style={{ 
                marginBottom: '2rem',
                padding: '1.5rem',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                border: '1px solid #dee2e6'
              }}>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: 'bold', 
                  marginBottom: '1rem',
                  color: '#007bff'
                }}>
                  {item.question}
                </h3>
                <p style={{ 
                  fontSize: '1rem', 
                  lineHeight: 1.6, 
                  margin: 0,
                  color: '#333'
                }}>
                  {item.answer}
                </p>
              </div>
            ))}
          </section>

          {/* Ad Slot */}
          <AdsSlot slotId="faq-middle" height={280} />

          {/* Additional Info */}
          <section style={{ marginBottom: '3rem' }}>
            <div style={{ 
              padding: '2rem',
              backgroundColor: '#e8f4fd',
              borderRadius: '8px',
              border: '1px solid #007bff',
              textAlign: 'center'
            }}>
              <h2 style={{ 
                fontSize: '1.5rem', 
                marginBottom: '1rem',
                color: '#007bff'
              }}>
                Haben Sie weitere Fragen?
              </h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Falls Ihre Frage hier nicht beantwortet wurde, besuchen Sie unsere Anleitungsseiten 
                oder starten Sie direkt mit der Konvertierung.
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
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#007bff',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: 'bold'
                  }}
                >
                  Zum Konverter
                </a>
                <a 
                  href="/anleitung/iphone-heic-zu-jpg" 
                  style={{ 
                    display: 'inline-block',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'white',
                    color: '#007bff',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    border: '2px solid #007bff'
                  }}
                >
                  iPhone Anleitung
                </a>
                <a 
                  href="/was-ist-heic" 
                  style={{ 
                    display: 'inline-block',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'white',
                    color: '#007bff',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: 'bold',
                    border: '2px solid #007bff'
                  }}
                >
                  Was ist HEIC?
                </a>
              </div>
            </div>
          </section>

          {/* Ad Slot */}
          <AdsSlot slotId="faq-bottom" height={250} />
        </div>
      </div>
    </>
  );
} 