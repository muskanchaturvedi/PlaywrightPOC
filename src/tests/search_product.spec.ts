import { chromium } from 'playwright';
import { HomePage } from '../pages/homePage';
import { ProductPage } from '../pages/productPage';
import { waitForPageLoad } from '../utils/wait.utils';

(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);

  // Navigate to the Automation Exercise website
  await homePage.navigate();
  await waitForPageLoad(page);

  // Click on the "Products" link
  await productPage.navigateToProducts();
  await waitForPageLoad(page);

  // Perform a sample action: Search for a product
  await productPage.searchProduct('T-shirt');
  await waitForPageLoad(page);

  // Take a screenshot of the search results page
  await page.screenshot({ path: 'automation_exercise_search.png' });

  // Close the browser
  await browser.close();
})();
