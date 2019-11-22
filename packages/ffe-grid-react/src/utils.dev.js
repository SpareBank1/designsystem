import React from 'react';

const ALLOWED_NESTED_COMPONENTS = ['InlineGrid'];

const checkForNestedComponent = (children, Component, componentName) =>
    React.Children.forEach(children, child => {
        if (
            !child ||
            (child.type &&
                child.type.name &&
                ALLOWED_NESTED_COMPONENTS.some(c => c === child.type.name))
        ) {
            return;
        } else if (child.type === Component) {
            console.error(`
                Detected a <${
                    Component.name
                } /> child within an ${componentName || Component.name}.
                Do not nest these, the result will be unpredictable.
            `);
        } else if (child.props && child.props.children) {
            return checkForNestedComponent(
                child.props.children,
                Component,
                componentName,
            );
        }
    });

const DEPRECATED_MODIFIERS = {
    vertical:
        '`<GridCol vertical={true} />` is the default behavior. You can safely remove this prop.',
};
const checkForDeprecatedModifiers = props => {
    Object.keys(props)
        .filter(propName => DEPRECATED_MODIFIERS[propName])
        .forEach(propName => console.error(DEPRECATED_MODIFIERS[propName]));
};

const checkValidMdColumns = modifier => {
    const total =
        typeof modifier === 'object'
            ? modifier.cols + modifier.offset
            : modifier;

    if (
        !(
            total % 2 === 0 &&
            (modifier.cols || 0) % 2 === 0 &&
            (modifier.offset || 0) % 2 === 0
        )
    ) {
        console.error(`
            For "md" screensizes, both cols and offset should be multiples of 2.
            Please consult the ffe-grid README.md for details.

            You've provided a <GridCol> with md={${JSON.stringify(modifier)}}
        `);
    }
};

const checkValidSmColumns = modifier => {
    const total =
        typeof modifier === 'object'
            ? modifier.cols + modifier.offset
            : modifier;

    if (
        !(
            total % 3 === 0 &&
            (modifier.cols || 0) % 3 === 0 &&
            (modifier.offset || 0) % 3 === 0
        )
    ) {
        console.error(`
            For "sm" screensizes, both cols and offset should be multiples of 3.
            Please consult the ffe-grid README.md for details.

            You've provided a <GridCol> with sm={${JSON.stringify(modifier)}}
        `);
    }
};

const checkValidColumnCount = ({ sm, md }, domNode) => {
    if (domNode) {
        let parent = domNode.parentElement;
        while (parent) {
            if (parent.className.indexOf('--inline') !== -1) {
                return;
            }
            parent = parent.parentElement;
        }
    }

    if (md) {
        checkValidMdColumns(md);
    }
    if (sm) {
        checkValidSmColumns(sm);
    }
};

export {
    checkForDeprecatedModifiers,
    checkForNestedComponent,
    checkValidColumnCount,
};
