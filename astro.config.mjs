import { defineConfig } from 'astro/config';


import react from '@astrojs/react';


import sentry from '@sentry/astro';
import spotlightjs from '@spotlightjs/astro';


import auth from 'auth-astro';


// https://astro.build/config
export default defineConfig({
  integrations: [react(), sentry(), spotlightjs(), auth()]
});