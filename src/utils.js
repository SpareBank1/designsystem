import React from 'react';

const checkForNestedComponent = (children, Component) =>
     React.Children.forEach(children, child => {
        if (!child) {
            return;
        } else if (child.type === Component) {
            console.error(`
                Detected a <${Component.name} /> child within another ${Component.name}.
                Do not nest these, the result will be unpredictable.
            `);
        } else if (child.props && child.props.children) {
            return checkForNestedComponent(child.props.children, Component);
        }
    });

export { checkForNestedComponent };

