const { test, expect } = require('@playwright/test');

test('Sample Test', async ({ page }) => {
    await page.goto('https://opticommneud01stvnjnsapp.azurewebsites.net/', { timeout: 60000 }); // Increase timeout to 60 seconds
    await page.waitForTimeout(5000); // Increase timeout to 5 seconds
    
    const cookies = await page.context().cookies();
    console.log(cookies);

    //await page.waitForSelector('#menu-item-16983 > .ekit-menu-nav-link', { state: 'visible' });
    //await page.click('#menu-item-16983 > .ekit-menu-nav-link');
    
    await page.waitForTimeout(3000);
    
    await page.click('#snize-product-10793 > .snize-view-link > .snize-item > .snize-thumbnail-wrapper > .snize-thumbnail');
    
    await page.waitForSelector('.elementor-element-7905e8cb > .elementor-widget-wrap');
    
    await page.fill('#input_3_2', 'Opticommerce');
    await page.fill('#input_3_4', '123456');
    await page.fill('#input_3_3', 'formtest@opticommerce.co.uk');
    await page.fill('#input_3_5', 'test');
    await page.waitForTimeout(10000); // Wait for 10 seconds
});
