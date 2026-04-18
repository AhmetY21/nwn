import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://ahmety21.github.io",
  base: "/nwn",
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    mdx()
  ],
  markdown: {
    shikiConfig: {
      theme: "github-light"
    }
  }
});
