import { defineCollection, z } from "astro:content"

const projects = defineCollection({
  type: "content",
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
