'use client';

import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  customItems?: BreadcrumbItem[];
}

export function Breadcrumbs({ customItems }: BreadcrumbsProps) {
  const pathname = usePathname();

  // 定义路径映射
  const pathMapping: Record<string, string> = {
    '/': 'HEIC Konverter',
    '/faq': 'FAQ',
    '/anleitung': 'Anleitungen',
    '/anleitung/iphone-heic-zu-jpg': 'iPhone HEIC zu JPG',
    '/anleitung/windows-heic-zu-jpg': 'Windows HEIC zu JPG', 
    '/anleitung/mac-heic-zu-jpg': 'Mac HEIC zu JPG',
    '/heic-in-png-umwandeln': 'HEIC zu PNG',
    '/heic-in-webp-umwandeln': 'HEIC zu WEBP',
    '/was-ist-heic': 'Was ist HEIC?',
    '/heic-vs-jpg': 'HEIC vs JPG',
    '/impressum': 'Impressum',
    '/datenschutz': 'Datenschutz'
  };

  // 生成面包屑项目
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (customItems) {
      return [{ label: 'Home', href: '/' }, ...customItems];
    }

    const items: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];
    
    if (pathname === '/') {
      return items;
    }

    const pathSegments = pathname.split('/').filter(Boolean);
    let currentPath = '';

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // 检查是否是最后一个段落
      const isLast = index === pathSegments.length - 1;
      
      if (pathMapping[currentPath]) {
        items.push({
          label: pathMapping[currentPath],
          href: isLast ? '' : currentPath // 最后一项不需要链接
        });
      } else {
        // 处理动态路径或未映射的路径
        const label = segment.split('-').map(word => 
          word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
        
        items.push({
          label,
          href: isLast ? '' : currentPath
        });
      }
    });

    return items;
  };

  const breadcrumbs = generateBreadcrumbs();

  // 如果只有Home，不显示面包屑
  if (breadcrumbs.length <= 1) {
    return null;
  }

  return (
    <nav 
      aria-label="Breadcrumb"
      style={{ 
        padding: '1rem 0',
        borderBottom: '1px solid #e9ecef',
        marginBottom: '2rem'
      }}
    >
      <ol style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '0.5rem',
        margin: 0,
        padding: 0,
        listStyle: 'none',
        fontSize: '0.9rem'
      }}>
        {breadcrumbs.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            {index > 0 && (
              <span style={{ 
                margin: '0 0.5rem',
                color: '#6c757d',
                fontSize: '0.8rem'
              }}>
                ›
              </span>
            )}
            
            {item.href ? (
              <a 
                href={item.href}
                style={{
                  color: '#007bff',
                  textDecoration: 'none',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '4px',
                  transition: 'background-color 0.2s'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8f9fa';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {item.label}
              </a>
            ) : (
              <span style={{ 
                color: '#6c757d',
                fontWeight: '500',
                padding: '0.25rem 0.5rem'
              }}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
} 