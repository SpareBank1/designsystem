import React, { useRef, useEffect, useState } from 'react';
import { string, bool, func, node } from 'prop-types';
import classNames from 'classnames';

export const Collapse = React.forwardRef(
    ({ className, isOpen, onRest, children, ...rest }, ref) => {
        const internalRef = useRef();
        const collapse = ref ?? internalRef;
        const [isHidden, setIsHidden] = useState(!isOpen);
        const [overflowVisible, setOverflowVisible] = useState(!!isOpen);

        useEffect(() => {
            const _collapse = collapse;
            const handleTransition = startOrEnd => e => {
                if (
                    e.target === collapse.current &&
                    e.propertyName === 'grid-template-rows'
                ) {
                    setIsHidden(!isOpen);
                    if (startOrEnd === 'start') {
                        setOverflowVisible(false);
                    } else {
                        if (isOpen) {
                            setOverflowVisible(true);
                        }
                        if (onRest) {
                            onRest();
                        }
                    }
                }
            };

            const handleTransitionStart = handleTransition('start');
            const handleTransitionEnd = handleTransition('end');

            if (_collapse.current) {
                _collapse.current.addEventListener(
                    'transitionstart',
                    handleTransitionStart,
                );
                _collapse.current.addEventListener(
                    'transitionend',
                    handleTransitionEnd,
                );
            }

            return () => {
                if (_collapse.current) {
                    _collapse.current.removeEventListener(
                        'transitionstart',
                        handleTransitionStart,
                    );
                    _collapse.current.removeEventListener(
                        'transitionend',
                        handleTransitionEnd,
                    );
                }
            };
        }, [collapse, isOpen, onRest]);

        return (
            <div
                {...rest}
                ref={collapse}
                className={classNames('ffe-collapse', className, {
                    'ffe-collapse--open': isOpen,
                    'ffe-collapse--hidden': isHidden,
                })}
            >
                <div
                    className={classNames('ffe-collapse__inner', {
                        'ffe-collapse__inner--visible': overflowVisible,
                    })}
                >
                    {children}
                </div>
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
