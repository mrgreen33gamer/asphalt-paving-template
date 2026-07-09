// src/app/sitemap.xml/route.ts
// Blackline Paving — XML Sitemap
import { NextResponse } from 'next/server';
import { getAllPosts } from '&/blog-posts';
import ALL_PROJECTS from '&/local-db/projects';

export const revalidate = 0;

export async function GET() {
  const baseUrl = 'https://www.blacklinepaving.com';
  const today   = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/',               priority: '1.0',  changefreq: 'weekly'  },
    { url: '/about',          priority: '0.9',  changefreq: 'monthly' },
    { url: '/services',       priority: '0.9',  changefreq: 'weekly'  },
    { url: '/projects',       priority: '0.9',  changefreq: 'weekly'  },
    { url: '/industries',     priority: '0.85', changefreq: 'monthly' },
    { url: '/service-areas',  priority: '0.85', changefreq: 'monthly' },
    { url: '/contact',        priority: '0.8',  changefreq: 'monthly' },
    { url: '/blogs',          priority: '0.7',  changefreq: 'weekly'  },
    { url: '/privacy-policy', priority: '0.4',  changefreq: 'yearly'  },
  ];

  const coreServices = [
    { url: '/services/asphalt-paving',           priority: '0.95', changefreq: 'weekly'  },
    { url: '/services/sealcoating',     priority: '0.90', changefreq: 'weekly'  },
    { url: '/services/parking-lots',         priority: '0.90', changefreq: 'weekly'  },
    { url: '/services/line-striping',  priority: '0.85', changefreq: 'monthly' },
    { url: '/services/pothole-repair',     priority: '0.85', changefreq: 'monthly' },
    { url: '/services/overlay-resurfacing', priority: '0.85', changefreq: 'monthly' },
  ];

  const industries = [
    { url: '/industries/retail-centers',          priority: '0.80', changefreq: 'monthly' },
    { url: '/industries/schools-municipal',   priority: '0.80', changefreq: 'monthly' },
    { url: '/industries/industrial-yards',        priority: '0.80', changefreq: 'monthly' },
  ];

  const projectPages = ALL_PROJECTS.map((p) => ({
    url: `/projects/${p.id}`,
    priority: '0.75',
    changefreq: 'monthly',
  }));

  const blogPages = getAllPosts().map((post) => ({
    url: `/blogs/${post.slug}`,
    priority: '0.70',
    changefreq: 'monthly',
  }));

  const allPages = [
    ...staticPages,
    ...coreServices,
    ...industries,
    ...projectPages,
    ...blogPages,
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  allPages.forEach(({ url, priority, changefreq }) => {
    xml += `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>\n`;
  });

  xml += '</urlset>';

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=300, stale-while-revalidate=60',
    },
  });
}
