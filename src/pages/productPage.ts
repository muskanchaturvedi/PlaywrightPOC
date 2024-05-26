import { Page } from 'playwright';

export class ProductPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToProducts() {
        await this.page.click('.shop-menu a[href="/products"]');
    }

    async viewFirstProduct() {
        await this.page.click('.productinfo h2 a'); // Assuming this is the first product's view button
    }

    async searchProduct(productName: string) {
        await this.page.fill('[placeholder="Search Product"]', productName);
        await this.page.click('button[id="submit_search"]');
    }

    async getSearchResultsCount() {
        return await this.page.locator('.features_items .productinfo').count();
    }

    async addToCart() {
        await this.page.click('.btn.btn-default.add-to-cart');
    }

    async viewCart() {
        await this.page.click('a[href="/view_cart"]');
    }

    async proceedToCheckout() {
        await this.page.click('.btn.btn-default.check_out');
    }

    async scrollToBottom() {
        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
    }

    async waitForLazyLoad() {
        await this.page.waitForSelector('.productinfo p');
    }

    async waitForProductsSection() {
        await this.page.waitForSelector('.features_items');
      }
    
      async scrollToAllProductsSection() {
        await this.page.evaluate(() => {
          const allProductsElement = document.querySelector('h2.title.text-center');
          if (allProductsElement) {
            allProductsElement.scrollIntoView();
          }
        });
      }
    
      async clickFirstProductDetails() {
        await this.page.click('a[href="/product_details/1"]');
      }
    
      async addToCartForPlaceOrder() {
        await this.page.click('button[class="btn btn-default cart"]');
        await this.page.waitForSelector('.modal-content');
        await this.page.click('.modal-footer .btn-success');
      }
}
