import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://heic-zu-jpg.de';
  const now = new Date();

  const paths = [
    '',
    'faq',
    'anleitung/iphone-heic-zu-jpg',
    'anleitung/windows-heic-zu-jpg',
    'anleitung/mac-heic-zu-jpg',
    'heic-in-png-umwandeln',
    'heic-in-webp-umwandeln',
    'was-ist-heic',
    'heic-vs-jpg',
  ];

  return paths.map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: now,
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1.0 : 0.8,
  }));
}
