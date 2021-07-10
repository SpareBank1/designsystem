const { test, expect } = require('@playwright/test');
const { visitPage, expectNoAxeViolations } = require('./utils');
const variations = [
    'SystemErrorMessage',
    'SystemErrorMessage-alertFalse',
    'SystemInfoMessage',
    'SystemNewsMessage',
    'SystemSuccessMessage',
];

variations.forEach(variation =>
    test.describe(variation, () => {
        test.beforeEach(async ({ page }) => visitPage(page, variation, true));
        expectNoAxeViolations();
    }),
);

test.describe('SystemErrorMessage', () => {
    test.beforeEach(async ({ page }) => visitPage(page, 'SystemErrorMessage'));
    test('have role="alert" attribute', async ({ page }) => {
        const messageBox = await (
            await page.$('.ffe-system-message-wrapper--error')
        ).getAttribute('role');
        expect(messageBox).toBe('alert');
    });
});

test.describe('SystemErrorMessage-alertFalse', () => {
    test.beforeEach(async ({ page }) =>
        visitPage(page, 'SystemErrorMessage-alertFalse'),
    );
    test('dont have role="alert" attribute', async ({ page }) => {
        const messageBox = await (
            await page.$('.ffe-system-message-wrapper--error')
        ).getAttribute('role');
        expect(messageBox).toBeFalsy();
    });
});
