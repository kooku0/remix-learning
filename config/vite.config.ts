import { vitePlugin as remix } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

installGlobals();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';

  return {
    build: {
      outDir: 'build',
      sourcemap: true,
    },
    envDir: 'env',
    esbuild: {
      drop: isProduction ? ['console', 'debugger'] : [],
    },
    plugins: [
      remix(),
      tsconfigPaths(),
      react(),
      svgr(),
    ],
    preview: {
      host: true,
      port: 3000,
    },
    server: {
      host: true,
    },
  };
});
