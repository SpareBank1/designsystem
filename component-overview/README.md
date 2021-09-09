# Component overview

This package might only be useful if you are a contributing developer or if you
want to build a documentation framework for our designsystem.

We just had to build our own framework for previewing components.

## package `@sb1/ffe-component-overview`

You probably won't need this.
The package contains some named exports:

-   `examples` - compiled code examples from `./examples/`
-   `reactDoc` - output of react-docgen
-   `packages` - list of all packages

Also there is `lib/style.css` with everything.

## Component overview

Preview ./examples on localhost:8080

```
npm install
npm start
```

## Playwright tests

In the tests folder you'll find all our playwright tests, checking the
components in FFE against axe, and other scenarios we think it's useful to
ensure good accessibility in our components.

### How to run?

```
npm test
```

To run the playwright tests, you need to navigate to this folder, and run
`npm test`, if you fail to run the tests, try running the `npm run playwright:install`
command to install the browsers needed to run the tests.
