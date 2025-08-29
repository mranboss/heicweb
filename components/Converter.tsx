'use client';

import { useState, useCallback, useEffect } from 'react';
import { FormatSwitcher, OutputFormat } from './FormatSwitcher';

// Dynamic imports to avoid SSR issues
let heic2any: any;
let JSZip: any;
let saveAs: any;

interface ConvertedFile {
  name: string;
  blob: Blob;
  size: number;
}

export function Converter() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [outputFormat, setOutputFormat] = useState<OutputFormat>('jpg');
  const [quality, setQuality] = useState<number>(0.8);
  const [removeExif, setRemoveExif] = useState<boolean>(false);
  const [isConverting, setIsConverting] = useState<boolean>(false);
  const [convertedFiles, setConvertedFiles] = useState<ConvertedFile[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Load libraries only on client side
  useEffect(() => {
    const loadLibraries = async () => {
      try {
        const [heic2anyModule, JSZipModule, fileSaverModule] = await Promise.all([
          import('heic2any'),
          import('jszip'),
          import('file-saver')
        ]);
        
        heic2any = heic2anyModule.default;
        JSZip = JSZipModule.default;
        saveAs = fileSaverModule.saveAs;
        setIsLoaded(true);
      } catch (error) {
        console.error('Failed to load conversion libraries:', error);
      }
    };
    
    loadLibraries();
  }, []);

  const handleFileSelect = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      setFiles(selectedFiles);
      setConvertedFiles([]);
    }
  }, []);

  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles) {
      setFiles(droppedFiles);
      setConvertedFiles([]);
    }
  }, []);

  const handleDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const convertFile = async (file: File): Promise<ConvertedFile> => {
    try {
      const converted = await heic2any({
        blob: file,
        toType: `image/${outputFormat}`,
        quality: outputFormat === 'png' ? 1 : quality,
      });

      const blob = Array.isArray(converted) ? converted[0] : converted;
      const fileName = file.name.replace(/\.(heic|heif)$/i, `.${outputFormat}`);

      return {
        name: fileName,
        blob: blob as Blob,
        size: (blob as Blob).size
      };
    } catch (error) {
      console.error('Conversion error:', error);
      throw new Error(`Fehler beim Konvertieren von ${file.name}`);
    }
  };

  const handleConvert = async () => {
    if (!files || files.length === 0) return;

    setIsConverting(true);
    setProgress(0);
    const results: ConvertedFile[] = [];

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.toLowerCase().includes('heic') || file.type.toLowerCase().includes('heif') || 
            file.name.toLowerCase().endsWith('.heic') || file.name.toLowerCase().endsWith('.heif')) {
          
          const converted = await convertFile(file);
          results.push(converted);
          setProgress(((i + 1) / files.length) * 100);
        }
      }

      setConvertedFiles(results);
    } catch (error) {
      console.error('Conversion failed:', error);
      alert('Fehler bei der Konvertierung. Bitte versuchen Sie es erneut.');
    } finally {
      setIsConverting(false);
      setProgress(0);
    }
  };

  const downloadSingle = (file: ConvertedFile) => {
    saveAs(file.blob, file.name);
  };

  const downloadAll = async () => {
    if (convertedFiles.length === 0) return;

    if (convertedFiles.length === 1) {
      downloadSingle(convertedFiles[0]);
      return;
    }

    const zip = new JSZip();
    convertedFiles.forEach((file) => {
      zip.file(file.name, file.blob);
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    saveAs(zipBlob, `converted-images.zip`);
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      {/* File Upload Area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        style={{
          border: '2px dashed #007bff',
          borderRadius: '8px',
          padding: '2rem',
          textAlign: 'center',
          backgroundColor: '#f8f9fa',
          marginBottom: '1rem',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
        onClick={() => document.getElementById('file-input')?.click()}
      >
        <input
          id="file-input"
          type="file"
          multiple
          accept=".heic,.heif"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
        <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>📷</div>
        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          HEIC-Dateien hierher ziehen oder klicken
        </div>
        <div style={{ color: '#6c757d', fontSize: '0.9rem' }}>
          Unterstützte Formate: .heic, .heif
        </div>
      </div>

      {/* Format Settings */}
      <FormatSwitcher selectedFormat={outputFormat} onFormatChange={setOutputFormat} />

      {/* Quality Settings */}
      {(outputFormat === 'jpg' || outputFormat === 'webp') && (
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Qualität: {Math.round(quality * 100)}%
          </label>
          <input
            type="range"
            min="0.1"
            max="1"
            step="0.1"
            value={quality}
            onChange={(e) => setQuality(parseFloat(e.target.value))}
            style={{ width: '100%' }}
          />
        </div>
      )}

      {/* EXIF Settings */}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <input
            type="checkbox"
            checked={removeExif}
            onChange={(e) => setRemoveExif(e.target.checked)}
          />
          EXIF-Daten entfernen (empfohlen für Datenschutz)
        </label>
      </div>

      {/* Selected Files */}
      {files && files.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <h3>Ausgewählte Dateien ({files.length})</h3>
          <div style={{ maxHeight: '200px', overflow: 'auto', border: '1px solid #dee2e6', borderRadius: '4px', padding: '0.5rem' }}>
            {Array.from(files).map((file, index) => (
              <div key={index} style={{ padding: '0.25rem 0', borderBottom: '1px solid #f0f0f0' }}>
                <div style={{ fontWeight: 'bold' }}>{file.name}</div>
                <div style={{ fontSize: '0.85rem', color: '#6c757d' }}>
                  {formatFileSize(file.size)}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Convert Button */}
      <button
        onClick={handleConvert}
        disabled={!files || files.length === 0 || isConverting || !isLoaded}
        style={{
          width: '100%',
          padding: '1rem',
          backgroundColor: (!files || files.length === 0 || isConverting || !isLoaded) ? '#6c757d' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          cursor: (!files || files.length === 0 || isConverting || !isLoaded) ? 'not-allowed' : 'pointer',
          marginBottom: '1rem'
        }}
      >
        {!isLoaded ? 'Lade Konverter...' : isConverting ? `Konvertiere... ${Math.round(progress)}%` : 'Jetzt umwandeln'}
      </button>

      {/* Progress Bar */}
      {isConverting && (
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ 
            width: '100%', 
            height: '8px', 
            backgroundColor: '#e9ecef', 
            borderRadius: '4px', 
            overflow: 'hidden' 
          }}>
            <div style={{ 
              width: `${progress}%`, 
              height: '100%', 
              backgroundColor: '#007bff', 
              transition: 'width 0.3s ease' 
            }} />
          </div>
        </div>
      )}

      {/* Converted Files */}
      {convertedFiles.length > 0 && (
        <div>
          <h3>Konvertierte Dateien ({convertedFiles.length})</h3>
          <div style={{ marginBottom: '1rem' }}>
            <button
              onClick={downloadAll}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginBottom: '1rem'
              }}
            >
              {convertedFiles.length === 1 ? 'Datei herunterladen' : 'Alle als ZIP herunterladen'}
            </button>
          </div>
          
          <div style={{ border: '1px solid #dee2e6', borderRadius: '4px' }}>
            {convertedFiles.map((file, index) => (
              <div key={index} style={{ 
                padding: '1rem', 
                borderBottom: index < convertedFiles.length - 1 ? '1px solid #f0f0f0' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontWeight: 'bold' }}>{file.name}</div>
                  <div style={{ fontSize: '0.85rem', color: '#6c757d' }}>
                    {formatFileSize(file.size)}
                  </div>
                </div>
                <button
                  onClick={() => downloadSingle(file)}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.9rem'
                  }}
                >
                  ⬇ Download
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 