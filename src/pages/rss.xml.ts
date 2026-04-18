import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { SITE } from "../consts";
import { getAllPosts } from "../utils/content";
import { withBase } from "../utils/format";

export const GET: APIRoute = async (context) => {
  const posts = await getAllPosts();

  return rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: withBase(`/makaleler/${post.slug}`)
    }))
  });
};
