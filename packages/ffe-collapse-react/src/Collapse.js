import React, { useRef, useEffect, useState } from 'react';
import { string, bool, func, node } from 'prop-types';
import classNames from 'classnames';

export const Collapse = React.forwardRef(
    ({ className, isOpen, onRest, children, ...rest }, ref) => {
        const internalRef = useRef();
        const collapse = ref ?? internalRef;
        const [isHidden, setIsHidden] = useState(!isOpen);

        useEffect(() => {
            if (isOpen) {
                setIsHidden(false);
            }
        }, [isOpen]);

        return (
            <div
                {...rest}
                ref={collapse}
                className={classNames('ffe-collapse', className, {
                    'ffe-collapse--open': isOpen,
                    'ffe-collapse--hidden': isHidden,
                })}
                onTransitionEnd={e => {
                    if (
                        e.target === collapse.current &&
                        e.propertyName === 'grid-template-rows'
                    ) {
                        if (onRest) {
                            onRest();
                        }
                        if (!isOpen) {
                            setIsHidden(true);
                        }
                    }
                }}
            >
                <div className="ffe-collapse__inner">{children}</div>
            </div>
        );
    },
);

Collapse.displayName = 'Collapse';

Collapse.propTypes = {
    className: string,
    isOpen: bool,
    onRest: func,
    /** The content to appear when expanded */
    children: node.isRequired,
};
