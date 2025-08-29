import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://heic-zu-jpg.de';
  
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
    'impressum',
    'datenschutz'
  ];

  const currentDate = new Date().toISOString();

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map(path => `  <url>
    <loc>${baseUrl}/${path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new NextResponse(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 