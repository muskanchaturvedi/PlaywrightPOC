import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    browserName: 'chromium',
    headless: false,  // Ensure headless is set to false
    baseURL: 'https://d28j9pfwubj8q5.cloudfront.net/5U5PU/S2xbn',
    viewport: { width: 1263, height: 4636 }, // Customize the viewport size
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  testDir: 'src/tests',
};

export default config;
