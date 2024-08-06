module.exports = {
    rules: {
        // Require Camelcase
        // http://eslint.org/docs/rules/camelcase
        camelcase: 2,

        // Enforce or Disallow Semicolons
        // http://eslint.org/docs/rules/semi
        semi: [2, 'always'],

        // Require Following Curly Brace Conventions
        // http://eslint.org/docs/rules/curly
        curly: [2, 'all'],

        // Require space before/after arrow function’s arrow
        // http://eslint.org/docs/rules/arrow-spacing
        'arrow-spacing': 2,

        // Disallows multiple blank lines
        // http://eslint.org/docs/rules/no-multiple-empty-lines
        'no-multiple-empty-lines': [2, { max: 3, maxEOF: 1 }],

        // Disallow new For Side Effects
        // http://eslint.org/docs/rules/no-new
        'no-new': 2,

        // Disallow Use of the Comma Operator
        // http://eslint.org/docs/rules/no-sequences
        'no-sequences': 2,

        // Enforce spacing before and after keywords
        // http://eslint.org/docs/rules/keyword-spacing
        'keyword-spacing': [2, { before: true, after: true }],

        // Disallow a space before function parenthesis
        // http://eslint.org/docs/rules/space-before-function-paren
        'space-before-function-paren': [2, 'never'],

        // Require a space before blocks
        // http://eslint.org/docs/rules/space-before-blocks
        'space-before-blocks': [2, 'always'],

        // Require dot notation
        // http://eslint.org/docs/rules/dot-notation
        'dot-notation': [2, { allowKeywords: true }],

        // enforces return statements in callbacks of array's methods. This does not affect arrow functions.
        // http://eslint.org/docs/rules/array-callback-return
        'array-callback-return': 2,

        // require the use of === and !==
        // http://eslint.org/docs/rules/eqeqeq
        eqeqeq: [2, 'allow-null'],

        // make sure for-in loops have an if statement
        // http://eslint.org/docs/rules/guard-for-in
        'guard-for-in': 2,

        // disallow lexical declarations in case/default clauses
        // http://eslint.org/docs/rules/no-case-declarations.html
        'no-case-declarations': 2,

        // disallow else after a return in an if
        // http://eslint.org/docs/rules/no-else-return
        'no-else-return': 2,

        // disallow Unnecessary Labels
        // http://eslint.org/docs/rules/no-extra-label
        'no-extra-label': 2,

        // Disallow unnecessary function binding
        // http://eslint.org/docs/rules/no-extra-bind
        'no-extra-bind': 2,

        // Disallow Unnecessary Nested Blocks
        // http://eslint.org/docs/rules/no-lone-blocks
        'no-lone-blocks': 2,

        // restrict what can be thrown as an exception
        // http://eslint.org/docs/rules/no-throw-literal
        'no-throw-literal': 2,

        // disallow use of assignment in return statement
        // http://eslint.org/docs/rules/no-return-assign
        'no-return-assign': [2, 'always'],

        // disallow comparisons where both sides are exactly the same
        // http://eslint.org/docs/rules/no-self-compare
        'no-self-compare': 2,

        // disallow usage of expressions in statement position
        // http://eslint.org/docs/rules/no-unused-expressions
        'no-unused-expressions': 2,

        // disallow unused labels
        // http://eslint.org/docs/rules/no-unused-labels
        'no-unused-labels': 2,

        // disallow useless string concatenation
        // http://eslint.org/docs/rules/no-useless-concat
        'no-useless-concat': 2,

        // disallow unnecessary string escaping
        // http://eslint.org/docs/rules/no-useless-escape
        'no-useless-escape': 2,

        // requires to declare all vars on top of their containing scope
        // http://eslint.org/docs/rules/vars-on-top
        'vars-on-top': 2,

        // require immediate function invocation to be wrapped in parentheses
        // http://eslint.org/docs/rules/wrap-iife.html
        'wrap-iife': [2, 'outside'],

        // disallow deletion of variables
        // http://eslint.org/docs/rules/no-delete-var
        'no-delete-var': 2,

        // disallow self assignment
        // http://eslint.org/docs/rules/no-self-assign
        'no-self-assign': 2,

        // disallow shadowing of names such as arguments
        // http://eslint.org/docs/rules/no-shadow-restricted-names
        'no-shadow-restricted-names': 2,

        // disallow declaration of variables already declared in the outer scope
        // http://eslint.org/docs/rules/no-shadow
        'no-shadow': 2,

        // disallow use of variables before they are defined
        // http://eslint.org/docs/rules/no-use-before-define
        'no-use-before-define': 2,
    },
};
