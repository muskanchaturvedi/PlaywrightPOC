import { Page } from 'playwright';

export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async viewCart() {
    await this.page.click('a[href="/view_cart"]');
    await this.page.waitForSelector('.cart_description');
  }

  async proceedToCheckout() {
    await this.page.click('a[class="btn btn-default check_out"]');
    await this.page.waitForSelector('.checkout-information');
  }

  async scrollToPayment(){
    // Scroll to the 'Payment' section
  await this.page.evaluate(() => {
    const allElement = document.querySelector('a[href="/payment"]');
    if (allElement) {
      allElement.scrollIntoView();
    }
  });
  }

  async proceedToPayment() {
    await this.page.click('a[href="/payment"]');

    // Wait for the payment information to appear
    await this.page.waitForSelector('.payment-information');
  }
}
