import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['../../packages/shared/setupTests/mongo-memory-server.ts'],
    ...(process.env['CI'] && {
      minThreads: 4,
      maxThreads: 4
    })
  },
})
