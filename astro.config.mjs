import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()], // Usa el adaptador de Vercel sin '/serverless'
});
