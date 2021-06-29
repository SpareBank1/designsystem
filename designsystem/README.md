# SpareBank 1 Designsystem - documentation package

## Playwright tests

In the tests folder you'll find all our playwright tests, checking the
components in FFE against axe, and other scenarios we think it's useful to
ensure good accessibility in our components.

At the point of writing, the tests run towards https://sb1ds-examples.netlify.app/
which host all the different components on independent pages.

### How to run?

To run the playwright tests, you need to navigate to this folder, and run
`npm run test`, if you fail to run the tests, try running the `npm run playwright:install`
command to install the browsers needed to run the tests.
