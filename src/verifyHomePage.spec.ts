import { test, expect } from '@playwright/test';

test('Verify all details on the home page of Automation Exercise website', async ({ page }) => {
  await page.goto('https://automationexercise.com/', { waitUntil: 'load' });

  // Verify landing on homepage
  await expect(page).toHaveURL('https://automationexercise.com/');

  // Verify the presence of the header
  const header = page.locator('header .header-middle');
  await expect(header).toBeVisible();

  // Verify the logo is present and visible
  const logo = page.locator('img[alt="Website for automation practice"]');
  await expect(logo).toBeVisible();

});
