import { Page } from 'playwright';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async registerOrLogin() {
    await this.page.click('div[class="modal-dialog modal-confirm"] a[href="/login"]');
  }

  async fillSignupForm(name: string, email: string) {
    await this.page.fill('input[data-qa="signup-name"]', name);
    await this.page.fill('input[data-qa="signup-email"]', email);
    await this.page.click('button[data-qa="signup-button"]');
  }

  async fillAccountCreationForm() {
    await this.page.fill('input[data-qa="password"]', 'Jan@2024');
    await this.page.fill('input[data-qa="first_name"]', 'Muskan');
    await this.page.fill('input[data-qa="last_name"]', 'Chaturvedi');
    await this.page.fill('input[data-qa="address"]', '1234 Elm Street');
    await this.page.selectOption('select[data-qa="country"]', 'United States');
    await this.page.fill('input[data-qa="state"]', 'State');
    await this.page.fill('input[data-qa="city"]', 'Anytown');
    await this.page.fill('input[data-qa="zipcode"]', '12345');
    await this.page.fill('input[data-qa="mobile_number"]', '123-456-7890');
    await this.page.click('button[data-qa="create-account"]');
  }

  async confirmAccountCreation() {
    await this.page.waitForSelector('h2[data-qa="account-created"]');
    await this.page.click('a[data-qa="continue-button"]');
  }

  async proceedToCheckout() {
    await this.page.click('a[class="btn btn-default check_out"]');
  }

  async fillPaymentDetails() {
    await this.page.fill('input[data-qa="name-on-card"]', 'Muskan Chaturvedi');
    await this.page.fill('input[data-qa="card-number"]', '4111111111111111');
    await this.page.fill('input[data-qa="cvc"]', '123');
    await this.page.fill('input[data-qa="expiry-month"]', '12');
    await this.page.fill('input[data-qa="expiry-year"]', '2025');
    await this.page.click('button[class="form-control btn btn-primary submit-button"]');
  }
}
