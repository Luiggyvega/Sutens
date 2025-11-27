import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sanity from '@sanity/astro';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  adapter: vercel(),
  integrations: [
    sanity({
      projectId: 'qw97bn6o',
      dataset: 'production',
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  ],
});