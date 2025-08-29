'use client';

import { useState } from 'react';

export type OutputFormat = 'jpg' | 'png' | 'webp';

interface FormatSwitcherProps {
  selectedFormat: OutputFormat;
  onFormatChange: (format: OutputFormat) => void;
}

export function FormatSwitcher({ selectedFormat, onFormatChange }: FormatSwitcherProps) {
  const formats = [
    { value: 'jpg', label: 'JPG', description: 'Standard, klein' },
    { value: 'png', label: 'PNG', description: 'Verlustarm, Transparenz' },
    { value: 'webp', label: 'WEBP', description: 'Modern, effizient' },
  ] as const;

  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
        Ausgabeformat:
      </label>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {formats.map((format) => (
          <button
            key={format.value}
            type="button"
            onClick={() => onFormatChange(format.value)}
            style={{
              padding: '0.75rem 1rem',
              border: `2px solid ${selectedFormat === format.value ? '#007bff' : '#dee2e6'}`,
              borderRadius: '4px',
              backgroundColor: selectedFormat === format.value ? '#007bff' : 'white',
              color: selectedFormat === format.value ? 'white' : '#333',
              cursor: 'pointer',
              fontSize: '0.9rem',
              fontWeight: selectedFormat === format.value ? 'bold' : 'normal',
              transition: 'all 0.2s ease',
              textAlign: 'center',
              minWidth: '100px'
            }}
          >
            <div>{format.label}</div>
            <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>
              {format.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
} 