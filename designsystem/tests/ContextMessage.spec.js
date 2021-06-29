const { test, expect } = require('@playwright/test');
const { visitPage, expectNoAxeViolations } = require('./utils');
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

variations.forEach(variation =>
    test.describe(variation, () => {
        test.beforeEach(async ({ page }) => visitPage(page, variation, true));
        expectNoAxeViolations();
    }),
);

test.describe('ContextErrorMessage', () => {
    test.beforeEach(async ({ page }) => visitPage(page, 'ContextErrorMessage'));
    test('have role="alert" attribute', async ({ page }) => {
        const messageBox = await (
            await page.$('.ffe-context-message--error')
        ).getAttribute('role');
        expect(messageBox).toBe('alert');
    });
});

test.describe('ContextErrorMessage-alertFalse', () => {
    test.beforeEach(async ({ page }) =>
        visitPage(page, 'ContextErrorMessage-alertFalse'),
    );
    test('dont have role="alert" attribute', async ({ page }) => {
        const messageBox = await (
            await page.$('.ffe-context-message--error')
        ).getAttribute('role');
        expect(messageBox).toBeFalsy();
    });
});

/* Test that cover scenarios shared by all ContextMessage components */
test.describe('ContextSuccessMessage-showCloseButton', () => {
    test.beforeEach(async ({ page }) =>
        visitPage(page, 'ContextSuccessMessage-showCloseButton'),
    );
    test('has clickable area larger than 44 x 44px', async ({ page }) => {
        const button = await (
            await page.$('.ffe-context-message-content__close-button')
        ).boundingBox();
        expect(button.width && button.height).toBeGreaterThanOrEqual(44);
    });
});
