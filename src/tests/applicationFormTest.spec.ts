import { test, expect } from '@playwright/test';
import { ApplicationPage } from '../pages/applicationPage';
import { config } from '../config/config';

test.describe('Application Form Tests', () => {
  let applicationPage: ApplicationPage;

  test.beforeEach(async ({ page }) => {
    applicationPage = new ApplicationPage(page);
    await page.goto(config.baseUrl);
    console.log("URL Launched");
    await applicationPage.verifyWelcomeText();
    console.log("Verified 'Welcome' text is displayed");
    await applicationPage.clickOnGetStarted();
    await applicationPage.waitForInvisibilityOfLoaderSpinner();
    await applicationPage.verifyApplicationTypeTitle();
    console.log("Verified 'Application Type' title is displayed");
  
  });

  test('should verify radio buttons, buttons, and info icon are visible', async ({ page }) => {
    const applicationPage = new ApplicationPage(page);

    await applicationPage.verifyRadioButtons();
     console.log("Verify both radio buttons are visible");
    
    await applicationPage.verifyButtonsAndIcon();
    console.log("Verify Back button, Next button, and info icon are visible");  
  });
  test('should test Employee radio button', async ({ page }) => {
    const applicationPage = new ApplicationPage(page);

    await applicationPage.selectEmployeeRadioButton();
    console.log("Select the Employee radio button");  
    
    await applicationPage.clickNextButton();
    await applicationPage.waitForInvisibilityOfLoaderSpinner();
  
    console.log("Additional steps to verify the form behavior after selecting Employee"); 
    await applicationPage.clickBackButton(); 
    
  });

  test('should test Spouse radio button', async ({ page }) => {
    const applicationPage = new ApplicationPage(page);

    await applicationPage.selectSpouseRadioButton(); 
    console.log(" Select the Spouse radio button");   
   
    await applicationPage.clickNextButton();  
    console.log("Click the Next button to proceed");  
    
  });
});

