import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { config } from '../config/config';  


export class ApplicationPage extends BasePage {
  private greetText: Locator;
  private getStartedButton:Locator;
  public pageDescription:Locator;
  public  loadingSpinner:Locator;
  private headingApplicationType:Locator;
  private employeeRadioButton: Locator;
  private spouseRadioButton: Locator;
  public backButton: Locator;
  private nextButton: Locator;
  private infoIcon: Locator;
  private pageTitle: Locator;
  public supplementalLifeCheckbox: Locator;
  public shortTermDisabilityCheckbox: Locator;
  public longTermDisabilityCheckbox: Locator;
  public basicLifeCheckbox: Locator;

  constructor(page: Page) {
    super(page);
    this.greetText = page.locator('div[class="text-2xl text-center font-medium"]');
    this.getStartedButton = page.locator('div[class="flex items-center justify-center "] div');
    this.pageDescription = page.locator('div[id="page-description"]');
    this.loadingSpinner = page.locator('span[aria-label="spinner"]');
    this.headingApplicationType = page.locator('div[class*="relative"] span[id="page-title"]');
    this.employeeRadioButton = page.locator('div[id="option-label-0"]');
    this.spouseRadioButton = page.locator('div[id="option-label-1"]');  
    this.backButton = page.locator('button[id="btn-back"]');  
    this.nextButton = page.locator('button[id="btn-next"]'); 
    this.infoIcon = page.locator('button[id*="headlessui-menu-button"]'); 
    this.pageTitle = page.locator('.page-title');
    this.supplementalLifeCheckbox = page.locator('input[type="checkbox"][value="Supplemental Life"]');
    this.shortTermDisabilityCheckbox = page.locator('input[type="checkbox"][value="Short Term Disability"]');
    this.longTermDisabilityCheckbox = page.locator('input[type="checkbox"][value="Long Term Disability"]');
    this.basicLifeCheckbox = page.locator('input[type="checkbox"][value="Basic Life"]');

    
  }

  async navigate() {
    await this.page.goto(config.baseUrl);
    await this.page.setViewportSize({ width: 1920, height: 1080 });
  }

  async verifyWelcomeText() {
    await expect(this.greetText).toBeVisible();
  }
  async clickOnGetStarted(){
    await this.clickButton(this.getStartedButton);
    await this.waitForElementInVisibility(this.pageDescription);
  }
  async waitForInvisibilityOfLoaderSpinner(){
    await this.waitForElementInVisibility(this.loadingSpinner);
  }

  async verifyApplicationTypeTitle(){
    await this.waitForElementVisibility(this.headingApplicationType)
    await expect(this.headingApplicationType).toBeVisible();
  }

  async selectEmployeeRadioButton() {
    await this.employeeRadioButton.check();
  }

  async selectSpouseRadioButton() {
    await this.spouseRadioButton.check();
  }

  async verifyRadioButtons() {
    await expect(this.employeeRadioButton).toBeVisible();
    await expect(this.spouseRadioButton).toBeVisible();
  }

  async verifyButtonsAndIcon() {
    await expect(this.backButton).toBeVisible();
    await expect(this.nextButton).toBeVisible();
    await expect(this.infoIcon).toBeVisible();
  }

  async clickNextButton() {
    await this.nextButton.click();
  }

  async clickBackButton() {
    await this.backButton.click();
  }

  async clickInfoIcon() {
    await this.infoIcon.click();
  }

  async selectAllProducts() {
    await this.supplementalLifeCheckbox.check();
    await this.shortTermDisabilityCheckbox.check();
    await this.longTermDisabilityCheckbox.check();
    await this.basicLifeCheckbox.check();
  }

  async verifyPageTitleContains(text: string) {
    await expect(this.pageTitle).toContainText(text);
  }

}
