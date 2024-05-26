// src/todomvc.spec.ts
import { chromium } from 'playwright';

(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false }); 
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to Automation Exercise website
  await page.goto('https://automationexercise.com/');

  // Click on the "Products" link
  await page.click('a[href="/products"]');

  // Perform a sample action: Search for a product
  await page.fill('[placeholder="Search Product"]', 'T-shirt');

  //click on submit search
  await page.click('button[id="submit_search"]');

  // Take a screenshot of the search results page
  await page.screenshot({ path: 'automation_exercise_search.png' });

  // Close the browser
  await browser.close();
})();
