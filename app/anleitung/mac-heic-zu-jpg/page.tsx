import { getPageMetadata } from '@/lib/seo';
import { AdsSlot } from '@/components/AdsSlot';

export const metadata = getPageMetadata(
  'Mac: HEIC in JPG umwandeln – Vorschau, Fotos & Browser',
  'HEIC auf dem Mac als JPG exportieren: Vorschau, Fotos-App, Automator und Online-Konverter (ohne Upload).',
  '/anleitung/mac-heic-zu-jpg'
);

export default function MacGuidePage() {
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
            Mac: HEIC in JPG umwandeln
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#6c757d', 
            maxWidth: '700px', 
            margin: '0 auto 2rem'
          }}>
            Vier bewährte Methoden für macOS: Vorschau-App, Fotos-App, Automator und Online-Konverter.
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

        <AdsSlot slotId="mac-guide-top" height={250} />

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#007bff'
          }}>
            Methode 1: Vorschau-App (macOS Standard)
          </h2>
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: '#d4edda',
            borderRadius: '8px',
            border: '1px solid #28a745',
            marginBottom: '2rem'
          }}>
            <p style={{ fontSize: '1.1rem', margin: 0 }}>
              <strong>✅ Ideal für:</strong> Einzelne Dateien oder kleine Mengen. 
              Kostenlos, bereits installiert, einfache Bedienung.
            </p>
          </div>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Schritt-für-Schritt:</h3>
          <ol style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>HEIC-Datei öffnen:</strong> Doppelklick auf HEIC-Datei → öffnet in Vorschau</li>
            <li><strong>Export-Menü:</strong> "Ablage" → "Exportieren..."</li>
            <li><strong>Format wählen:</strong> "Format: JPEG" aus der Dropdown-Liste</li>
            <li><strong>Qualität einstellen:</strong> Schieberegler für JPG-Qualität (empfohlen: 85%)</li>
            <li><strong>Speichern:</strong> Zielordner wählen und "Sichern" klicken</li>
          </ol>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#007bff'
          }}>
            Methode 2: Fotos-App (für Fotos-Bibliothek)
          </h2>
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: '#d1ecf1',
            borderRadius: '8px',
            border: '1px solid #17a2b8',
            marginBottom: '2rem'
          }}>
            <p style={{ fontSize: '1.1rem', margin: 0 }}>
              <strong>✅ Ideal für:</strong> Fotos aus der iCloud/Fotos-App exportieren.
            </p>
          </div>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Einzelnes Foto:</h3>
          <ol style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '2rem' }}>
            <li><strong>Fotos-App</strong> öffnen</li>
            <li>HEIC-Foto auswählen</li>
            <li><strong>"Ablage"</strong> → <strong>"Exportieren"</strong> → <strong>"1 Foto exportieren"</strong></li>
            <li>Format: <strong>"JPEG"</strong> wählen</li>
            <li>Zielordner auswählen und exportieren</li>
          </ol>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Mehrere Fotos:</h3>
          <ol style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li>Mehrere HEIC-Fotos mit <strong>Cmd+Klick</strong> auswählen</li>
            <li><strong>"Ablage"</strong> → <strong>"Exportieren"</strong> → <strong>"X Fotos exportieren"</strong></li>
            <li>Format: <strong>"JPEG"</strong> und Qualität einstellen</li>
            <li>Stapelexport starten</li>
          </ol>
        </section>

        <AdsSlot slotId="mac-guide-middle" height={280} />

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#007bff'
          }}>
            Methode 3: Online Browser-Konverter
          </h2>
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: '#e8f4fd',
            borderRadius: '8px',
            border: '1px solid #007bff',
            marginBottom: '2rem'
          }}>
            <p style={{ fontSize: '1.1rem', margin: 0 }}>
              <strong>✅ Ideal für:</strong> Große Mengen, Stapelverarbeitung, keine Software-Installation.
              100% privat - keine Uploads!
            </p>
          </div>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Anleitung:</h3>
          <ol style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>Safari/Chrome</strong> öffnen</li>
            <li><strong>heic-zu-jpg.de</strong> besuchen</li>
            <li>HEIC-Dateien per <strong>Drag & Drop</strong> hinzufügen</li>
            <li>Format und Qualität wählen</li>
            <li><strong>"Jetzt umwandeln"</strong> → Verarbeitung erfolgt lokal</li>
            <li>JPG-Dateien herunterladen</li>
          </ol>
        </section>

        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1.5rem',
            color: '#007bff'
          }}>
            Methode 4: Automator (für Power-User)
          </h2>
          <div style={{ 
            padding: '1.5rem',
            backgroundColor: '#fff3cd',
            borderRadius: '8px',
            border: '1px solid #ffc107',
            marginBottom: '2rem'
          }}>
            <p style={{ fontSize: '1.1rem', margin: 0 }}>
              <strong>⚡ Für Profis:</strong> Automator-Workflow für wiederkehrende Batch-Konvertierung.
            </p>
          </div>

          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Workflow erstellen:</h3>
          <ol style={{ fontSize: '1.1rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
            <li><strong>Automator</strong> öffnen → <strong>"Programm"</strong> wählen</li>
            <li>Aktion <strong>"Finder-Objekte abfragen"</strong> hinzufügen</li>
            <li>Aktion <strong>"Bildtyp von Bildern ändern"</strong> hinzufügen</li>
            <li>Format auf <strong>"JPEG"</strong> einstellen</li>
            <li>Als Programm speichern (z.B. "HEIC zu JPG")</li>
            <li>Per Doppelklick starten und HEIC-Ordner auswählen</li>
          </ol>
        </section>

        <AdsSlot slotId="mac-guide-bottom" height={280} />

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            Tipps für Mac-Nutzer
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
              <h3 style={{ color: '#155724', marginBottom: '1rem' }}>🖼️ Vorschau-App</h3>
              <p>Perfekt für 1-5 Dateien. Schnell und ohne zusätzliche Software.</p>
            </div>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#d1ecf1', 
              borderRadius: '8px',
              border: '1px solid #17a2b8'
            }}>
              <h3 style={{ color: '#0c5460', marginBottom: '1rem' }}>📱 Fotos-App</h3>
              <p>Beste Wahl für Fotos aus der iCloud-Fotomediathek.</p>
            </div>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#e8f4fd', 
              borderRadius: '8px',
              border: '1px solid #007bff'
            }}>
              <h3 style={{ color: '#007bff', marginBottom: '1rem' }}>🌐 Browser-Tool</h3>
              <p>Für große Mengen (50+ Dateien) und maximale Privatsphäre.</p>
            </div>
            <div style={{ 
              padding: '1.5rem', 
              backgroundColor: '#fff3cd', 
              borderRadius: '8px',
              border: '1px solid #ffc107'
            }}>
              <h3 style={{ color: '#856404', marginBottom: '1rem' }}>⚡ Automator</h3>
              <p>Einmal einrichten, dann automatische Batch-Konvertierung.</p>
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
              Welche Methode passt zu Ihnen?
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              marginBottom: '2rem',
              opacity: 0.9
            }}>
              Für die meisten Nutzer ist der Online-Konverter die beste Wahl: 
              kostenlos, privat und ohne Softwareinstallation.
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