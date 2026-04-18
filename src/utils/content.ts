import { getCollection, type CollectionEntry } from "astro:content";

export type PostEntry = CollectionEntry<"posts">;

export async function getAllPosts(): Promise<PostEntry[]> {
  const posts = await getCollection("posts", ({ data }) => !data.draft);

  return posts.sort(
    (left, right) =>
      right.data.publishDate.getTime() - left.data.publishDate.getTime()
  );
}

