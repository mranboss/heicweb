import { getPageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

export const metadata = getPageMetadata(
  'Datenschutzerklärung – heic-zu-jpg.de',
  'Datenschutzhinweise gemäß DSGVO für heic-zu-jpg.de.',
  '/datenschutz',
  true // noIndex for legal pages
);

// WebPage JSON-LD
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Datenschutzerklärung",
  "url": "https://heic-zu-jpg.de/datenschutz",
  "description": "Datenschutzhinweise gemäß DSGVO für heic-zu-jpg.de",
  "inLanguage": "de-DE",
  "isPartOf": {
    "@type": "WebSite",
    "name": "HEIC zu JPG Konverter",
    "url": "https://heic-zu-jpg.de"
  }
};

export default function DatenschutzPage() {
  return (
    <>
      <JsonLd json={webPageJsonLd} />
      
      <div style={{ padding: '2rem 1rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: 'bold', 
            marginBottom: '2rem',
            color: '#007bff',
            textAlign: 'center'
          }}>
            Datenschutzerklärung
          </h1>

          <div style={{ 
            fontSize: '1rem', 
            lineHeight: 1.8,
            color: '#333'
          }}>
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                1. Datenschutz auf einen Blick
              </h2>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                2. Verantwortlicher
              </h2>
              <p>
                Verantwortlicher im Sinne der DSGVO:<br />
                <strong>[FIRMENNAME]</strong><br />
                [STRASSE HAUSNUMMER]<br />
                [PLZ ORT]<br />
                Deutschland<br />
                E-Mail: [EMAIL-ADRESSE]
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                3. Datenverarbeitung bei der HEIC-Konvertierung
              </h2>
              <div style={{ 
                padding: '1.5rem',
                backgroundColor: '#d4edda',
                borderRadius: '8px',
                border: '1px solid #28a745',
                marginBottom: '1rem'
              }}>
                <h4 style={{ color: '#155724', marginBottom: '1rem' }}>
                  ✅ Wichtig: Keine Datei-Uploads
                </h4>
                <p style={{ margin: 0 }}>
                  Ihre HEIC-Dateien werden <strong>niemals an unsere Server übertragen</strong>. 
                  Die gesamte Konvertierung erfolgt lokal in Ihrem Browser mittels JavaScript. 
                  Wir haben zu keinem Zeitpunkt Zugriff auf Ihre Bilddateien.
                </p>
              </div>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Technische Details</h3>
              <ul>
                <li>Konvertierung erfolgt mittels Browser-basierter JavaScript-Bibliotheken</li>
                <li>Keine Server-seitige Verarbeitung von Bilddateien</li>
                <li>Ihre Dateien verlassen niemals Ihr Gerät</li>
                <li>Kein Zwischenspeichern oder Logging von Bildinhalten</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                4. Datenerhebung beim Besuch der Website
              </h2>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Log-Dateien</h3>
              <p>
                Bei jedem Zugriff auf unsere Website werden automatisch Informationen in 
                Server-Log-Dateien gespeichert:
              </p>
              <ul>
                <li>IP-Adresse (anonymisiert nach 24 Stunden)</li>
                <li>Datum und Uhrzeit der Anfrage</li>
                <li>Inhalt der Anforderung (konkrete Seite)</li>
                <li>Zugriffsstatus/HTTP-Statuscode</li>
                <li>Browser-Typ und Version</li>
                <li>Betriebssystem</li>
                <li>Referrer URL (zuvor besuchte Seite)</li>
              </ul>
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse 
                an der Funktionsfähigkeit der Website)<br />
                <strong>Speicherdauer:</strong> 30 Tage, IP-Adressen werden nach 24 Stunden anonymisiert
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                5. Google Analytics
              </h2>
              <p>
                Diese Website nutzt Google Analytics zur Analyse des Nutzerverhaltens. 
                Google Analytics verwendet Cookies und ähnliche Technologien.
              </p>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Datenverarbeitung</h3>
              <ul>
                <li>IP-Anonymisierung ist aktiviert (anonymizeIP)</li>
                <li>Demografische Merkmale und Interessensberichte (falls aktiviert)</li>
                <li>Verweildauer, Seitenaufrufe, Bounce-Rate</li>
                <li>Browser, Gerät, ungefährer Standort (Land/Region)</li>
              </ul>
              
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung über Cookie-Banner)<br />
                <strong>Datenübertragung:</strong> USA (Angemessenheitsbeschluss)<br />
                <strong>Widerspruch:</strong> Google Analytics Opt-out Browser Add-on oder 
                Cookie-Einstellungen ändern
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                6. Google AdSense
              </h2>
              <p>
                Diese Website nutzt Google AdSense zur Anzeige von Werbung. AdSense verwendet 
                Cookies und ähnliche Technologien für personalisierte Werbung.
              </p>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Datenverarbeitung</h3>
              <ul>
                <li>Cookie-basierte Wiedererkennung</li>
                <li>Interessensbasierte Werbung (falls zugestimmt)</li>
                <li>Anzeigenimpressionen und Klicks</li>
                <li>Browser- und Geräteinformationen</li>
              </ul>
              
              <p>
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)<br />
                <strong>Personalisierte Werbung:</strong> Nur nach expliziter Zustimmung<br />
                <strong>Widerspruch:</strong> Google Ads Settings oder Cookie-Einstellungen
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                7. Consent Management Platform (CMP)
              </h2>
              <p>
                Wir verwenden eine Consent Management Platform, um Ihre Einwilligungen zu 
                Cookies und Datenverarbeitung einzuholen und zu verwalten.
              </p>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Kategorien</h3>
              <ul>
                <li><strong>Notwendig:</strong> Grundfunktionen der Website (immer aktiv)</li>
                <li><strong>Analytik:</strong> Google Analytics (opt-in)</li>
                <li><strong>Marketing:</strong> Personalisierte Werbung (opt-in)</li>
              </ul>
              
              <p>
                Sie können Ihre Einstellungen jederzeit über das Cookie-Banner oder den 
                Link im Footer ändern.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                8. Ihre Rechte nach der DSGVO
              </h2>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Sie haben folgende Rechte:</h3>
              <ul>
                <li><strong>Auskunft (Art. 15 DSGVO):</strong> Welche Daten über Sie gespeichert sind</li>
                <li><strong>Berichtigung (Art. 16 DSGVO):</strong> Korrektur unrichtiger Daten</li>
                <li><strong>Löschung (Art. 17 DSGVO):</strong> "Recht auf Vergessenwerden"</li>
                <li><strong>Einschränkung (Art. 18 DSGVO):</strong> Begrenzung der Verarbeitung</li>
                <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Daten in maschinenlesbarem Format</li>
                <li><strong>Widerspruch (Art. 21 DSGVO):</strong> Gegen Datenverarbeitung</li>
                <li><strong>Widerruf (Art. 7 DSGVO):</strong> Einwilligung zurückziehen</li>
              </ul>
              
              <p>
                Zur Ausübung Ihrer Rechte wenden Sie sich an: [EMAIL-ADRESSE]<br />
                Sie haben außerdem das Recht zur Beschwerde bei einer Aufsichtsbehörde.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                9. Datensicherheit
              </h2>
              <p>
                Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung 
                personenbezogener Daten SSL/TLS-Verschlüsselung. Verschlüsselte Verbindungen 
                erkennen Sie am "https://" in der Adresszeile und am Schloss-Symbol.
              </p>
              
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Maßnahmen:</h3>
              <ul>
                <li>SSL/TLS-Verschlüsselung für alle Übertragungen</li>
                <li>Sichere Server-Konfiguration</li>
                <li>Regelmäßige Sicherheitsupdates</li>
                <li>Minimierung der Datenerhebung</li>
                <li>Lokale Bildverarbeitung (keine Uploads)</li>
              </ul>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                10. Kinder und Jugendliche
              </h2>
              <p>
                Diese Website richtet sich nicht speziell an Kinder unter 16 Jahren. 
                Wir erheben nicht wissentlich personenbezogene Daten von Kindern ohne 
                Einwilligung der Erziehungsberechtigten.
              </p>
              <p>
                Falls wir feststellen, dass Daten von Kindern ohne entsprechende Einwilligung 
                gesammelt wurden, werden wir diese unverzüglich löschen.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                11. Änderungen der Datenschutzerklärung
              </h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung bei Änderungen der 
                Website oder bei Änderungen der rechtlichen Bestimmungen anzupassen. 
                Die aktuelle Version finden Sie stets unter dieser URL.
              </p>
              <p>
                Bei wesentlichen Änderungen werden wir Sie über ein Banner auf der 
                Website informieren.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                12. Kontakt
              </h2>
              <p>
                Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen 
                Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten 
                wenden Sie sich an:
              </p>
              <p>
                <strong>Datenschutzverantwortlicher:</strong><br />
                [VERANTWORTLICHER NAME]<br />
                [EMAIL-ADRESSE]<br />
                [TELEFONNUMMER] (optional)
              </p>
            </section>

            <div style={{ 
              marginTop: '3rem',
              padding: '1.5rem',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #dee2e6',
              textAlign: 'center'
            }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#6c757d' }}>
                Letzte Aktualisierung: [DATUM]<br />
                Diese Datenschutzerklärung wurde erstellt für heic-zu-jpg.de
              </p>
            </div>

            <div style={{ 
              marginTop: '2rem',
              padding: '1rem',
              backgroundColor: '#d4edda',
              borderRadius: '8px',
              border: '1px solid #28a745'
            }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#155724' }}>
                <strong>Datenschutz-Highlight:</strong> Ihre HEIC-Dateien werden ausschließlich 
                lokal in Ihrem Browser verarbeitet. Wir haben zu keinem Zeitpunkt Zugriff auf 
                Ihre Bilddateien - maximaler Datenschutz garantiert.
              </p>
            </div>

            <div style={{ 
              marginTop: '1rem',
              padding: '1rem',
              backgroundColor: '#fff3cd',
              borderRadius: '8px',
              border: '1px solid #ffc107'
            }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#856404' }}>
                <strong>Hinweis für Implementierung:</strong> Bitte ersetzen Sie alle Platzhalter 
                in eckigen Klammern [BEISPIEL] durch Ihre tatsächlichen Daten und passen Sie die 
                Datenschutzerklärung an Ihre konkrete Datenverarbeitung an.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 