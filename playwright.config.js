// const { devices } = require('@playwright/test');

// module.exports = {
//   use: {
//     trace: 'on-first-retry',
//     headless: false,
//     //screenshot: 'only-on-failure',
//     video: 'retain-on-failure',
//     ignoreHTTPSErrors: true,
//     launchOptions: {
//       args: ['--no-sandbox', '--disable-setuid-sandbox'],

//     },
//   },
//   projects: [
//     // {
//     //   name: 'Chrome on Windows',
//     //   use: {
//     //     browserName: 'chromium',
//     //     ...devices['Desktop Chrome'],
//     //     metadata: {
//     //       browser: 'Chrome',
//     //       browser_version: 'latest',
//     //       os: 'Windows',
//     //       os_version: '10',
//     //     },
//     //   },
//     // },
//     // {
//     //   name: 'Firefox on Windows',
//     //   use: {
//     //     browserName: 'firefox',
//     //     ...devices['Desktop Firefox'],
//     //     metadata: {
//     //       browser: 'Firefox',
//     //       browser_version: '127',
//     //       os: 'Windows',
//     //       os_version: '10',
//     //     },
//     //   },
//     // },
//     // {
//     //   name: 'Safari on macOS Big Sur',
//     //   use: {
//     //     browserName: 'webkit',
//     //     ...devices['Desktop Safari'],
//     //     metadata: {
//     //       browser: 'Safari',
//     //       browser_version: 'latest',
//     //       os: 'OS X',
//     //       os_version: 'Sonoma',
//     //     },
//     //   },
//     // },
//     // {
//     //   name: 'Edge on Windows',
//     //   use: {
//     //     browserName: 'chromium',
//     //     ...devices['Desktop Edge'],
//     //     metadata: {
//     //       browser: 'Edge',
//     //       browser_version: 'latest',
//     //       os: 'Windows',
//     //       os_version: '10',
//     //     },
//     //   },
//     // },
//     // {
//     //   name: 'Opera on Windows',
//     //   use: {
//     //     browserName: 'chromium',
//     //     ...devices['Desktop Chrome'],
//     //     metadata: {
//     //       browser: 'Opera',
//     //       browser_version: 'latest',
//     //       os: 'Windows',
//     //       os_version: '10',
//     //     },
//     //   },
      
//     // },
//     {
//       name: 'iPhone 12 Pro',
//       use: {
//         browserName: 'webkit',
//         ...devices['iPhone 14 Pro'],
//         // Additional BrowserStack capabilities
//         ...{
//           browserstack: {
//             projectName: 'Playwright Test',
//             buildName: 'Playwright BrowserStack Build',
//           },
//         },
//       },
//     },
//     {
//       name: 'Pixel 5',
//       use: {
//         browserName: 'chromium',
//         ...devices['Pixel 5'],
//         // Additional BrowserStack capabilities
//         ...{
//           browserstack: {
//             projectName: 'Playwright Test',
//             buildName: 'Playwright BrowserStack Build',
//           },
//         },
//       },
//     },

//   ]
// };

const { defineConfig, devices } = require('@playwright/test');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

// Load the bs.yml file
const bsConfig = yaml.load(fs.readFileSync(path.resolve(__dirname, 'bs.yml'), 'utf8'));

module.exports = defineConfig({
  projects: bsConfig.environments.map(env => ({
    name: env.name,
    use: {
      browserName: env.browserName === 'safari' ? 'webkit' : env.browserName,
      // BrowserStack specific capabilities
      browserstack: {
        device: env.device,
        os_version: env.os_version,
        realMobile: env.realMobile,
        name: env.name,
        projectName: bsConfig.common.projectName,
        buildName: bsConfig.common.buildName,
        username: bsConfig.common.username,
        accessKey: bsConfig.common.accessKey,
      },
    },
  })),
});


