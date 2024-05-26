import { test, expect } from '@playwright/test';
import { HomePage } from './pages/homePage';
import { ProductPage } from './pages/productPage';
import { waitForPageLoad } from './utils/utility';

test('Search and interact with products', async ({ page }) => {
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);

    // Navigate to the Automation Exercise website
    await homePage.navigate();
    await waitForPageLoad(page);

    // Scroll down to the bottom of the page
    await homePage.scrollToBottom();

    // Scroll up using the mouse wheel
    await homePage.scrollUp();

    // Click on the 'Contact Us' link
    await homePage.clickContactUs();

    // Fill in the contact form
    await homePage.fillContactForm('Muskan Chaturvedi', 'muskan.chaturvedi@example.com', 'Test Subject', 'This is a test message.');

    // Submit the form
    await homePage.submitForm();

    // Navigate to the 'Products' page
    await productPage.navigateToProducts();
    await waitForPageLoad(page);

    // Scroll down to the bottom to load more products
    await productPage.scrollToBottom();

    // Wait for lazy-loaded content to appear
    await productPage.waitForLazyLoad();

    // Click on the first product
    await productPage.viewFirstProduct();

    // Simulate a keyboard action
    await page.keyboard.type('Playwright Test');
    await page.keyboard.press('Enter');

    // Open a new tab and navigate to the home page
    const newPage = await page.context().newPage();
    const newHomePage = new HomePage(newPage);
    await newHomePage.navigate();
    await waitForPageLoad(newPage);

    // Interact with elements on the new page
    await newHomePage.clickContactUs();

    // Fill in the contact form again
    await newHomePage.fillContactForm('Muskan Chaturvedi', 'muskan.chaturvedi@example.com', 'Test Subject 2', 'This is another test message.');

    // Submit the form
    await newHomePage.submitForm();

    // Close the new page
    await newPage.close();
});
