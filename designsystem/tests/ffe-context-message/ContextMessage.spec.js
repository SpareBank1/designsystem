const { test, expect } = require('@playwright/test');

/* Tests that cover scenarios shared by all ContextMessage components */
test.describe('ContextSuccessMessage-showCloseButton', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://sb1ds-examples.netlify.app/');
        await page.click('text=ContextSuccessMessage-showCloseButton.jsx');
    });

    test('has clickable area larger than 44 x 44px', async ({ page }) => {
        const button = await (
            await page.$('.ffe-context-message-content__close-button')
        ).boundingBox();
        expect(button.width && button.height).toBeGreaterThanOrEqual(44);
    });
});
