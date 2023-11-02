import React from 'react';
import {
    oneOfType,
    func,
    node,
    string,
    object,
    shape,
    elementType,
} from 'prop-types';
import InlineButton from './InlineBaseButton';
import Symbol from '@sb1/ffe-symbols-react';

const BackButton = props => {
    return (
        <InlineButton
            buttonType="back"
            leftIcon={<Symbol icon="chevron_left" size="md" />}
            {...props}
        />
    );
};

BackButton.propTypes = {
    /** The button label */
    children: node,
    /** Extra class names */
    className: string,
    /** The rendered element, like an `<a />` or `<Link />` */
    element: oneOfType([func, string, elementType]),
    /** Ref-setting function, or ref created by useRef, passed to the button element */
    innerRef: oneOfType([func, shape({ current: object })]),
};

export default BackButton;
