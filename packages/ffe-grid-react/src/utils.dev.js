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
            The grid should have 6 columns for "md" screens, please stick to a total of 6 columns.
            For "md" screensizes this means you need to stick to multiples of 2 for cols+offset.
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
            The grid should have 4 columns for "sm" screens, please stick to a total of 4 columns.
            For "sm" screensizes this means you need to stick to multiples of 3 for cols+offset.
            Please consult the ffe-grid README.md for details.

            You've provided a <GridCol> with sm={${JSON.stringify(modifier)}}
        `);
    }
};

const checkValidColumnCount = ({ sm, md }) => {
    if (md) {
        checkValidMdColumns(md);
    }
    if (sm) {
        checkValidSmColumns(sm);
    }
};

export { checkForDeprecatedModifiers, checkValidColumnCount };
