import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForElementVisibility(locator: Locator, timeout: number = 30000) {
    await locator.waitFor({ state: 'visible', timeout });
  }

  async waitForElementInVisibility(locator: Locator, timeout: number = 30000) {
    await locator.waitFor({ state: 'hidden', timeout });
  }

  async scrollToElement(locator: Locator) {
    await locator.scrollIntoViewIfNeeded();
  }

  async fillInput(locator: Locator, text: string) {
    await locator.fill(text);
  }

  async clickButton(locator: Locator) {
    await locator.click();
  }

  
}
