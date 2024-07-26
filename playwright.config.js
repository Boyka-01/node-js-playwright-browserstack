// playwright.config.js

const { devices } = require('@playwright/test');

module.exports = {
  testDir: './tests',
  timeout: 60000,
  use: {
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
  
    {
      name: 'Chrome on Windows 11',
      use: { 
        browserName: 'chromium',
        baseURL: 'https://opticommneud01stvnjnsapp.azurewebsites.net/',
      },
    },
  ],
};
