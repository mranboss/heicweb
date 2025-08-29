'use client';

import { getPageMetadata } from '@/lib/seo';

export const metadata = getPageMetadata(
  'Seite nicht gefunden - 404 Fehler',
  'Die angeforderte Seite wurde nicht gefunden. Kehren Sie zur Startseite zurück oder nutzen Sie unseren HEIC zu JPG Konverter.',
  '/404',
  true // noIndex
);

export default function NotFound() {
  return (
    <div style={{ 
      padding: '4rem 1rem',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto'
    }}>
      {/* 404 Hero */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: '6rem',
          fontWeight: 'bold',
          color: '#007bff',
          margin: '0',
          lineHeight: 1
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#333',
          marginBottom: '1rem'
        }}>
          Seite nicht gefunden
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: '#6c757d',
          lineHeight: 1.6,
          marginBottom: '2rem'
        }}>
          Die angeforderte Seite existiert nicht oder wurde verschoben. 
          Möglicherweise haben Sie sich vertippt oder der Link ist veraltet.
        </p>
      </div>

      {/* Action Buttons */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center',
        marginBottom: '3rem'
      }}>
        <a 
          href="/"
          style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}
        >
          🏠 Zur Startseite
        </a>
        
        <button
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.history.back();
            }
          }}
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: 'transparent',
            color: '#007bff',
            border: '2px solid #007bff',
            borderRadius: '6px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          ← Zurück zur vorherigen Seite
        </button>
      </div>

      {/* Quick Links */}
      <div style={{ 
        padding: '2rem',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        border: '1px solid #dee2e6'
      }}>
        <h3 style={{
          fontSize: '1.3rem',
          fontWeight: 'bold',
          marginBottom: '1.5rem',
          color: '#333'
        }}>
          Beliebte Seiten
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          <a 
            href="/"
            style={{
              color: '#007bff',
              textDecoration: 'none',
              padding: '0.75rem',
              backgroundColor: 'white',
              borderRadius: '4px',
              border: '1px solid #dee2e6',
              display: 'block'
            }}
          >
            <strong>HEIC zu JPG</strong><br />
            <small>Hauptkonverter</small>
          </a>
          
          <a 
            href="/faq"
            style={{
              color: '#007bff',
              textDecoration: 'none',
              padding: '0.75rem',
              backgroundColor: 'white',
              borderRadius: '4px',
              border: '1px solid #dee2e6',
              display: 'block'
            }}
          >
            <strong>FAQ</strong><br />
            <small>Häufige Fragen</small>
          </a>
          
          <a 
            href="/anleitung/iphone-heic-zu-jpg"
            style={{
              color: '#007bff',
              textDecoration: 'none',
              padding: '0.75rem',
              backgroundColor: 'white',
              borderRadius: '4px',
              border: '1px solid #dee2e6',
              display: 'block'
            }}
          >
            <strong>iPhone Guide</strong><br />
            <small>iOS Anleitung</small>
          </a>
          
          <a 
            href="/was-ist-heic"
            style={{
              color: '#007bff',
              textDecoration: 'none',
              padding: '0.75rem',
              backgroundColor: 'white',
              borderRadius: '4px',
              border: '1px solid #dee2e6',
              display: 'block'
            }}
          >
            <strong>Was ist HEIC?</strong><br />
            <small>Format erklärt</small>
          </a>
        </div>
      </div>

      {/* Search Suggestion */}
      <div style={{ 
        marginTop: '2rem',
        padding: '1rem',
        color: '#6c757d',
        fontSize: '0.9rem'
      }}>
        <p>
          <strong>Tipp:</strong> Verwenden Sie die Navigation oben oder suchen Sie nach 
          "HEIC zu JPG", "PNG konvertieren" oder "iPhone Bilder umwandeln".
        </p>
      </div>

      {/* Sitemap Link */}
      <div style={{
        marginTop: '2rem',
        padding: '1.5rem',
        backgroundColor: '#e8f4fd',
        borderRadius: '8px',
        border: '1px solid #007bff',
        textAlign: 'center'
      }}>
        <h4 style={{
          fontSize: '1.1rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#007bff'
        }}>
          🗺️ Alle Seiten anzeigen
        </h4>
        <p style={{
          marginBottom: '1rem',
          fontSize: '0.95rem',
          color: '#333'
        }}>
          Hier finden Sie eine vollständige Übersicht aller verfügbaren Seiten:
        </p>
        <a 
          href="/api/sitemap"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007bff',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            fontSize: '1rem'
          }}
        >
          📋 Sitemap anzeigen
        </a>
      </div>
    </div>
  );
} 