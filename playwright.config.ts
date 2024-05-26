import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src', 
  retries: 1,
  timeout: 60000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'retain-on-failure', 
  },
});
