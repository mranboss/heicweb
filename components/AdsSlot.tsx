'use client';

import { useEffect, useState, useRef } from 'react';

interface AdsSlotProps {
  slotId: string;
  height?: number;
  width?: string | number;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  priority?: 'high' | 'medium' | 'low';
}

export function AdsSlot({ 
  slotId, 
  height = 280, 
  width = '100%',
  format = 'auto',
  priority = 'medium'
}: AdsSlotProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasConsent, setHasConsent] = useState(false);
  const adRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '100px' // Load when ad is 100px away from viewport
      }
    );

    if (adRef.current) {
      observer.observe(adRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Check consent status
  useEffect(() => {
    // Simulate consent check - in production, integrate with your CMP
    const checkConsent = () => {
      const consent = localStorage.getItem('cookie-consent');
      setHasConsent(consent === 'accepted');
    };

    checkConsent();
    
    // Listen for consent changes
    window.addEventListener('consentUpdate', checkConsent);
    return () => window.removeEventListener('consentUpdate', checkConsent);
  }, []);

  // Load AdSense only when visible and consent given
  useEffect(() => {
    if (isVisible && hasConsent && typeof window !== 'undefined') {
      // Delayed loading to not block initial page render
      const timer = setTimeout(() => {
        if (window.adsbygoogle) {
          try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (error) {
            console.error('AdSense error:', error);
          }
        }
      }, priority === 'high' ? 100 : priority === 'medium' ? 500 : 1000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, hasConsent, priority]);

  return (
    <div
      ref={adRef}
      style={{
        minHeight: height,
        width: width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f9fa',
        border: '2px dashed #007bff',
        borderRadius: '8px',
        marginBottom: '2rem',
        position: 'relative'
      }}
    >
      {!hasConsent ? (
        // Show consent message
        <div style={{
          textAlign: 'center',
          color: '#6c757d',
          fontSize: '0.9rem',
          padding: '1rem'
        }}>
          <div style={{ marginBottom: '0.5rem' }}>🍪</div>
          <div>Werbung wird nach Cookie-Zustimmung angezeigt</div>
          <small style={{ fontSize: '0.8rem', opacity: 0.7 }}>
            DSGVO-konform • Keine personalisierte Werbung ohne Einwilligung
          </small>
        </div>
      ) : !isVisible ? (
        // Show loading placeholder
        <div style={{
          textAlign: 'center',
          color: '#007bff',
          fontSize: '0.9rem',
          fontWeight: 'bold'
        }}>
          📺 Werbung wird geladen...<br />
          <small style={{ fontSize: '0.8rem', opacity: 0.7 }}>
            Lazy Loading • {slotId}
          </small>
        </div>
      ) : (
        // Show ad placeholder (development) or real ad (production)
        <>
          <div style={{
            textAlign: 'center',
            color: '#007bff',
            fontSize: '0.9rem',
            fontWeight: 'bold'
          }}>
            📺 DEUTSCHE WERBUNG<br />
            <small style={{ fontSize: '0.8rem', opacity: 0.7 }}>
              AdSense DE • {slotId}<br />
              Lazy Loaded • Consent Mode v2
            </small>
          </div>
          
          {/* Real AdSense code - hidden in development */}
          <ins
            className="adsbygoogle"
            style={{
              display: 'none', // Change to 'block' in production
              width: '100%',
              height: height
            }}
            data-ad-client="ca-pub-9540832620603421"
            data-ad-slot={slotId}
            data-ad-format={format}
            data-full-width-responsive="true"
            data-ad-region="main-content"
          />
        </>
      )}
    </div>
  );
} 