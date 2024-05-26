import { test, expect } from '@playwright/test';
import { HomePage } from './pages/homePage';

test('verify home page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate();
    await homePage.verifyHomePage();
});
