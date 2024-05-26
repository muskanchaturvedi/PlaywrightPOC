import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './src',
    use: {
        headless: false, // Set to true if you want to run tests headlessly
        baseURL: 'https://automationexercise.com/',
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
    timeout: 60000,
});
