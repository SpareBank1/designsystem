module.exports = {
    rules: {
        // Treat var as Block Scoped
        // http://eslint.org/docs/rules/block-scoped-var
        'block-scoped-var': 2,

        // Enforce linebreak style
        // http://eslint.org/docs/rules/linebreak-style
        'linebreak-style': [2, 'unix'],

        // Disallow Use of caller/callee
        // http://eslint.org/docs/rules/no-caller
        'no-caller': 2,

        // disallow assignment in conditional expressions
        // http://eslint.org/docs/rules/no-cond-assign
        'no-cond-assign': [2, 'always'],

        // Disallow Empty Block Statements
        // http://eslint.org/docs/rules/no-empty
        'no-empty': 2,

        // Disallow eval()
        // http://eslint.org/docs/rules/no-eval
        'no-eval': 2,

        // disallow use of eval()-like methods
        // http://eslint.org/docs/rules/no-implied-eval
        'no-implied-eval': 2,

        // Disallow Extending of Native Objects
        // http://eslint.org/docs/rules/no-extend-native
        'no-extend-native': 2,

        // disallow irregular whitespace outside of strings and comments
        // http://eslint.org/docs/rules/no-irregular-whitespace
        'no-irregular-whitespace': 2,

        // Disallow __iterator__
        // http://eslint.org/docs/rules/no-iterator
        'no-iterator': 2,

        // Disallow Functions in Loops
        // http://eslint.org/docs/rules/no-loop-func
        'no-loop-func': 2,

        // Disallow multiline strings by using \
        // http://eslint.org/docs/rules/no-multi-str
        'no-multi-str': 2,

        // Disallow Use of __proto__
        // http://eslint.org/docs/rules/no-proto
        'no-proto': 2,

        // Disallow Script URLs
        // http://eslint.org/docs/rules/no-script-url
        'no-script-url': 2,

        // Disallow Undeclared Variables
        // http://eslint.org/docs/rules/no-undef
        'no-undef': 2,

        // Disallow Unused Variables
        // http://eslint.org/docs/rules/no-unused-vars
        'no-unused-vars': [2, { vars: 'all', args: 'none' }],

        // No with Statements
        // http://eslint.org/docs/rules/no-with
        'no-with': 2,

        // Strict Mode Directives
        // http://eslint.org/docs/rules/strict
        strict: 2,

        // ensure that the results of typeof are compared against a valid string
        // http://eslint.org/docs/rules/valid-typeof
        'valid-typeof': 2,

        // disallow use of constant expressions in conditions
        // http://eslint.org/docs/rules/no-constant-condition
        'no-constant-condition': 2,

        // disallow duplicate arguments in functions
        // http://eslint.org/docs/rules/no-dupe-args
        'no-dupe-args': 2,

        // disallow duplicate keys when creating object literals
        // http://eslint.org/docs/rules/no-dupe-keys
        'no-dupe-keys': 2,

        // disallow a duplicate case label.
        // http://eslint.org/docs/rules/no-duplicate-case
        'no-duplicate-case': 2,

        // disallow assigning to the exception in a catch block
        // http://eslint.org/docs/rules/no-ex-assign
        'no-ex-assign': 2,

        // disallow unnecessary parentheses
        // http://eslint.org/docs/rules/no-extra-parens
        'no-extra-parens': [2, 'functions'],

        // disallow overwriting functions written as function declarations
        // http://eslint.org/docs/rules/no-func-assign
        'no-func-assign': 2,

        // disallow function or variable declarations in nested blocks
        // http://eslint.org/docs/rules/no-inner-declarations
        'no-inner-declarations': 2,

        // disallow negation of the left operand of an in expression
        // http://eslint.org/docs/rules/no-negated-in-lhs
        'no-negated-in-lhs': 2,

        // disallow the use of object properties of the global object (Math and JSON) as functions
        // http://eslint.org/docs/rules/no-obj-calls
        'no-obj-calls': 2,

        // disallow sparse arrays
        // http://eslint.org/docs/rules/no-sparse-arrays
        'no-sparse-arrays': 2,

        // disallow unreachable statements after a return, throw, continue, or break statement
        // http://eslint.org/docs/rules/no-unreachable
        'no-unreachable': 2,

        // disallow comparisons with the value NaN
        // http://eslint.org/docs/rules/use-isnan
        'use-isnan': 2,

        // Avoid unexpected multiline expressions
        // http://eslint.org/docs/rules/no-unexpected-multiline
        'no-unexpected-multiline': 2,

        // disallow unnecessary semicolons
        // http://eslint.org/docs/rules/no-extra-semi
        'no-extra-semi': 2,

        // disallow empty destructuring patterns
        // http://eslint.org/docs/rules/no-empty-pattern
        'no-empty-pattern': 2,

        // disallow the use of leading or trailing decimal points in numeric literals
        // http://eslint.org/docs/rules/no-floating-decimal
        'no-floating-decimal': 2,

        // disallow reassignments of native objects
        // http://eslint.org/docs/rules/no-native-reassign
        'no-native-reassign': 2,

        // Disallow Function Constructor
        // http://eslint.org/docs/rules/no-new-func
        'no-new-func': 2,

        // disallows creating new instances of String, Number, and Boolean
        // http://eslint.org/docs/rules/no-new-wrappers
        'no-new-wrappers': 2,

        // disallow use of (old style) octal literals
        // http://eslint.org/docs/rules/no-octal
        'no-octal': 2,

        // disallow use of octal escape sequences in string literals, such as
        // var foo = 'Copyright \251';
        // http://eslint.org/docs/rules/no-octal-escape
        'no-octal-escape': 2,

        // disallow reassignment of function parameters
        // disallow parameter object manipulation
        // http://eslint.org/docs/rules/no-param-reassign
        'no-param-reassign': [2, { props: true }],

        // disallow declaring the same variable more then once
        // http://eslint.org/docs/rules/no-redeclare
        'no-redeclare': 2,

        // disallow debugger statements
        //http://eslint.org/docs/rules/no-debugger
        'no-debugger': 2,
    },
};
