import { test, expect } from '@playwright/test';
import { ApplicationPage } from '../pages/applicationPage';
import { config } from '../config/config';

test.describe('Application Form Tests', () => {
  let applicationPage: ApplicationPage;

  test.beforeEach(async ({ page }) => {
    applicationPage = new ApplicationPage(page);
    await page.goto(config.baseUrl);
    console.log("URL Launched");
    await applicationPage.waitForInvisibilityOfLoaderSpinner();
    await applicationPage.verifyWelcomeText();
    console.log("Verified 'Welcome' text is displayed");
    await applicationPage.clickOnGetStarted();
    await applicationPage.waitForInvisibilityOfLoaderSpinner();
    await applicationPage.verifyApplicationTypeTitle();
    console.log("Verified 'Application Type' title is displayed");
  
  });

  test('should verify form elements and test radio buttons', async ({ page }) => {
    const applicationPage = new ApplicationPage(page);

    // Verify radio buttons, buttons, and info icon are visible
    await applicationPage.verifyRadioButtons();
    console.log("Verify both radio buttons are visible");
    
    await applicationPage.verifyButtonsAndIcon();
    console.log("Verify Back button, Next button, and info icon are visible");  

    // Test Employee radio button functionality
    await applicationPage.selectEmployeeRadioButton();
    console.log("Select the Employee radio button");
    
    await applicationPage.waitForElementInVisibility(applicationPage.loadingSpinner);  
    console.log("Wait for loader to disappear after selecting Employee");
    await applicationPage.waitForElementVisibility(applicationPage.backButton);  
    console.log("Additional steps to verify the form behavior after selecting Employee");
    await applicationPage.clickBackButton();
    await applicationPage.waitForElementInVisibility(applicationPage.loadingSpinner);  
    // Test Spouse radio button functionality
    await applicationPage.selectSpouseRadioButton();
    console.log("Select the Spouse radio button");
    await applicationPage.waitForElementInVisibility(applicationPage.pageDescription); 
    await applicationPage.waitForElementInVisibility(applicationPage.loadingSpinner);  

    
//Select Product

await applicationPage.verifyPageTitleContains("Select product(s)");
//   console.log("Verify the page title contains 'Select product(s)'");

    await applicationPage.selectAllProducts();
    console.log("Select all product checkboxes");

    // Verify that all checkboxes are selected
    await expect(applicationPage.supplementalLifeCheckbox).toBeChecked();
    await expect(applicationPage.basicLifeCheckbox).toBeChecked();
    console.log("Verify all product checkboxes are selected");

    await applicationPage.clickNextButton();

  });

});

