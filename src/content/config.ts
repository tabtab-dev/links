import { z, defineCollection } from 'astro:content';

const linksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    description: z.string().optional(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    icon: z.string().optional(),
  }),
});

export const collections = {
  links: linksCollection,
};