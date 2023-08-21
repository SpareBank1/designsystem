import React from 'react';
import {
    func,
    node,
    oneOfType,
    string,
    object,
    shape,
    elementType,
} from 'prop-types';
import InlineButton from './InlineBaseButton';
import Symbol from '@sb1/ffe-symbols-react';

const TertiaryButton = props => {
    const { leftIcon, rightIcon, ...rest } = props;
    return (
        <InlineButton
            buttonType="tertiary"
            leftIcon={
                leftIcon && (
                    <Symbol ariaLabel="" size="sm">
                        {leftIcon}
                    </Symbol>
                )
            }
            rightIcon={
                rightIcon && (
                    <Symbol ariaLabel="" size="sm">
                        {rightIcon}
                    </Symbol>
                )
            }
            {...rest}
        />
    );
};

TertiaryButton.propTypes = {
    /** The button label */
    children: node,
    /** Extra class names */
    className: string,
    /** The rendered element, like an `<a />` or `<Link />` */
    element: oneOfType([func, string, elementType]),
    /** Ref-setting function, or ref created by useRef, passed to the button element */
    innerRef: oneOfType([func, shape({ current: object })]),
    /** Name of icon shown to the left of the label */
    leftIcon: string,
    /** Name of icon shown to the right of the label */
    rightIcon: string,
};

export default TertiaryButton;
