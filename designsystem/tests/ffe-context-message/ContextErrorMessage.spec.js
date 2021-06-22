const { test, expect } = require('@playwright/test');
const { injectAxe, getViolations } = require('axe-playwright');

test.describe('ContextErrorMessage', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextErrorMessage.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
    test('have role="alert" attribute', async ({ page }) => {
        const messageBox = await (
            await page.$('.ffe-context-message--error')
        ).getAttribute('role');
        expect(messageBox).toBe('alert');
    });
});

test.describe('ContextErrorMessage-alertFalse', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextErrorMessage-alertFalse.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });

    test('dont have role="alert" attribute', async ({ page }) => {
        const messageBox = await (
            await page.$('.ffe-context-message--error')
        ).getAttribute('role');
        expect(messageBox).toBeFalsy();
    });
});

test.describe('ContextErrorMessage-compact', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextErrorMessage-compact.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});

test.describe('ContextErrorMessage-header', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextErrorMessage-header.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});

test.describe('ContextErrorMessage-icon', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextErrorMessage-icon.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});

test.describe('ContextErrorMessage-showCloseButton', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextErrorMessage-showCloseButton.jsx');
        await injectAxe(page);
    });

    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations.length).toBe(0);
    });
});
