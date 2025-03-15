import { paraglideVitePlugin } from '@inlang/paraglide-js';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/lib/paraglide',
      strategy: ['url', 'cookie', 'baseLocale'],
      urlPatterns: [
        {
          pattern: 'http://localhost:5173/:path(.*)?',
          localized: [
            ['en', 'http://localhost:5173/:path(.*)?'],
            ['de', 'http://localhost:5173/de/:path(.*)?'],
          ],
        },
      ],
    }),
    sveltekit(),
  ],
});
