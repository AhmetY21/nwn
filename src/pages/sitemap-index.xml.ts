import type { APIRoute } from "astro";
import { getAllPosts } from "../utils/content";
import { absoluteUrl } from "../utils/format";

const STATIC_PATHS = [
  "/",
  "/manifesto",
  "/hakkimda",
  "/bekleme-listesi",
  "/kaynaklar",
  "/iletisim",
  "/makaleler",
  "/tesekkurler",
  "/rss.xml"
] as const;

export const GET: APIRoute = async () => {
  const posts = await getAllPosts();
  const urls = [
    ...STATIC_PATHS.map((path) => absoluteUrl(path)),
    ...posts.map((post) => absoluteUrl(`/makaleler/${post.slug}`))
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
};
