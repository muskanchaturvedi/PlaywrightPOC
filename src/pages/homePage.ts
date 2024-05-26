import { Page } from 'playwright';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://automationexercise.com/');
    }

    async clickContactUs() {
        await this.page.click('a[href="/contact_us"]');
    }

    async fillContactForm(name: string, email: string, subject: string, message: string) {
        await this.page.fill('input[name="name"]', name);
        await this.page.fill('input[name="email"]', email);
        await this.page.fill('input[name="subject"]', subject);
        await this.page.fill('textarea[name="message"]', message);
    }

    async submitForm() {
        await this.page.click('button[type="submit"]');
        this.page.on('dialog', async (dialog) => {
            console.log(dialog.message());
            await dialog.accept();
        });
    }

    async scrollToBottom() {
        await this.page.evaluate(() => {
            window.scrollTo(0, document.body.scrollHeight);
        });
    }

    async scrollUp() {
        await this.page.mouse.wheel(0, -500);
    }
    async verifyHomePage() {
        // Add verification steps, e.g., check if certain elements are visible
        await this.page.waitForSelector('selector-for-homepage-element');
    }

    async clickProductsLink() {
        await this.page.click('a[href="/products"]');
      }
}
