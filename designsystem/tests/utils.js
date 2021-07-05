const { test, expect } = require('@playwright/test');
const { injectAxe, getViolations } = require('axe-playwright');

async function visitPage(page, pageurl, doInjectAxe = false) {
    await page.goto('https://sb1ds-examples.netlify.app/');
    await page.click(`text='${pageurl}.jsx'`);
    if (doInjectAxe) await injectAxe(page);
}

async function expectNoAxeViolations() {
    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview', {
            detailedReport: true,
        });
        expect(violations).toHaveLength(0);
    });
}

module.exports = { visitPage, expectNoAxeViolations };
