import React from 'react';
import { bool, func, node, oneOfType, object, shape } from 'prop-types';
import ChevronIkon from '@sb1/ffe-icons-react/lib/chevron-ikon';

import InlineButton from './InlineBaseButton';

const InlineExpandButton = props => {
    const { isExpanded, ...rest } = props;

    return (
        <InlineButton
            buttonType="expand"
            rightIcon={
                <ChevronIkon
                    style={{
                        marginLeft: '5px',
                        transform: isExpanded ? 'rotateX(180deg)' : 'none',
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
