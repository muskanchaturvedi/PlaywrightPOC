import { test as baseTest } from '@playwright/test';

export const test = baseTest.extend({
  maximizeWindow: async ({ page }, use) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await use(page);
  },
});

export const expect = baseTest.expect;
