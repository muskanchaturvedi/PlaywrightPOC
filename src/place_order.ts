import { chromium } from 'playwright';

(async () => {
  // Launch a new browser instance
  const browser = await chromium.launch({ headless: false });
  
  // Create a new browser context
  const context = await browser.newContext();
  
  // Open a new page in the context
  const page = await context.newPage();

  // Navigate to the Automation Exercise website
  await page.goto('https://automationexercise.com/', { waitUntil: 'load' });

  // Click on the 'Products' link
  await page.click('a[href="/products"]');

  // Wait for the page to fully load
  await page.waitForLoadState('load');

  // Wait for the products section to appear
  await page.waitForSelector('.features_items');

  // Scroll to the "All Products" section
  await page.evaluate(() => {
    const allProductsElement = document.querySelector('h2.title.text-center');
    if (allProductsElement) {
      allProductsElement.scrollIntoView();
    }
  });

  // Click on the first product's details link
  await page.click('a[href="/product_details/1"]');
  
  // Wait for the product information to appear
  await page.waitForSelector('.product-information');

  // Click on the 'Add to cart' button
  await page.click('button[class="btn btn-default cart"]');

  // Wait for the modal to appear and click 'Continue Shopping'
  await page.waitForSelector('.modal-content');
  await page.click('.modal-footer .btn-success');

  // Click on the 'Cart' link to view the cart
  await page.click('a[href="/view_cart"]');
  await page.waitForSelector('.cart_description');

  // Click on the 'Proceed to Checkout' button
  await page.click('a[class="btn btn-default check_out"]');

  // Click on the 'Register / Login' button in the checkout modal
  await page.click('div[class="modal-dialog modal-confirm"] a');

  // Fill in the signup form with a unique email
  await page.fill('input[data-qa="signup-name"]', 'Muskan Chaturvedi');
  await page.fill('input[data-qa="signup-email"]', `unique-email-${Date.now()}@example.com`);
  await page.click('button[data-qa="signup-button"]');

  // Wait for the account creation form to appear and fill it out
  await page.waitForSelector('input[data-qa="password"]');
  await page.fill('input[data-qa="password"]', 'Jan@2024');
  await page.fill('input[data-qa="first_name"]', 'Muskan');
  await page.fill('input[data-qa="last_name"]', 'Chaturvedi');
  await page.fill('input[data-qa="address"]', '1234 Elm Street');
  await page.selectOption('select[data-qa="country"]', 'United States');
  await page.fill('input[data-qa="state"]', 'State');
  await page.fill('input[data-qa="city"]', 'Anytown');
  await page.fill('input[data-qa="zipcode"]', '12345');
  await page.fill('input[data-qa="mobile_number"]', '123-456-7890');
  await page.click('button[data-qa="create-account"]');

  // Wait for the account creation confirmation and continue
  await page.waitForSelector('h2[data-qa="account-created"]');
  await page.click('a[data-qa="continue-button"]');

  // Click on the 'Cart' link again to view the cart
  await page.click('a[href="/view_cart"]');
  await page.waitForSelector('.cart_description');

  // Click on the 'Proceed to Checkout' button again
  await page.click('a[class="btn btn-default check_out"]');

  // Wait for the checkout information to appear
  await page.waitForSelector('.checkout-information');

  // Scroll to the 'Payment' section
  await page.evaluate(() => {
    const allElement = document.querySelector('a[href="/payment"]');
    if (allElement) {
      allElement.scrollIntoView();
    }
  });

  // Click on the 'Payment' link
  await page.click('a[href="/payment"]');

  // Wait for the payment information to appear
  await page.waitForSelector('.payment-information');

  // Fill in the payment details
  await page.fill('input[data-qa="name-on-card"]', 'Muskan Chaturvedi');
  await page.fill('input[data-qa="card-number"]', '4111111111111111'); 
  await page.fill('input[data-qa="cvc"]', '123');
  await page.fill('input[data-qa="expiry-month"]', '12');
  await page.fill('input[data-qa="expiry-year"]', '2025');
  await page.click('button[class="form-control btn btn-primary submit-button"]');

  // Wait for the order confirmation message and take a screenshot
  await page.waitForSelector('h2[data-qa="order-placed"]');
  await page.screenshot({ path: 'order_confirmation.png' });

  // Close the browser
  await browser.close();
})();