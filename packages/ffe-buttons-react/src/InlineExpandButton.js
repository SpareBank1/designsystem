import React from 'react';
import { bool, func, node, oneOfType, object, shape } from 'prop-types';
import { ChevronIkon } from '@sb1/ffe-icons-react';

import InlineButton from './InlineBaseButton';

const InlineExpandButton = props => {
    const { isExpanded, ...rest } = props;

    return (
        <InlineButton
            buttonType="expand"
            type="button"
            rightIcon={
                <ChevronIkon
                    aria-hidden="true"
                    style={{
                        marginLeft: '8px',
                        transform: isExpanded ? 'rotateZ(180deg)' : 'none',
                    }}
                />
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
