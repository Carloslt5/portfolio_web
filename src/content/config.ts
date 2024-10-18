import { defineCollection, z } from "astro:content"

const proyects = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      mainImg: image(),
    }),
})

export const collections = { proyects }
