import React, {
    useRef,
    useEffect,
    useState,
    ComponentPropsWithRef,
} from 'react';
import classNames from 'classnames';
import { mergeRefs } from './mergeRefs';

export interface CollapseProps extends ComponentPropsWithRef<'div'> {
    isOpen: boolean;
    onRest?: () => void;
}

export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
    ({ className, isOpen, onRest, children, ...rest }, ref) => {
        const internalRef = useRef<HTMLDivElement | null>(null);
        const [isHidden, setIsHidden] = useState(!isOpen);
        const [overflowVisible, setOverflowVisible] = useState<boolean>(isOpen);

        useEffect(() => {
            const handleTransition =
                (startOrEnd: 'start' | 'end') => (e: TransitionEvent) => {
                    if (
                        e.target === internalRef.current &&
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
            const collapse = internalRef.current;

            if (collapse) {
                collapse.addEventListener(
                    'transitionstart',
                    handleTransitionStart,
                );
                collapse.addEventListener('transitionend', handleTransitionEnd);
            }

            return () => {
                if (collapse) {
                    collapse.removeEventListener(
                        'transitionstart',
                        handleTransitionStart,
                    );
                    collapse.removeEventListener(
                        'transitionend',
                        handleTransitionEnd,
                    );
                }
            };
        }, [isOpen, onRest]);

        return (
            <div
                {...rest}
                ref={mergeRefs([internalRef, ref])}
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
