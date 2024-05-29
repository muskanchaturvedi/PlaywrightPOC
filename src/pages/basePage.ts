import { Page, Locator } from '@playwright/test';

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForElementVisibility(locator: Locator, timeout: number = 900000) {
    await locator.waitFor({ state: 'visible', timeout });
  }

  async waitForElementInVisibility(locator: Locator, timeout: number = 900000) {
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


  async waitForPageLoad(timeout: number = 50000) {
    await this.page.waitForLoadState('load', { timeout });
  }

  async hardWait(milliseconds: number) {
    await this.page.waitForTimeout(milliseconds);
  }


  async waitForElementToBeInteractable(locator: Locator, timeout: number = 100000) {
    const startTime = Date.now();
    while ((Date.now() - startTime) < timeout) {
      if (await locator.isVisible() && await locator.isEnabled()) {
        return;
      }
      await this.page.waitForTimeout(100); // Wait for 100 milliseconds before checking again
    }
    throw new Error(`Element ${locator} was not interactable within ${timeout} ms`);
  }
  
}
