import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const routes = ["/", "/services", "/pricing", "/about", "/contact"];

const baseUrl = "https://dialinbuilding.ca/";
const outputDir = join(__dirname, "../public");
const outputPath = join(outputDir, "sitemap.xml");

// Generate sitemap XML content
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `
    )
    .join("")}
</urlset>`;

// Create public directory if it doesn't exist
mkdirSync(outputDir, { recursive: true });

// Write sitemap file
writeFileSync(outputPath, sitemap);
console.log(`✅ Sitemap generated at: ${outputPath}`);
