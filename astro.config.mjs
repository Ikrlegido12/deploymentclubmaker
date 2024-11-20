import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import auth from 'auth-astro';

import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [react(), auth(), tailwind()],
  output: 'server',
  adapter: vercel()
});