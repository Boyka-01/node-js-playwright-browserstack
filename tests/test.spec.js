const { test, expect } = require('@playwright/test');
const { formData } = require('./form-data'); // Ensure this path is correct
const { getScreenshotsDir, ensureScreenshotsDirExists, saveScreenshot } = require('./screenshot-utils'); // Ensure this path is correct
test.describe.configure({ timeout: 90000 }); // Setting a global timeout of 90 seconds

test('Complete Form Submission Flow', async ({ page, browserName }, testInfo) => {
    const projectName = testInfo.project.name;
    const screenshotsDir = getScreenshotsDir(browserName, projectName);
    ensureScreenshotsDirExists(screenshotsDir);

    // Going to Homepage
    await page.goto('https://opticommneud01stvnjnsapp.azurewebsites.net/', { timeout: 100000 });
    await saveScreenshot(page, 'home', screenshotsDir);
    
    // // Basic Test with Assertions

    // await page.waitForSelector('#menu-item-16983 > .ekit-menu-nav-link', { timeout: 70000 });
    // await expect(page.locator('#menu-item-16983 > .ekit-menu-nav-link')).toBeVisible();
    // await page.click('#menu-item-16983 > .ekit-menu-nav-link');
    // console.log('Current URL after clicking menu item:', page.url());

    // // Selecting the product from PLP
    // await page.waitForSelector('#snize-product-10808 > .snize-view-link > .snize-item > .snize-thumbnail-wrapper > .snize-thumbnail > .snize-item-image', { timeout: 100000 });
    // await expect(page.locator('#snize-product-10808 > .snize-view-link > .snize-item > .snize-thumbnail-wrapper > .snize-thumbnail > .snize-item-image')).toBeVisible();
    // await page.click('#snize-product-10808 > .snize-view-link > .snize-item > .snize-thumbnail-wrapper > .snize-thumbnail > .snize-item-image');


    // await page.waitForSelector('.elementor-element-7905e8cb > .elementor-widget-wrap', { timeout: 80000 });
    // await expect(page.locator('.elementor-element-7905e8cb > .elementor-widget-wrap')).toBeVisible();
    // console.log('Current URL after waiting for element:', page.url());

    // // Filling in the form values
    // await expect(page.locator('#input_3_2')).toBeEnabled();
    // await page.fill('#input_3_2', formData.name);
    // await expect(page.locator('#input_3_2')).toHaveValue(formData.name);

    // await expect(page.locator('#input_3_4')).toBeEnabled();
    // await page.fill('#input_3_4', formData.telephone);
    // await expect(page.locator('#input_3_4')).toHaveValue(formData.telephone);

    // await expect(page.locator('#input_3_3')).toBeEnabled();
    // await page.fill('#input_3_3', formData.email);
    // await expect(page.locator('#input_3_3')).toHaveValue(formData.email);

    // await expect(page.locator('#input_3_5')).toBeEnabled();
    // await page.fill('#input_3_5', formData.message);
    // await expect(page.locator('#input_3_5')).toHaveValue(formData.message);

    // await saveScreenshot(page, 'form-filled', screenshotsDir);
    // await expect(page.locator('#gform_submit_button_3')).toBeEnabled();
    // await page.click('#gform_submit_button_3');
    // console.log('Current URL after form submission:', page.url());

    // try {
    //     const successMessageLocator = page.locator(
    //         '//div[@id="gform_confirmation_message_3" and @class="gform_confirmation_message_3 gform_confirmation_message"]'
    //     );
    //     await successMessageLocator.waitFor({ state: 'visible', timeout: 60000 });
    //     const successMessage = await successMessageLocator.textContent();
    //     expect(successMessage).toContain("Thank you for contacting us! We will get in touch with you shortly.");

    //     await saveScreenshot(page, 'response', screenshotsDir);
    // } catch (error) {
    //     console.error('Error validating the form submission response:', error.message);
    //     await saveScreenshot(page, 'error', screenshotsDir);
    // }
});
