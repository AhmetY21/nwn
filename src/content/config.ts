import { defineCollection, z } from "astro:content";
import { CATEGORY_KEYS } from "../consts";

const posts = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(10),
      description: z.string().min(20),
      publishDate: z.date(),
      updatedDate: z.date().optional(),
      category: z.enum(CATEGORY_KEYS),
      tags: z.array(z.string().min(2)).min(1),
      coverImage: image(),
      coverImageAlt: z.string().min(8),
      author: z.string().min(3),
      readingTime: z.number().int().positive(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false)
    })
});

export const collections = { posts };
