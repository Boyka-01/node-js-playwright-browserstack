const config = {
  testDir: './tests',
  testMatch: '**/bstack_local*.js',}

const { devices } = require('@playwright/test');

module.exports = {
  use: {
    browserName: 'chromium',
    baseURL: 'https://example.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',
    ignoreHTTPSErrors: true,
    launchOptions: {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
    browserstack: {
      username:ammaratariq3,
      accessKey:pxpD5AzFkbpqLxfTjLrj,
    },
  },
  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};