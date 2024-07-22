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
    // {
    //   name: 'Chrome on Windows 11',
    //   use: { 
    //     browserName: 'chromium',
    //     baseURL: 'https://opticommneud01stvnjnsapp.azurewebsites.net/',
    //   },
    // },
    // {
    //   name: 'Firefox on Windows 10',
    //   use: { 
    //     browserName: 'firefox',
    //     baseURL: 'https://opticommneud01stvnjnsapp.azurewebsites.net/',
    //   },
    // },
    // {
    //   name: 'Edge on Windows 10',
    //   use: { 
    //     browserName: 'chromium',
    //     baseURL: 'https://opticommneud01stvnjnsapp.azurewebsites.net/',
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'WebKit on macOS Ventura',
    //   use: { 
    //     browserName: 'webkit',
    //     baseURL: 'https://opticommneud01stvnjnsapp.azurewebsites.net/',
    //   },
    // },
    // {
    //   name: 'Chrome on macOS Big Sur',
    //   use: { 
    //     browserName: 'chromium',
    //     baseURL: 'https://opticommneud01stvnjnsapp.azurewebsites.net/',
    //   },
    // },
    // {
    //   name: 'Safari on macOS Catalina',
    //   use: { 
    //     browserName: 'webkit',
    //     baseURL: 'https://opticommneud01stvnjnsapp.azurewebsites.net/',
    //   },
    // },
    // {
    //   name: 'Chrome on Samsung Galaxy S23 Ultra',
    //   use: { 
    //     ...devices['Galaxy S23 Ultra'],
    //     baseURL: 'https://opticommneud01stvnjnsapp.azurewebsites.net/',
    //   },
    // },
    {
       name: 'Safari on iPhone 14 Pro',
      use: { 
        ...devices['iPhone 14 Pro'],
        baseURL: 'https://opticommneud01stvnjnsapp.azurewebsites.net/',
      },
    // },
    // {
    //   name: 'Chrome on Google Pixel 7',
    //   use: { 
    //     ...devices['Pixel 7'],
    //     baseURL: 'https://opticommneud01stvnjnsapp.azurewebsites.net/',
    //   },
    // },
    // {
    //   name: 'Safari on iPad Pro 12.9 2021',
    //   use: { 
    //     ...devices['iPad Pro 12.9 2021'],
    //     baseURL: 'https://opticommneud01stvnjnsapp.azurewebsites.net/',
    //   },
    // },
    // {
    //   name: 'Chrome on Samsung Galaxy Tab S8',
    //   use: { 
    //     ...devices['Galaxy Tab S8'],
    //     baseURL: 'https://opticommneud01stvnjnsapp.azurewebsites.net/',
    //   },
    },
  ],
};
