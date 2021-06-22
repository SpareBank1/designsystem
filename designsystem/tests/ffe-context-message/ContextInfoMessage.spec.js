const { test, expect } = require('@playwright/test');
const { injectAxe, getViolations } = require('axe-playwright');

test.describe('ContextInfoMessage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextInfoMessage.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});

test.describe('ContextInfoMessage-compact', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextInfoMessage-compact.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});

test.describe('ContextInfoMessage-header', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextInfoMessage-header.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});

test.describe('ContextInfoMessage-icon', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextInfoMessage-icon.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});

test.describe('ContextInfoMessage-showCloseButton', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextInfoMessage-showCloseButton.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});
