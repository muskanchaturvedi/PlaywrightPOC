import { chromium } from 'playwright';
import { HomePage } from '../pages/homePage';
import { ProductPage } from '../pages/productPage';

import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';

import { waitForPageLoad } from '../utils/wait.utils';
import { test, expect } from '@playwright/test';

test('Automation Exercise E2E Test', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await homePage.navigate();
  await waitForPageLoad(page);
  await homePage.clickProductsLink();
  await waitForPageLoad(page);

  await productPage.waitForProductsSection();
  await productPage.scrollToAllProductsSection();
  await productPage.clickFirstProductDetails();
  await productPage.addToCartForPlaceOrder();

  await cartPage.viewCart();
  await cartPage.proceedToCheckout();
 
  await checkoutPage.registerOrLogin();
  const uniqueEmail = `unique-email-${Date.now()}@example.com`;
  await checkoutPage.fillSignupForm('Muskan Chaturvedi', uniqueEmail);
  await checkoutPage.fillAccountCreationForm();
  await checkoutPage.confirmAccountCreation();

  await cartPage.viewCart();
  await cartPage.proceedToCheckout();
  await cartPage.scrollToPayment();
  await cartPage.proceedToPayment();
  await checkoutPage.fillPaymentDetails();
  await page.waitForSelector('h2[data-qa="order-placed"]');
  await page.screenshot({ path: 'order_confirmation.png' });

  await browser.close();
});
