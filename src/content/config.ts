import { defineCollection, z } from "astro:content"

const proyect = defineCollection({
  type: "content",
  schema: z.object({
    order: z.number(),
    title: z.string(),
    mainImg: z.string(),
  }),
})

export const collections = { proyect }
