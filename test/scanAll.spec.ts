import AxeBuilder from '@axe-core/playwright';
import { test, expect, Page, Locator } from '@playwright/test';
let page: Page;

const getLinks = (heading: string) =>
    page
        .getByRole('heading', { name: heading })
        .locator('//following-sibling::ul')
        .getByRole('link');

const goToLandingPage = async () =>
    await page.goto('http://localhost:1234/', { timeout: 10000 });

const runTest = async (links: Locator) => {
    const count = await links.count();
    for (let i = 0; i < count; i++) {
        const link = links.nth(i);
        const [textContent] = await link.allTextContents();
        console.log(textContent);

        await links.nth(i).click({ force: true });
        const accessibilityScanResults = await new AxeBuilder({
            page,
        })
            .disableRules(['heading-order'])
            .analyze();
        expect(accessibilityScanResults.violations).toEqual([]);
        await goToLandingPage();
    }
};

test.describe('Test all components', () => {
    test.beforeAll(async ({ browser }) => {
        const context = await browser.newContext();
        page = await context.newPage();
        await goToLandingPage();
    });

    test.afterAll(async () => {
        await page.close();
    });

    test('Accordion', async () => {
        await runTest(getLinks('Accordion'));
    });

    test('Account Selector', async () => {
        await runTest(getLinks('Account Selector'));
    });

    test('Buttons', async () => {
        await runTest(getLinks('Buttons'));
    });

    test('Cards', async () => {
        await runTest(getLinks('Cards'));
    });

    test('Chart Donut', async () => {
        await runTest(getLinks('Chart Donut'));
    });

    test('Collapse', async () => {
        await runTest(getLinks('Collapse'));
    });

    test('Datepicker', async () => {
        await runTest(getLinks('Datepicker'));
    });

    test('Details List', async () => {
        await runTest(getLinks('Details List'));
    });

    test('Dropdown', async () => {
        await runTest(getLinks('Dropdown'));
    });

    test('Feedback', async () => {
        await runTest(getLinks('Feedback'));
    });

    test('File Upload', async () => {
        await runTest(getLinks('File Upload'));
    });

    test('Form', async () => {
        await runTest(getLinks('Form'));
    });

    test('Formatting', async () => {
        await runTest(getLinks('Formatting'));
    });

    test('Grid', async () => {
        await runTest(getLinks('Grid'));
    });

    test('Header', async () => {
        await runTest(getLinks('Header'));
    });

    test('Icons', async () => {
        await runTest(getLinks('Icons'));
    });

    test('Lists', async () => {
        await runTest(getLinks('Lists'));
    });

    test('Messages', async () => {
        await runTest(getLinks('Messages'));
    });

    test('Context Message', async () => {
        await runTest(getLinks('Context Message'));
    });

    test('Message Box', async () => {
        await runTest(getLinks('Message Box'));
    });

    test('System Message', async () => {
        await runTest(getLinks('System Message'));
    });

    test('Spinner', async () => {
        await runTest(getLinks('Spinner'));
    });

    test('Symbols', async () => {
        await runTest(getLinks('Symbols'));
    });

    test('Tables', async () => {
        await runTest(getLinks('Tables'));
    });

    test('Tabs', async () => {
        await runTest(getLinks('Tabs'));
    });

    test('Theming', async () => {
        await runTest(getLinks('Theming'));
    });

    test('Typography', async () => {
        await runTest(getLinks('Typography'));
    });

    test('Waves', async () => {
        await runTest(getLinks('Waves'));
    });
});
