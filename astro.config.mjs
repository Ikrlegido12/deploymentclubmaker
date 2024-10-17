import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import auth from 'auth-astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [react(), auth()],
  output: 'server',
  adapter: vercel(), // Usa el adaptador de Vercel sin '/serverless'
});
