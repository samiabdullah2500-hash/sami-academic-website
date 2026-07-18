import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    draft: z.boolean().optional().default(false),
    references: z.array(z.string()).optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    technologies: z.array(z.string()).optional(),
    image: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    github: z.string().optional(),
    docs: z.string().optional(),
    status: z.string().optional(),
    featured: z.boolean().optional().default(false),
    order: z.number().optional().default(0),
  }),
});

export const collections = { blog, projects };