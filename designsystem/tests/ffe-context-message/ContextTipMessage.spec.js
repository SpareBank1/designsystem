const { test, expect } = require('@playwright/test');
const { injectAxe, getViolations } = require('axe-playwright');

test.describe('ContextTipMessage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextTipMessage.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});

test.describe('ContextTipMessage-compact', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextTipMessage-compact.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});

test.describe('ContextTipMessage-header', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextTipMessage-header.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});

test.describe('ContextTipMessage-icon', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextTipMessage-icon.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});

test.describe('ContextTipMessage-showCloseButton', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextTipMessage-showCloseButton.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});
