import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: 'https://heic-zu-jpg.de/sitemap.xml',
    host: 'https://heic-zu-jpg.de',
  };
}