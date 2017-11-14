import React from 'react';
import { node, element } from 'prop-types';
import Button from './Button';

export default function TertiaryButton(props) {
    const {
        children,
        leftIcon,
        ...rest
    } = props;

    const tertiaryProps = leftIcon ?
        { leftIcon, className: 'ffe-tertiary-button--with-icon' } :
        { simpleContent: true };

    return (
        <Button
            {...rest}
            buttonType="tertiary"
            { ...tertiaryProps }
        >
            {children}
        </Button>
    );
}

TertiaryButton.propTypes = {
    children: node,
    leftIcon: element
};
