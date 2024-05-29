import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from '../pages/basePage';
import { config } from '../config/config';  


export class ApplicationPage extends BasePage {
  public greetText: Locator;
  private getStartedButton:Locator;
  public pageDescription:Locator;
  public  loadingSpinner:Locator;
  public headingApplicationType:Locator;
  public employeeRadioButton: Locator;
  public spouseRadioButton: Locator;
  public backButton: Locator;
  public nextButton: Locator;
  private infoIcon: Locator;
  public pageTitle: Locator;
  public supplementalLifeCheckbox: Locator;
  public basicLifeCheckbox: Locator;
  private yourNameHeader: Locator;
  private firstNameInput: Locator;
  private lastNameInput: Locator;
  public firstNameLabel: Locator;
  public emailLabel: Locator;
  public emailInput: Locator;
  private basicLifeSlider: Locator;
  private supplementalLifeSlider: Locator;
  private dateOfBirthInput: Locator;
  private genderHeader: Locator;
  private femaleRadioButton: Locator;
  private phoneNumberInput: Locator;
  private phoneNumberHeader: Locator;
  private cantFindAddressLink: Locator;
  private streetInput: Locator;
  private aptUnitInput: Locator;
  private cityInput: Locator;
  private stateDropdown: Locator;
  private zipCodeInput: Locator;
  private consentCheckbox: Locator;
  private hipaaCheckbox: Locator;
  private heightDropdown: Locator;
  private weightInput: Locator;
  private heightWeightHeader: Locator;
  private pregnantHeader: Locator;
  private pregnantNoRadioButton: Locator;
  private medicationHeader: Locator;
  private noMedicationRadioButton: Locator;
  private medicalProfessionDescription: Locator;
  private noneOfTheAboveCheckbox: Locator;
  private medicalProfessionDescription2: Locator;
  private noneOfTheAboveCheckbox2: Locator;
  private consultationQuestionHeader: Locator;
  private consultationExaminationRadioButton: Locator;
  private reviewHeader: Locator;
  private showMoreLink: Locator;
  private signYourApplicationButton: Locator;
  private firstNameInputReviewPage: Locator;
  private lastNameInputReviewPage: Locator;
  private approvalText: Locator;

  

  constructor(page: Page) {
    super(page);
    this.greetText = page.locator('div[class="text-2xl text-center font-medium"]');
    this.getStartedButton = page.locator('div[class="flex items-center justify-center "] div');
    this.pageDescription = page.locator('div[id="page-description"]');
    this.loadingSpinner = page.locator('div span[class="animate-spin text-neutral-100 "]');
    this.headingApplicationType = page.locator('div[class*="relative"] span[id="page-title"]');
    this.employeeRadioButton = page.locator('input[id="option-item-0"]');
    this.spouseRadioButton = page.locator('input[id="option-item-1"]');  
    this.backButton = page.locator('button[id="btn-back"]');  
    this.nextButton = page.locator('button[id="btn-next"]'); 
    this.infoIcon = page.locator('button[id*="headlessui-menu-button"]'); 
    this.pageTitle = page.locator('span[id=page-title]');
    this.supplementalLifeCheckbox = page.locator('input[id="checkbox-item-0"]');
    this.basicLifeCheckbox = page.locator('input[id="checkbox-item-1"]');
    this.yourNameHeader = page.locator('span[id=page-title]');  
    this.firstNameInput = page.locator('input[name="first"]');
    this.lastNameInput = page.locator('input[name="last"]');
    this.firstNameLabel = page.locator('#label-first-name');
    this.emailLabel = page.locator('span[id="page-title"]');
    this.emailInput = page.locator('input[id="email-input"]');
    this.basicLifeSlider = page.locator('div.rc-slider-handle');
    this.supplementalLifeSlider = page.locator('div.rc-slider-handle');
    this.dateOfBirthInput = page.locator('input[id="date-input"]'); 
    this.genderHeader = page.locator('span[id="page-title"]');  
    this.femaleRadioButton = page.locator('input[id="option-item-1"]');
    this.phoneNumberInput = page.locator('input[id="input-phone"]');  
    this.phoneNumberHeader = page.locator('span[id="page-title"]');  
    this.cantFindAddressLink = page.locator('div[id="btn-toggle-autocomplete"]');
    this.streetInput = page.locator('input[id="address-input-street"]');
    this.aptUnitInput = page.locator('input[id="address-input-apt-unit"]');
    this.cityInput = page.locator('input[id="address-input-city"]');
    this.stateDropdown = page.locator('button[id="address-input-state"]'); 
    this.zipCodeInput = page.locator('input[id="address-input-zipcode"]');
    this.consentCheckbox = page.locator('input[id="address-check-auth-release-agree"]');
    this.hipaaCheckbox = page.locator('input[id="address-check-consent-business"]');
    this.heightDropdown = page.locator('button[id="dropdown-height"]');  
    this.weightInput = page.locator('input[id="input-weight"]');  
    this.heightWeightHeader = page.locator('span[id="page-title"]'); 
    this.pregnantNoRadioButton = page.locator('input[id="radio-no"]');
    this.pregnantHeader= page.locator('span[id="page-description"]');
    this.noMedicationRadioButton = page.locator('input[id="radio-no"]');
    this.medicationHeader= page.locator('span[id="page-description"]');
    this.noneOfTheAboveCheckbox = page.locator('input[id="checkbox-none-of-above"]');
    this.medicalProfessionDescription= page.locator('span[id="page-description"]');
    this.medicalProfessionDescription2= page.locator('span[id="page-description"]');
    this.noneOfTheAboveCheckbox2 = page.locator('input[id="checkbox-none-of-above"]');
    this.consultationQuestionHeader = page.locator('span[id="page-description"]');
    this.consultationExaminationRadioButton = page.locator('input[id="radio-no"]');
    this.reviewHeader = page.locator('span[id="page-title"]');
    this.showMoreLink = page.locator('button[id="btn-show-more"]');
    this.signYourApplicationButton = page.locator('button[type="submit"]');

    this.firstNameInputReviewPage = page.locator('input[id="first_name"]');
    this.lastNameInputReviewPage = page.locator('input[id="last_name"]');
    this.approvalText = page.locator('div[id="page-title"]');
  }

