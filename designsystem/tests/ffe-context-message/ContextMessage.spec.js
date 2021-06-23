const { test, expect } = require('@playwright/test');
const { injectAxe, getViolations } = require('axe-playwright');

const variations = [
    'ContextErrorMessage',
    'ContextInfoMessage',
    'ContextSuccessMessage',
    'ContextTipMessage',
    'ContextErrorMessage-compact',
    'ContextInfoMessage-compact',
    'ContextSuccessMessage-compact',
    'ContextTipMessage-compact',
    'ContextErrorMessage-header',
    'ContextInfoMessage-header',
    'ContextSuccessMessage-header',
    'ContextTipMessage-header',
    'ContextErrorMessage-icon',
    'ContextInfoMessage-icon',
    'ContextSuccessMessage-icon',
    'ContextTipMessage-icon',
    'ContextInfoMessage-showCloseButton',
    'ContextSuccessMessage-showCloseButton',
    'ContextSuccessMessage-showCloseButton',
    'ContextTipMessage-showCloseButton',
    'ContextErrorMessage-alertFalse',
];

function visitPage(pageurl, doInjectAxe) {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click(`text='${pageurl}.jsx'`);
        if (doInjectAxe) await injectAxe(page);
    });
}

function hasNoAxeViolations() {
    test('pass Axe test', async ({ page }) => {
        const violations = await getViolations(page, '.sb1ex-live__preview');
        expect(violations).toHaveLength(0);
    });
}

variations.map(variation =>
    test.describe(variation, () => {
        visitPage(variation, true);
        hasNoAxeViolations();
    }),
);

test.describe('ContextErrorMessage', () => {
    visitPage('ContextErrorMessage');
    test('have role="alert" attribute', async ({ page }) => {
        const messageBox = await (
            await page.$('.ffe-context-message--error')
        ).getAttribute('role');
        expect(messageBox).toBe('alert');
    });
});

test.describe('ContextErrorMessage-alertFalse', () => {
    visitPage('ContextErrorMessage-alertFalse');
    test('dont have role="alert" attribute', async ({ page }) => {
        const messageBox = await (
            await page.$('.ffe-context-message--error')
        ).getAttribute('role');
        expect(messageBox).toBeFalsy();
    });
});

/* Test that cover scenarios shared by all ContextMessage components */
test.describe('ContextSuccessMessage-showCloseButton', () => {
    visitPage('ContextSuccessMessage-showCloseButton');
    test('has clickable area larger than 44 x 44px', async ({ page }) => {
        const button = await (
            await page.$('.ffe-context-message-content__close-button')
        ).boundingBox();
        expect(button.width && button.height).toBeGreaterThanOrEqual(44);
    });
});
