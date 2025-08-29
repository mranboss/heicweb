export const siteConfig = {
  name: 'HEIC zu JPG Konverter',
  description: 'Konvertieren Sie HEIC zu JPG online. 100% lokal im Browser – keine Datei-Uploads, kostenlos, hohe Qualität, Stapelverarbeitung.',
  url: 'https://heic-zu-jpg.de',
  ogImage: 'https://heic-zu-jpg.de/og-image.png',
  links: {
    github: 'https://github.com/heic-zu-jpg',
  },
};

export type SiteConfig = typeof siteConfig;

export function getPageMetadata(
  title: string,
  description: string,
  path: string = '',
  noIndex: boolean = false
) {
  const url = `${siteConfig.url}${path}`;
  
  return {
    title,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [siteConfig.ogImage],
    },
    robots: noIndex ? 'noindex,nofollow' : 'index,follow',
  };
} 