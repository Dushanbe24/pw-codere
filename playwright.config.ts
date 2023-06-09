import { devices, defineConfig } from '@playwright/test';
// import type { PlaywrightTestConfig } from '@playwright/test';

// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// // require('dotenv').config();

// /**
//  * See https://playwright.dev/docs/test-configuration.
//  */
// const config : PlaywrightTestConfig = {
//   testDir: './tests',
//   timeout: 30 * 1000,
//   expect: {
//     timeout: 5000
//   }, 
//   fullyParallel: true, 
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: [['html', {open: 'never'}]],
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     headless: true,
//     actionTimeout: 0,
//     viewport: { width: 1920, height: 1080 },
//     ignoreHTTPSErrors: true,
//     /* Base URL to use in actions like `await page.goto('/')`. */
//     //  baseURL: 'http://127.0.0.1:3000',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//   },

//   /* Configure projects for major browsers */
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'],
//       headless: false },
//     },
      
//   ],
// }
  // Run your local dev server before starting the tests.
//   webServer: {


//     command: 'npm run start',
//     url: 'http://127.0.0.1:3000',
//     reuseExistingServer: !process.env.CI,
//   },
// };

// import { defineConfig, devices } from '@playwright/test';

// export default defineConfig({
//   // Look for test files in the "tests" directory, relative to this configuration file.
//   testDir: 'tests',

//   // Run all tests in parallel.
//   fullyParallel: true,

//   // Fail the build on CI if you accidentally left test.only in the source code.
//   forbidOnly: !!process.env.CI,

//   // Retry on CI only.
//   retries: process.env.CI ? 2 : 0,

//   // Opt out of parallel tests on CI.
//   workers: process.env.CI ? 1 : undefined,

//   // Reporter to use
//   reporter: 'html',

//   use: {
//     // Base URL to use in actions like `await page.goto('/')`.
//     baseURL: 'http://127.0.0.1:3000',

//     // Collect trace when retrying the failed test.
//     trace: 'on-first-retry',
//   },
//   // Configure projects for major browsers.
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },
//   ],
//   // Run your local dev server before starting the tests.
//   webServer: {
//     command: 'npm run start',
//     url: 'http://127.0.0.1:3000',
//     reuseExistingServer: !process.env.CI,
//   },
// });





export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  timeout: 30 * 1000,

  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'],
      headless:false },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ..devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

});