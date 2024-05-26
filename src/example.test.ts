import { chromium, Browser, Page, BrowserContext, Dialog } from 'playwright';

(async () => {
  // Launch a new browser instance
  const browser: Browser = await chromium.launch({ headless: false });

  // Create a new browser context
  const context: BrowserContext = await browser.newContext();

  // Open a new page in the context
  const page: Page = await context.newPage();

  // Navigate to the Automation Exercise website
  await page.goto('https://automationexercise.com/', { waitUntil: 'load' });

  // Scroll down to the bottom of the page
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // Scroll up using the mouse wheel
  await page.mouse.wheel(0, -500);

  // Click on the 'Contact Us' link
  await page.click('a[href="/contact_us"]');

  // Fill in the contact form
  await page.fill('input[name="name"]', 'Muskan Chaturvedi');
  await page.fill('input[name="email"]', 'muskan.chaturvedi@example.com');
  await page.fill('input[name="subject"]', 'Test Subject');
  await page.fill('textarea[name="message"]', 'This is a test message.');

  // Submit the form
  await page.click('button[type="submit"]');

  // Wait for the alert to appear and accept it
  page.on('dialog', async (dialog: Dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  });

  // Navigate to the 'Products' page
  await page.goto('https://automationexercise.com/products');

  // Scroll down to the bottom to load more products
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  // Wait for lazy-loaded content to appear
  await page.waitForSelector('.productinfo p');

  // Click on the first product
  await page.click('.productinfo p');

  // Simulate a keyboard action
  await page.keyboard.type('Playwright Test');
  await page.keyboard.press('Enter');

  // Open a new tab and navigate to the home page
  const newPage: Page = await context.newPage();
  await newPage.goto('https://automationexercise.com');

  // Interact with elements on the new page
  await newPage.click('a[href="/contact_us"]');

  // Fill in the contact form again
  await newPage.fill('input[name="name"]', 'Muskan Chaturvedi');
  await newPage.fill('input[name="email"]', 'muskan.chaturvedi@example.com');
  await newPage.fill('input[name="subject"]', 'Test Subject 2');
  await newPage.fill('textarea[name="message"]', 'This is another test message.');

  // Submit the form
  await newPage.click('button[type="submit"]');

  // Wait for the alert to appear and accept it
  newPage.on('dialog', async (dialog: Dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  });

  // Close the new page
  await newPage.close();

  // Close the browser context
  await context.close();

  // Close the browser
  await browser.close();
})();