module.exports = {
    rules: {
        // Enforce all anchors to contain accessible content.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-props.md
        'jsx-a11y/aria-props': 2,

        // Enforce all aria-* props are valid.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-proptypes.md
        'jsx-a11y/aria-proptypes': 2,

        // Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-role.md
        'jsx-a11y/aria-role': 2,

        // Enforce that elements that do not support ARIA roles, states, and properties do not have those attributes.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/aria-unsupported-elements.md
        'jsx-a11y/aria-unsupported-elements': 2,

        // Enforce all anchors are valid, navigable elements.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
        'jsx-a11y/anchor-is-valid': 2,

        // Enforce all elements that require alternative text have meaningful information to relay back to end user.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md
        'jsx-a11y/alt-text': 2,

        // Enforce <img> alt prop does not contain the word "image", "picture", or "photo".
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/img-redundant-alt.md
        'jsx-a11y/img-redundant-alt': 2,

        // Enforce that <label> elements have the htmlFor prop.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
        'jsx-a11y/label-has-for': [
            2,
            {
                required: 'id',
            },
        ],

        // Enforce that onMouseOver/onMouseOut are accompanied by onFocus/onBlur for keyboard-only users.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/mouse-events-have-key-events.md
        'jsx-a11y/mouse-events-have-key-events': 2,

        // Enforce that the accessKey prop is not used on any element to avoid complications with keyboard commands used by a screenreader.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-access-key.md
        'jsx-a11y/no-access-key': 2,

        // Enforce usage of onBlur over onChange on select menus for accessibility.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-onchange.md
        'jsx-a11y/no-onchange': 0,

        // Enforce that elements with interactive handlers like onClick must be focusable.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/interactive-supports-focus.md
        'jsx-a11y/interactive-supports-focus': 2,

        // Enforce that non-interactive, visible elements (such as <div>) that have click handlers use the role attribute.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
        'jsx-a11y/no-static-element-interactions': 2,

        // Non-interactive elements should not be assigned mouse or keyboard event listeners.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
        'jsx-a11y/no-noninteractive-element-interactions': 2,

        // Enforce that elements with ARIA roles must have all required attributes for that role.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-has-required-aria-props.md
        'jsx-a11y/role-has-required-aria-props': 2,

        // Enforce that elements with explicit or implicit roles defined contain only aria-* properties supported by that role.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/role-supports-aria-props.md
        'jsx-a11y/role-supports-aria-props': 1,

        // Enforce tabIndex value is not greater than zero.
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/tabindex-no-positive.md
        'jsx-a11y/tabindex-no-positive': 2,

        // Enforce boolean attributes notation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
        'react/jsx-boolean-value': [2, 'always'],

        // Validate JSX has key prop when in array or iterator
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
        'react/jsx-key': [2],

        // Prevent duplicate properties in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
        'react/jsx-no-duplicate-props': [2],

        // Disallow undeclared variables in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
        'react/jsx-no-undef': [2],

        // Enforce PascalCase for user-defined JSX components
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
        'react/jsx-pascal-case': [2],

        // Prevent React to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
        'react/jsx-uses-react': [2],

        // Prevent variables used in JSX to be incorrectly marked as unused
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
        'react/jsx-uses-vars': [2],

        // Ensure correct position of the first property.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
        'react/jsx-first-prop-new-line': [2, 'multiline'],

        // Enforce the closing bracket location for JSX multiline elements.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
        'react/jsx-closing-bracket-location': [2],

        // Prevent usage of dangerous JSX properties
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
        'react/no-danger': [2],

        // Prevent usage of setState in componentDidMount, except when inside a function
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
        'react/no-did-mount-set-state': [2],

        // Prevent usage of setState in componentDidUpdate
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
        'react/no-did-update-set-state': [2],

        // Prevent direct mutation of this.state
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
        'react/no-direct-mutation-state': [2],

        // Prevent usage of isMounted
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
        'react/no-is-mounted': [2],

        // Prevent multiple component definition per file
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
        'react/no-multi-comp': [2, { ignoreStateless: true }],

        // Prevent usage of unknown DOM property
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
        'react/no-unknown-property': [2],

        // Require ES6 class declarations over React.createClass
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
        'react/prefer-es6-class': [2, 'always'],

        // Require stateless functions when not using lifecycle methods, setState or ref
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        'react/prefer-stateless-function': [2],

        // Prevent missing React when using JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
        'react/react-in-jsx-scope': [2],

        // Enforce ES5 or ES6 class for returning value in render function
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
        'react/require-render-return': [2],

        // Prevent extra closing tags for components without children
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
        'react/self-closing-comp': [2],

        // Prevent breaking rules of hooks
        // https://reactjs.org/docs/hooks-rules.html
        'react-hooks/rules-of-hooks': 'error',

        // Warn about hook usage that is probably wrong
        // https://reactjs.org/docs/hooks-rules.html
        'react-hooks/exhaustive-deps': 'warn',
    },
    languageOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        parserOptions: {
            ecmaFeatures: {
                arrowFunctions: true,
                experimentalObjectRestSpread: true,
            },
        },
        globals: {
            // Browser globals
            window: 'readonly',
            document: 'readonly',
            navigator: 'readonly',
            // Node globals
            process: 'readonly',
            __dirname: 'readonly',
            __filename: 'readonly',
            module: 'readonly',
            require: 'readonly',
            console: 'readonly',
        },
    },
    plugins: ['import'],
};
