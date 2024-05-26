import { Page } from 'playwright';

export async function waitForPageLoad(page: Page) {
    await page.waitForLoadState('load');
}


