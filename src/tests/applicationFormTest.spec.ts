import { test, expect } from '@playwright/test';
import { ApplicationPage } from '../pages/applicationPage';
import { config } from '../config/config';

test.describe('Application Form Tests', () => {
  let applicationPage: ApplicationPage;

  test.beforeEach(async ({ page }) => {
    applicationPage = new ApplicationPage(page);
    await page.goto(config.baseUrl);
    console.log("URL Launched");
    await applicationPage.waitForElementVisibility(applicationPage.greetText);
    await applicationPage.verifyWelcomeText();
    console.log("Verify 'Welcome' text is displayed");

    await applicationPage.clickOnGetStarted();
    console.log("Clicked on get started button");

    await applicationPage.waitForInvisibilityOfLoaderSpinner();

    await applicationPage.waitForElementVisibility(applicationPage.headingApplicationType);
  

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
    
    
    // // Test Spouse radio button functionality
    await applicationPage.selectSpouseRadioButton();
    console.log("Selected the Spouse radio button");

    await applicationPage.waitForInvisibilityOfLoaderSpinner();

    
//Select Product type
await applicationPage.waitForElementVisibility(applicationPage.pageTitle);
await applicationPage.verifyPageTitleContains("Select product(s)");
  console.log("Verify the page title contains 'Select product(s)'");

    await applicationPage.selectAllProducts();
    console.log("Select all product checkboxes");

    // Verify that all checkboxes are selected
    await expect(applicationPage.supplementalLifeCheckbox).toBeChecked();
    await expect(applicationPage.basicLifeCheckbox).toBeChecked();
    console.log("Verify all product checkboxes are selected");
    await applicationPage.clickNextButton();
    console.log("Clicked on next button");


     await applicationPage.waitForElementVisibility(applicationPage.firstNameLabel);


     // Verify the "Your name" header
     await applicationPage.verifyYourNameHeader();
     console.log("Verify 'Your name' header is displayed and contains text");
 
     // Enter names
     await applicationPage.enterNames('Muskan', 'Chaturvedi');
     console.log("Enter first name and last name");
 
     // Click Next button
     await applicationPage.clickNextButton();
     console.log("Click Next button");


     await applicationPage.waitForElementVisibility(applicationPage.pageTitle);

     await applicationPage.verifyEmailHeader();
     console.log("Verify 'Email' header is displayed and contains text");

     // Enter Email
     await applicationPage.enterEmail('muskan@test.com');
     console.log("Entered Email");

     // Click Next button
     await applicationPage.clickNextButton();

     console.log("Click Next button");

     await applicationPage.waitForElementInVisibility(applicationPage.emailLabel);

     
     await applicationPage.waitForInvisibilityOfLoaderSpinner();



     await applicationPage.verifyEmployeeNameHeader();
     console.log("Verify 'Employee Name Header' header is displayed and contains text");


 // Enter Employee Name
     await applicationPage.enterNames('Muskan', 'Chaturvedi');
     console.log("Enter first name and last name");
 
     // Click Next button
     await applicationPage.clickNextButton();
     console.log("Click Next button");


    await applicationPage.waitForInvisibilityOfLoaderSpinner();


//Verify Coverage amount header is displayed
     await applicationPage.verifyCoverageAmountHeader();

     // Set Basic Life coverage amount
     await applicationPage.setBasicLifeCoverage(55000);
     console.log("Set Basic Life coverage amount");
 
     // Click Next button
     await applicationPage.clickNextButton();
     console.log("Clicked Next button");

  
    await applicationPage.waitForElementVisibility(applicationPage.pageTitle);


    //Verify Suppliment Coverage amount header is displayed
    await applicationPage.verifySupplementalCoverageAmountHeader();

 // Set Supplemental Life coverage amount
 await applicationPage.setSupplementalLifeCoverage(50000);
 console.log("Set Supplemental Life coverage amount");

 // Click Next button
 await applicationPage.clickNextButton();
 console.log("Clicked Next button");


 await applicationPage.waitForElementVisibility(applicationPage.pageTitle);

  // Verify the "Date of Birth" header
  await applicationPage.verifyDateOfBirthHeader();
  console.log("Verify 'Date of Birth' header is displayed and contains text");

  // Enter date of birth
  await applicationPage.enterDateOfBirth('01-01-2000');
  console.log("Enter date of birth");

  // Click Next button
  await applicationPage.clickNextButton();
  console.log("Click Next button");

  await applicationPage.waitForElementVisibility(applicationPage.pageTitle);



  // Verify the "Gender" header
  await applicationPage.verifyGenderHeader();
  console.log("Verify 'Gender' header is displayed and contains text");

  // Select Female gender
  await applicationPage.selectFemaleGender();
  console.log("Select Female gender");


  await applicationPage.waitForElementVisibility(applicationPage.pageTitle);



   // Verify the "Phone Number" header
   await applicationPage.verifyPhoneNumberHeader();
   console.log("Verify 'Phone Number' header is displayed and contains text");

   // Enter phone number
   await applicationPage.enterPhoneNumber('8120342678');
   console.log("Enter phone number");

   // Click Next button
   await applicationPage.clickNextButton();
   console.log("Click Next button");

   


    // Click the "I can't find my address" link
    await applicationPage.clickCantFindAddressLink();
    console.log("Clicked 'I can't find my address' link");

    await expect(applicationPage.pageTitle).toBeVisible();
    await expect(applicationPage.pageTitle).toContainText('Address');

    // Enter address details
    await applicationPage.enterAddress('123 Main St', 'Apt 1', 'Anytown', 'California', '12345');
    console.log("Entered address details");

    // Check both checkboxes
    await applicationPage.checkConsentCheckbox();
    console.log("Checked Consent to do business electronically checkbox");

    await applicationPage.checkHIPAACheckbox();
    console.log("Checked HIPAA notice checkbox");

    await applicationPage.scrollToElement(applicationPage.nextButton);


    // Click Next button
    await applicationPage.clickNextButton();
    console.log("Clicked Next button");

    await applicationPage.waitForElementVisibility(applicationPage.pageTitle);


    await applicationPage.verifyHeightWeightHeader();
    console.log("Verify 'What is your height and weight?' header is displayed and contains text");

    // Select height and enter weight
    await applicationPage.enterHeightAndWeight("5'5\"", "170");
    console.log("Select height and enter weight");

    // Click Next button
    await applicationPage.clickNextButton();
    console.log("Click Next button");

    await applicationPage.waitForElementVisibility(applicationPage.pageTitle);


    await applicationPage.verifyPregnantQuestionHeader();


    await applicationPage.selectPregnantNo();
    console.log("Select No for the 'Are you pregnant?' question");

    await applicationPage.waitForElementVisibility(applicationPage.pageTitle);


    await applicationPage.verifyTakingMedicationQuestionHeader();

     // Select No for the "Are you currently taking any medication?" question
     await applicationPage.selectNoMedication();
     console.log("Selected No for 'Are you currently taking any medication?'");

     

     await applicationPage.waitForElementVisibility(applicationPage.pageDescription);

     await applicationPage.verifyMedicalProfessionInfoHeader();


     // Select None of the above for medical conditions
    await applicationPage.selectNoneOfTheAbove();
    console.log("Selected None of the above for medical conditions");

      
        await applicationPage.clickNextButton();
        console.log("Click Next button");

    await applicationPage.waitForElementVisibility(applicationPage.pageDescription);

    await applicationPage.verifyMedicalProfessionInfoHeader2();


     // Select None of the above for medical conditions
    await applicationPage.selectNoneOfTheAbove2();
    console.log("Selected None of the above for medical conditions");

       
        await applicationPage.clickNextButton();
        console.log("Click Next button");

    await applicationPage.waitForElementVisibility(applicationPage.pageDescription);


    await applicationPage.verifyConsultationDescription();


     // Select No for the consultation examination question
     await applicationPage.selectConsultationNo();
     console.log("Selected No for 'Have you consulted, been advised, or been examined by any healthcare provider?'");
 
     await applicationPage.waitForElementVisibility(applicationPage.pageDescription);

 
     // Verify all the information on the review page
     await applicationPage.verifyReviewHeader();
     console.log("Verified review header is visible");
 
     await applicationPage.verifyReviewApplicationInfo();
     console.log("Verified all information on the review page");
 
     // Click Show More and verify additional details of form
     await applicationPage.clickShowMore();
     console.log("Clicked Show More to verify additional details");
 
     // Enter first name and last name for signing the application form
     await applicationPage.enterNamesForReviewPage('FirstName', 'LastName');
     console.log("Entered first name and last name");
 
     // Click on Sign Your Application button
     await applicationPage.clickSignYourApplication();
     console.log("Clicked Sign Your Application button");

//Verify Approved Text to be visible
     await applicationPage.verifyApprovalText();
    console.log("Verified 'You are approved!' text is visible");
   });


  });

 




