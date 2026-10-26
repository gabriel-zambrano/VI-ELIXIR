// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vi-elixir.com',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
