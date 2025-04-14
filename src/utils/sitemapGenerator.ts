export const generateSitemap = (routes: string[]) => {
  const baseUrl = 'https://dial-in-maintenance.netlify.app';
  const urls = routes.map(route => `${baseUrl}${route}`);
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `
    <url>
      <loc>${url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('')}
</urlset>`;
};
