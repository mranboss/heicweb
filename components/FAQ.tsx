'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Werden meine Bilder hochgeladen?",
    answer: "Nein, alle HEIC-Dateien werden vollständig lokal in Ihrem Browser verarbeitet. Es werden keine Dateien an unsere Server übertragen oder gespeichert."
  },
  {
    question: "Gibt es Limits für die Anzahl oder Größe der Dateien?",
    answer: "Es gibt keine künstlichen Limits. Die praktische Begrenzung hängt vom Arbeitsspeicher Ihres Browsers ab. Moderne Browser können problemlos hunderte von Bildern verarbeiten."
  },
  {
    question: "Welche Formate werden unterstützt?",
    answer: "Eingabe: HEIC und HEIF. Ausgabe: JPG (Standard), PNG oder WEBP. Sie können das Ausgabeformat nach Bedarf wählen."
  },
  {
    question: "Was passiert mit EXIF-Daten?",
    answer: "Sie können wählen, ob EXIF-Metadaten (wie GPS-Koordinaten, Kameraeinstellungen) beibehalten oder aus Datenschutzgründen entfernt werden sollen."
  },
  {
    question: "Wie ist die Bildqualität nach der Konvertierung?",
    answer: "JPG und WEBP sind verlustbehaftete Formate - die Qualität ist einstellbar (Standard: 80%). PNG ist verlustarm und behält die ursprüngliche Qualität bei."
  },
  {
    question: "Ist der Service kostenlos?",
    answer: "Ja, der Service ist vollständig kostenlos. Werbung hilft uns dabei, den Dienst bereitzustellen und zu verbessern."
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      {faqData.map((item, index) => (
        <div key={index} style={{ 
          border: '1px solid #dee2e6', 
          borderRadius: '4px', 
          marginBottom: '0.5rem',
          overflow: 'hidden'
        }}>
          <button
            onClick={() => toggleItem(index)}
            style={{
              width: '100%',
              padding: '1rem',
              backgroundColor: openItems.has(index) ? '#f8f9fa' : 'white',
              border: 'none',
              textAlign: 'left',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span>{item.question}</span>
            <span style={{ 
              fontSize: '1.2rem',
              transform: openItems.has(index) ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease'
            }}>
              ▼
            </span>
          </button>
          {openItems.has(index) && (
            <div style={{ 
              padding: '1rem',
              backgroundColor: '#f8f9fa',
              borderTop: '1px solid #dee2e6'
            }}>
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
} 