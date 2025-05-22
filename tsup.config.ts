// tsup.config.ts - Minimal browser config
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  clean: true,
  platform: 'neutral', // Use neutral to avoid Node.js assumptions
  target: 'esnext',
  external: [
    // Mark problematic Node.js modules as external
    'http', 'https', 'crypto', 'buffer', 'events', 'stream', 'fs', 'path'
  ],
})