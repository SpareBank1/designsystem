import React from 'react';
import { node, string } from 'prop-types';
import classNames from 'classnames';
import Button from './Button';

export default function TertiaryButton(props) {
    const {
        leftIcon,
        className,
        children,
        ...rest
    } = props;

    return (
        <Button
            {...rest}
            buttonType="tertiary"
            leftIcon={leftIcon}
            className={classNames(
                className,
                { 'ffe-tertiary-button--with-icon': leftIcon }
            )}
            simpleContent={!leftIcon}
        >
            {children}
        </Button>
    );
}

TertiaryButton.propTypes = {
    className: string,
    children: node,
    leftIcon: node,
};
