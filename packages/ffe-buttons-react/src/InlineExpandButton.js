import React from 'react';
import { bool, func, node, oneOfType, object, shape } from 'prop-types';
import Symbol from '@sb1/ffe-symbols-react';

import InlineButton from './InlineBaseButton';

const InlineExpandButton = props => {
    const { isExpanded, ...rest } = props;

    return (
        <InlineButton
            buttonType="expand"
            type="button"
            className={isExpanded ? 'ffe-inline-button--expanded' : ''}
            rightIcon={
                <Symbol size="md" ariaLabel="">
                    expand_more
                </Symbol>
            }
            {...rest}
        />
    );
};

InlineExpandButton.propTypes = {
    /** Text that should reflect the isExpanded state. */
    children: node,
    /** Ref-setting function, or ref created by useRef, passed to the button element */
    innerRef: oneOfType([func, shape({ current: object })]),
    /** When true it will indicate the button is in its open state */
    isExpanded: bool.isRequired,
    /** Listen for clicks to toggle the isExpanded state. */
    onClick: func.isRequired,
};

export default InlineExpandButton;