  async navigate() {
    await this.page.goto(config.baseUrl);
    await this.waitForPageLoad(); 
  }

  async verifyWelcomeText() {
    await expect(this.greetText).toBeVisible();
  }
  async clickOnGetStarted(){
    await this.clickButton(this.getStartedButton);
  }
  async waitForInvisibilityOfLoaderSpinner(){
    await this.waitForElementInVisibility(this.loadingSpinner);
  }

  async verifyApplicationTypeTitle(){
    await this.waitForElementToBeInteractable(this.headingApplicationType);
    await expect(this.headingApplicationType).toBeVisible();
    await expect(this.headingApplicationType).toContainText('Applicant type');
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
    await this.basicLifeCheckbox.check();
  }

  async verifyPageTitleContains(text: string) {
    console.log("Vissible");
    await expect(this.pageTitle).toContainText(text);
  }

  async verifyYourNameHeader() {
    await expect(this.yourNameHeader).toBeVisible();
    await expect(this.yourNameHeader).toContainText('Your name');
  }

  async enterNames(firstName: string, lastName: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
  }

  async verifyEmailHeader() {
    await expect(this.emailLabel).toBeVisible();
    await expect(this.emailLabel).toContainText('Email');
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
}

async verifyEmployeeNameHeader() {
  await expect(this.pageTitle).toBeVisible();
  await expect(this.pageTitle).toContainText('Employee Name');

}

async verifyCoverageAmountHeader() {
  await expect(this.pageTitle).toBeVisible();
  await expect(this.pageTitle).toContainText('Select the amount of Basic Life coverage');

}

async verifySupplementalCoverageAmountHeader() {
  await expect(this.backButton).toBeVisible();
  // await expect(this.pageTitle).toContainText('Select the amount of Supplemental Life coverage');

}


async setSliderValue(slider: Locator, value: number) {
  const sliderHandle = slider;
  const boundingBox = await sliderHandle.boundingBox();
  if (boundingBox) {
    const { x, y, width } = boundingBox;
    const targetX = x + (width * (value / 150000)); 
    await this.page.mouse.move(x, y);
    await this.page.mouse.down();
    await this.page.mouse.move(targetX, y);
    await this.page.mouse.up();
  }
}

async setBasicLifeCoverage(amount: number) {
  await this.setSliderValue(this.basicLifeSlider, amount);
}

async setSupplementalLifeCoverage(amount: number) {
  await this.setSliderValue(this.supplementalLifeSlider, amount);
}



async verifyDateOfBirthHeader() {
  await expect(this.pageTitle).toBeVisible();
  await expect(this.pageTitle).toContainText('Date of Birth');
}

async enterDateOfBirth(dob: string) {
  await this.dateOfBirthInput.fill(dob);
}

async selectFemaleGender() {
  await this.femaleRadioButton.check();
}

async verifyGenderHeader() {
  await expect(this.genderHeader).toBeVisible();
  await expect(this.genderHeader).toContainText('Gender');
}

async enterPhoneNumber(phoneNumber: string) {
  await this.phoneNumberInput.fill(phoneNumber);
}

async verifyPhoneNumberHeader() {
  await expect(this.phoneNumberHeader).toBeVisible();
  await expect(this.phoneNumberHeader).toContainText('Phone Number');
}

async clickCantFindAddressLink() {
  await this.cantFindAddressLink.click();
}

async enterAddress(street: string, aptUnit: string, city: string, state: string, zipCode: string) {
  await this.streetInput.fill(street);
  await this.aptUnitInput.fill(aptUnit);
  await this.cityInput.fill(city);
  await this.stateDropdown.selectOption(state);
  await this.zipCodeInput.fill(zipCode);
}

async checkConsentCheckbox() {
  await this.consentCheckbox.check();
}

async checkHIPAACheckbox() {
  await this.hipaaCheckbox.check();
}

async enterHeightAndWeight(height: string, weight: string) {
  await this.heightDropdown.selectOption(height);
  await this.weightInput.fill(weight);
}

async verifyHeightWeightHeader() {
  await expect(this.heightWeightHeader).toBeVisible();
  await expect(this.heightWeightHeader).toContainText('What is your height and weight?');
}

async verifyPregnantQuestionHeader() {
  await expect(this.pregnantHeader).toBeVisible();
  await expect(this.pregnantHeader).toContainText('Are you pregnant?');
}


async selectPregnantNo() {
  await this.pregnantNoRadioButton.check();
}

async verifyTakingMedicationQuestionHeader() {
  await expect(this.medicationHeader).toBeVisible();
  await expect(this.medicationHeader).toContainText('Are you currently taking any medication?');
}


async selectNoMedication() {
  await this.noMedicationRadioButton.check();
}

async verifyMedicalProfessionInfoHeader() {
  await expect(this.medicalProfessionDescription).toBeVisible();
}

async selectNoneOfTheAbove() {
  await this.noneOfTheAboveCheckbox.check();
}

async verifyMedicalProfessionInfoHeader2() {
  await expect(this.medicalProfessionDescription2).toBeVisible();
}

async selectNoneOfTheAbove2() {
  await this.noneOfTheAboveCheckbox2.check();
}

async verifyConsultationDescription() {
  await expect(this.consultationQuestionHeader).toBeVisible();
}

async selectConsultationNo() {
  await this.consultationExaminationRadioButton.check();
}

async verifyReviewHeader() {
  await expect(this.reviewHeader).toBeVisible();
}

async verifyReviewApplicationInfo() {
  await expect(this.page.locator('div#question-item-wrapper-0 > div >div#question-item-title-0 ~ div')).toBeVisible();
  await expect(this.page.locator('div#question-item-wrapper-1> div >div#question-item-title-1 ~ div')).toBeVisible();
  await expect(this.page.locator('div#question-item-wrapper-2> div >div#question-item-title-2 ~ div')).toBeVisible();
  await expect(this.page.locator('div#question-item-wrapper-3> div >div#question-item-title-3 ~ div')).toBeVisible();
  await expect(this.page.locator('div#question-item-wrapper-4> div >div#question-item-title-4 ~ div')).toBeVisible();
  await expect(this.page.locator('div#question-item-wrapper-5> div >div#question-item-title-5 ~ div')).toBeVisible();
  await expect(this.page.locator('div#question-item-wrapper-6> div >div#question-item-title-6 ~ div')).toBeVisible();
  await expect(this.page.locator('div#question-item-wrapper-7> div >div#question-item-title-7 ~ div')).toBeVisible();
  await expect(this.page.locator('div#question-item-wrapper-8> div >div#question-item-title-8 ~ div')).toBeVisible();
  await expect(this.page.locator('div#question-item-wrapper-9> div >div#question-item-title-9 ~ div')).toBeVisible();
  await expect(this.page.locator('div#question-item-wrapper-10> div >div#question-item-title-10 ~ div')).toBeVisible();
  await expect(this.page.locator('div#question-item-wrapper-11> div >div#question-item-title-11 ~ div')).toBeVisible();
}

async clickShowMore() {
  await this.showMoreLink.click();
}

async enterNamesForReviewPage(firstName: string, lastName: string) {
  await this.firstNameInputReviewPage.fill(firstName);
  await this.lastNameInputReviewPage.fill(lastName);
}

async clickSignYourApplication() {
  await this.scrollToElement(this.signYourApplicationButton);
  await this.signYourApplicationButton.click();
}

async verifyApprovalText() {
  await this.approvalText.waitFor({ state: 'visible', timeout: 60000 });
  await expect(this.approvalText).toBeVisible();
}

}