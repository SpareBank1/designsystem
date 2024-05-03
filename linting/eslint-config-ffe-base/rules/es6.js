module.exports = {
    rules: {
        // disallow modifying variables that are declared using const
        // http://eslint.org/docs/rules/no-const-assign
        'no-const-assign': 2,

        // disallow duplicate class members
        // http://eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': 2,

        // disallow importing from the same path more than once
        // http://eslint.org/docs/rules/no-duplicate-imports
        'no-duplicate-imports': 2,

        // disallow symbol constructor
        // http://eslint.org/docs/rules/no-new-symbol
        'no-new-symbol': 2,

        // require let or const instead of var
        // http://eslint.org/docs/rules/no-var
        'no-var': 2,

        // disallow useless computed property keys
        // http://eslint.org/docs/rules/no-useless-computed-key
        'no-useless-computed-key': 2,

        // disallow unnecessary constructor
        // http://eslint.org/docs/rules/no-useless-constructor
        'no-useless-constructor': 2,

        // suggest using of const declaration for variables that are never modified after declared
        // http://eslint.org/docs/rules/prefer-const
        'prefer-const': 2,

        // suggest using the spread operator instead of .apply()
        // http://eslint.org/docs/rules/prefer-spread
        'prefer-spread': 2,

        // use rest parameters instead of arguments
        // http://eslint.org/docs/rules/prefer-rest-params
        'prefer-rest-params': 2,

        // suggest using template literals instead of string concatenation
        // http://eslint.org/docs/rules/prefer-template
        'prefer-template': 2,

        // disallow invalid exports, e.g. multiple defaults
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
        'import/export': 2,

        // disallow non-import statements appearing before import statements
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md
        'import/imports-first': 2,

        // warn on accessing default export property names that are also named exports
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
        'import/no-named-as-default-member': 2,

        // Verifies that all named imports are part of the set of named exports in the referenced module.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
        'import/named': 2,

        // If a default import is requested, this rule will report if there is no default export in the imported module.
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
        'import/default': 2,
    },
};
