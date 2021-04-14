import React, { useRef } from 'react';
import { any, bool, func, object, oneOfType, shape } from 'prop-types';
import { v4 as uuid } from 'uuid';

const ListItemContainer = ({
    item,
    isHighlighted,
    children,
    forwardedRef,
    onMouseEnter,
    onClick,
}) => {
    const id = useRef(`ìtem-${uuid()}`);
    return (
        // eslint-disable-next-line jsx-a11y/interactive-supports-focus
        <div
            id={id.current}
            role="option"
            onMouseEnter={onMouseEnter}
            aria-selected={isHighlighted}
            ref={forwardedRef}
            onClick={onClick}
            className="ffe-searchable-dropdown__list-item-container"
        >
            {children({
                item,
                isHighlighted,
            })}
        </div>
    );
};

ListItemContainer.propTypes = {
    item: object.isRequired,
    isHighlighted: bool.isRequired,
    children: func.isRequired,
    forwardedRef: oneOfType([func, shape({ current: any })]),
    onMouseEnter: func,
    onClick: func,
};

export default React.forwardRef((props, ref) => {
    return <ListItemContainer {...props} forwardedRef={ref} />;
});
