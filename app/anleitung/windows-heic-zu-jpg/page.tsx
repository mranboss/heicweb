import { getPageMetadata } from '@/lib/seo';
import { AdsSlot } from '@/components/AdsSlot';

export const metadata = getPageMetadata(
  'Windows: HEIC in JPG umwandeln – Online & lokal',
  'HEIC unter Windows in JPG konvertieren: Browser-Konverter, Fotos-App/Erweiterungen, Alternativen. Schritt-für-Schritt.',
  '/anleitung/windows-heic-zu-jpg'
);

export default function WindowsGuidePage() {
  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            color: '#007bff'
          }}>
            Windows: HEIC in JPG umwandeln
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#6c757d', 
            maxWidth: '700px', 
            margin: '0 auto 2rem'
          }}>
            Drei bewährte Methoden, um HEIC-Dateien unter Windows 10/11 in JPG zu konvertieren.
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

        <AdsSlot slotId="windows-guide-top" height={250} />

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#007bff'
          }}>
            Methode 1: Online Browser-Konverter (empfohlen)
          </h2>
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: '#e8f4fd',
            borderRadius: '8px',
            border: '1px solid #007bff',
            marginBottom: '2rem'
          }}>
            <p style={{ fontSize: '1.1rem', margin: 0 }}>
              <strong>✅ Vorteile:</strong> Kostenlos, keine Software-Installation, 100% privat (keine Uploads), 
              Stapelverarbeitung, funktioniert in jedem Browser.
            </p>
          </div>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Schritt-für-Schritt Anleitung:</h3>
          <ol style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>Browser öffnen:</strong> Chrome, Firefox oder Edge öffnen</li>
            <li><strong>Website besuchen:</strong> heic-zu-jpg.de aufrufen</li>
            <li><strong>Dateien auswählen:</strong> "Dateien auswählen" klicken oder HEIC-Dateien per Drag & Drop hinzufügen</li>
            <li><strong>Format wählen:</strong> JPG als Ausgabeformat bestätigen</li>
            <li><strong>Qualität einstellen:</strong> 80% für gute Balance zwischen Qualität und Dateigröße</li>
            <li><strong>Konvertieren:</strong> "Jetzt umwandeln" klicken</li>
            <li><strong>Herunterladen:</strong> Konvertierte JPG-Dateien speichern</li>
          </ol>
        </section>

        <AdsSlot slotId="windows-guide-middle" height={280} />

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#007bff'
          }}>
            Methode 2: Windows Fotos-App + HEIF-Erweiterung
          </h2>
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: '#fff3cd',
            borderRadius: '8px',
            border: '1px solid #ffc107',
            marginBottom: '2rem'
          }}>
            <p style={{ fontSize: '1.1rem', margin: 0 }}>
              <strong>ℹ️ Hinweis:</strong> Erfordert Installation einer kostenpflichtigen Erweiterung 
              aus dem Microsoft Store (€0,99).
            </p>
          </div>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Einrichtung:</h3>
          <ol style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>Microsoft Store</strong> öffnen</li>
            <li><strong>"HEIF Image Extensions"</strong> suchen</li>
            <li>Erweiterung für <strong>€0,99 kaufen</strong> und installieren</li>
            <li>Windows neu starten</li>
          </ol>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Verwendung:</h3>
          <ol style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li>HEIC-Datei mit <strong>Fotos-App</strong> öffnen</li>
            <li>Menü <strong>"..."</strong> → <strong>"Speichern unter"</strong></li>
            <li><strong>JPG-Format</strong> wählen</li>
            <li>Speicherort auswählen und speichern</li>
          </ol>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#007bff'
          }}>
            Methode 3: Kostenlose Software-Alternativen
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
              <h4 style={{ color: '#155724', marginBottom: '1rem' }}>CopyTrans HEIC</h4>
              <p style={{ marginBottom: '1rem' }}>Kostenlose Software für HEIC-Unterstützung in Windows.</p>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li>Kostenlos für private Nutzung</li>
                <li>Integiert sich in Windows Explorer</li>
                <li>Automatische Konvertierung</li>
              </ul>
            </div>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#f8d7da', 
              borderRadius: '8px',
              border: '1px solid #dc3545'
            }}>
              <h4 style={{ color: '#721c24', marginBottom: '1rem' }}>XnConvert</h4>
              <p style={{ marginBottom: '1rem' }}>Professioneller Batch-Bildkonverter mit HEIC-Support.</p>
              <ul style={{ margin: 0, paddingLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li>Kostenlos und Open Source</li>
                <li>Stapelverarbeitung</li>
                <li>Viele Ausgabeformate</li>
              </ul>
            </div>
          </div>
        </section>

        <AdsSlot slotId="windows-guide-bottom" height={280} />

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            Tipps für Windows-Nutzer
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '1.5rem'
          }}>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#d1ecf1', 
              borderRadius: '8px',
              border: '1px solid #17a2b8'
            }}>
              <h3 style={{ color: '#0c5460', marginBottom: '1rem' }}>💡 Browser-Konverter</h3>
              <p>Für gelegentliche Nutzung ist die Online-Konvertierung am einfachsten und sichersten.</p>
            </div>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#fff3cd', 
              borderRadius: '8px',
              border: '1px solid #ffc107'
            }}>
              <h3 style={{ color: '#856404', marginBottom: '1rem' }}>⚠️ Datenschutz</h3>
              <p>Online-Konverter verarbeiten Bilder lokal - keine Übertragung an Server.</p>
            </div>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#d4edda', 
              borderRadius: '8px',
              border: '1px solid #28a745'
            }}>
              <h3 style={{ color: '#155724', marginBottom: '1rem' }}>🔄 Stapelverarbeitung</h3>
              <p>Für große Mengen: Browser-Konverter unterstützt unbegrenzte Dateianzahl.</p>
            </div>
          </div>
        </section>

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
      </div>
    </div>
  );
} 