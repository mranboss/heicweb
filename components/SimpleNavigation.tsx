'use client';

import { useState } from 'react';

export function SimpleNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav style={{
      backgroundColor: 'white',
      borderBottom: '1px solid #dee2e6',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        {/* Desktop Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '60px'
        }}>
          {/* Logo */}
          <a 
            href="/" 
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#007bff',
              textDecoration: 'none'
            }}
          >
            🔄 HEIC Konverter
          </a>

          {/* Desktop Menu */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2rem'
          }}>
            <div style={{ display: 'none' }}>
              {/* Will be shown via CSS media query */}
            </div>
            
            {/* Always visible simple menu */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}>
              <a href="/faq" style={navLinkStyle}>FAQ</a>
              <a href="/was-ist-heic" style={navLinkStyle}>Was ist HEIC?</a>
              <a href="/anleitung/iphone-heic-zu-jpg" style={navLinkStyle}>📱 iPhone</a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{
                  background: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}
              >
                {isMenuOpen ? 'Weniger ▲' : 'Mehr ▼'}
              </button>
            </div>
          </div>
        </div>

        {/* Expanded Menu */}
        {isMenuOpen && (
          <div style={{
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '1rem',
            border: '1px solid #dee2e6'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem'
            }}>
              {/* Formate */}
              <div>
                <h4 style={{ 
                  color: '#007bff', 
                  marginBottom: '0.75rem',
                  fontSize: '1rem'
                }}>
                  🔄 Konverter-Formate
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a href="/" style={menuLinkStyle}>HEIC zu JPG</a>
                  <a href="/heic-in-png-umwandeln" style={menuLinkStyle}>HEIC zu PNG</a>
                  <a href="/heic-in-webp-umwandeln" style={menuLinkStyle}>HEIC zu WEBP</a>
                </div>
              </div>

              {/* Anleitungen */}
              <div>
                <h4 style={{ 
                  color: '#007bff', 
                  marginBottom: '0.75rem',
                  fontSize: '1rem'
                }}>
                  📖 Anleitungen
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a href="/anleitung/iphone-heic-zu-jpg" style={menuLinkStyle}>📱 iPhone Guide</a>
                  <a href="/anleitung/windows-heic-zu-jpg" style={menuLinkStyle}>🪟 Windows Guide</a>
                  <a href="/anleitung/mac-heic-zu-jpg" style={menuLinkStyle}>🍎 Mac Guide</a>
                </div>
              </div>

              {/* Informationen */}
              <div>
                <h4 style={{ 
                  color: '#007bff', 
                  marginBottom: '0.75rem',
                  fontSize: '1rem'
                }}>
                  ℹ️ Informationen
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a href="/was-ist-heic" style={menuLinkStyle}>Was ist HEIC?</a>
                  <a href="/heic-vs-jpg" style={menuLinkStyle}>HEIC vs JPG</a>
                  <a href="/faq" style={menuLinkStyle}>FAQ</a>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h4 style={{ 
                  color: '#007bff', 
                  marginBottom: '0.75rem',
                  fontSize: '1rem'
                }}>
                  ⚖️ Rechtliches
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <a href="/impressum" style={menuLinkStyle}>Impressum</a>
                  <a href="/datenschutz" style={menuLinkStyle}>Datenschutz</a>
                  <a href="/api/sitemap" style={menuLinkStyle}>Sitemap</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

const navLinkStyle = {
  color: '#333',
  textDecoration: 'none',
  fontSize: '0.95rem',
  fontWeight: '500',
  whiteSpace: 'nowrap' as const
};

const menuLinkStyle = {
  color: '#333',
  textDecoration: 'none',
  fontSize: '0.95rem',
  padding: '0.25rem 0'
}; 