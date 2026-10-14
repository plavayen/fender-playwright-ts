import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables from local .env file
dotenv.config();

export default defineConfig({
  // Directory where your test files are located
  testDir: './tests',

  // Maximum time one test can run (30 seconds)
  timeout: 30 * 1000,

  // Maximum time for expectations (expect)
  expect: {
    timeout: 5000,
  },

  // Retry failed tests 2 times in CI (GitHub Actions) and 0 times locally
  retries: process.env.CI ? 2 : 0,

  // Number of workers (parallelism). Use 1 in CI to avoid resource locking, 2 locally
  workers: process.env.CI ? 1 : 2,

  // Reporters to generate (Interactive HTML and console list)
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],

  // Shared settings for all projects and browsers
  use: {
    baseURL: 'https://www.fender.com', // Centralized base URL
    trace: 'on-first-retry',          // Save traces only when retrying failed tests
    screenshot: 'only-on-failure',    // Automatically take screenshots on failure
    video: 'retain-on-failure',       // Keep video only on failure
    headless: true,                   // Run headless by default
  },

  // Projects / Browsers to run tests on
  projects: [
    {
      name: 'chromium',
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
});