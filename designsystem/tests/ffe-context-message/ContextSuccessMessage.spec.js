const { test, expect } = require('@playwright/test');
const { injectAxe, getViolations } = require('axe-playwright');

test.describe('ContextSuccessMessage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextSuccessMessage.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});

test.describe('ContextSuccessMessage-compact', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextSuccessMessage-compact.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});

test.describe('ContextSuccessMessage-header', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextSuccessMessage-header.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});

test.describe('ContextSuccessMessage-icon', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextSuccessMessage-icon.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});

test.describe('ContextSuccessMessage-showCloseButton', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextSuccessMessage-showCloseButton.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});
