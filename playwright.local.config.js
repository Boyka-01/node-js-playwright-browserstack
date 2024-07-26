const { devices } = require('@playwright/test');

module.exports = {
  use: {
    trace: 'on-first-retry',
    headless: false,
    //screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    ignoreHTTPSErrors: true,
    launchOptions: {
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
  },
  projects: [
    {
      name: 'Chrome on Windows ',
      use: {
        browserName: 'chromium',
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
        // BrowserStack capabilities
        metadata: {
          browser: 'Chrome',
          browser_version: 'latest',
          os: 'Windows',
          os_version: '11',
        },
      },
    },
    {
      name: 'Firefox on Windows ',
      use: {
        browserName: 'firefox',
        ...devices['Desktop Firefox'],
        viewport: { width: 1660, height: 1080 },
        // BrowserStack capabilities
        metadata: {
          browser: 'Firefox',
          browser_version: 'latest',
          os: 'Windows',
          os_version: '11',
        },
      },
    },
    {
      name: 'Safari on macOS Big Sur',
      use: {
        browserName: 'webkit',
        ...devices['Desktop Safari'],
        viewport: { width: 1440, height: 1080 },
        // BrowserStack capabilities
        metadata: {
          browser: 'Safari',
          browser_version: 'latest',
          os: 'OS X',
          os_version: 'Big Sur',
        },
      },
    },
    {
      name: 'Edge on Windows ',
      use: {
        browserName: 'firefox',
        ...devices['Desktop Edge'],
        viewport: { width: 1280, height: 720 },
        // BrowserStack capabilities
        metadata: {
          browser: 'Edge',
          browser_version: 'latest',
          os: 'Windows',
          os_version: '11',
        },
      },
    },
  ],
};



