import { glob } from "astro/loaders"
import { defineCollection } from "astro:content"
import { z } from "astro/zod"

const projects = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      mainImg: image(),
      detailsImages: z.array(image()),
      links: z.array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        }),
      ),
    }),
})

export const collections = { projects }
