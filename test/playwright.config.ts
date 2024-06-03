import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: '.',
    /* Maximum time one test can run for. */
    timeout: 120 * 1000, // Maximum time one test can run for.
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 0,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
        ['list'],
        [
            'html',
            {
                open: 'never',
                outputFolder: 'playwright/report/',
            },
        ],
    ],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
        actionTimeout: 0,
        trace: 'on-first-retry',
        screenshot: { mode: 'only-on-failure', fullPage: true }, // Capture Screenshot on failure
        headless: true,
    },

    /* Configure projects for major browsers */
    projects: [
        process.arch === 'arm64'
            ? {
                  name: 'Microsoft Edge',
                  use: { channel: 'msedge' },
              }
            : {
                  name: 'Google Chrome',
                  use: { channel: 'chrome' },
              },
    ],
    /* Folder for test artifacts such as screenshots, videos, traces, etc. */
    outputDir: 'playwright/screenshots/',
    /* Run your local dev server before starting the tests */
    webServer: {
        command: "lerna run start --scope='@sb1/ffe-component-index'",
        reuseExistingServer: true,
    },
});
