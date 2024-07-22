const playwrightConfig = require("../playwright.config");

describe('Sample Test Suite', () => {

    it('should navigate and fill the form correctly', async ({ page }) => {
        await page.goto('https://opticommneud01stvnjnsapp.azurewebsites.net/');

        // Log cookies
        const cookies = await page.context().cookies();
        console.log(cookies);

        // Verify cookies
        chaiExpect(cookies).to.be.an('array').that.is.not.empty;

        // Click on menu item
        await page.click('#menu-item-16983 > .ekit-menu-nav-link');
        
        // Wait for 3 seconds
        await page.waitForTimeout(3000);
        
        // Click on product thumbnail
        await page.click('#snize-product-10793 > .snize-view-link > .snize-item > .snize-thumbnail-wrapper > .snize-thumbnail');
        
        // Wait for specific selector
        await page.waitForSelector('.elementor-element-7905e8cb > .elementor-widget-wrap');
        
        // Fill form fields
        await page.fill('#input_3_2', 'Opticommerce');
        await page.fill('#input_3_4', '123456');
        await page.fill('#input_3_3', 'formtest@opticommerce.co.uk');
        await page.fill('#input_3_5', 'test');
        
        // Wait for 10 seconds
        await page.waitForTimeout(10000); // Wait for 10 seconds

        // Optional: Add assertions to verify form submission or other conditions
        // Example assertion (modify based on your application's behavior)
        // const successMessage = await page.textContent('#success-message');
        // chaiExpect(successMessage).to.include('Thank you for your submission');
    });

});
