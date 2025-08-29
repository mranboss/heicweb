import { getPageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/JsonLd';

export const metadata = getPageMetadata(
  'Impressum – heic-zu-jpg.de',
  'Impressum und Anbieterkennzeichnung für heic-zu-jpg.de.',
  '/impressum',
  true // noIndex for legal pages
);

// WebPage JSON-LD
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Impressum",
  "url": "https://heic-zu-jpg.de/impressum",
  "description": "Impressum und Anbieterkennzeichnung für heic-zu-jpg.de",
  "inLanguage": "de-DE",
  "isPartOf": {
    "@type": "WebSite",
    "name": "HEIC zu JPG Konverter",
    "url": "https://heic-zu-jpg.de"
  }
};

export default function ImpressumPage() {
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
            Impressum
          </h1>

          <div style={{ 
            fontSize: '1rem', 
            lineHeight: 1.8,
            color: '#333'
          }}>
            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                Anbieter
              </h2>
              <p>
                <strong>[FIRMENNAME]</strong><br />
                Vertreten durch: [GESCHÄFTSFÜHRER/INHABER NAME]<br />
                [STRASSE HAUSNUMMER]<br />
                [PLZ ORT]<br />
                Deutschland
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                Kontakt
              </h2>
              <p>
                E-Mail: [EMAIL-ADRESSE]<br />
                Telefon: [TELEFONNUMMER] (optional)<br />
                Website: https://heic-zu-jpg.de
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                Handelsregister / Gewerbliche Angaben
              </h2>
              <p>
                <em>Falls zutreffend:</em><br />
                Handelsregister: [HRB-NUMMER]<br />
                Registergericht: [REGISTERGERICHT]<br />
                Umsatzsteuer-Identifikationsnummer: [USt-IdNr.]
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p>
                [VERANTWORTLICHER NAME]<br />
                [ADRESSE]<br />
                [PLZ ORT]
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                EU-Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" style={{ color: '#007bff' }}>
                  https://ec.europa.eu/consumers/odr/
                </a><br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                Verbraucherstreitbeilegung/Universalschlichtungsstelle
              </h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                Haftung für Inhalte
              </h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte 
                fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine 
                rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den 
                allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch 
                erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei 
                Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                Haftung für Links
              </h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen 
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der 
                Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf 
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
                Verlinkung nicht erkennbar.
              </p>
              <p>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete 
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen 
                werden wir derartige Links umgehend entfernen.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                Urheberrecht
              </h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art 
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
                Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
                nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die 
                Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
                gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, 
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen 
                werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#007bff' }}>
                Technischer Service
              </h2>
              <p>
                Unser HEIC-zu-JPG Konvertierungsdienst wird ohne Gewähr bereitgestellt. Wir übernehmen 
                keine Garantie für die Verfügbarkeit, Funktionalität oder Qualität der Konvertierung. 
                Die Nutzung erfolgt auf eigene Verantwortung. Alle Bildverarbeitungen erfolgen lokal 
                im Browser des Nutzers - wir haben keinen Zugriff auf hochgeladene Dateien.
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
                Bei Fragen zum Impressum wenden Sie sich bitte an: [KONTAKT-EMAIL]
              </p>
            </div>

            <div style={{ 
              marginTop: '2rem',
              padding: '1rem',
              backgroundColor: '#fff3cd',
              borderRadius: '8px',
              border: '1px solid #ffc107'
            }}>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#856404' }}>
                <strong>Hinweis für Implementierung:</strong> Bitte ersetzen Sie alle Platzhalter 
                in eckigen Klammern [BEISPIEL] durch Ihre tatsächlichen Daten vor der Veröffentlichung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 