import React, {
    useRef,
    useEffect,
    useState,
    ComponentPropsWithRef,
} from 'react';
import classNames from 'classnames';
import { mergeRefs } from './mergeRefs.js';
import { usePreviousIsOpen } from './usePreviousIsOpen.js';

export interface CollapseProps extends ComponentPropsWithRef<'div'> {
    isOpen: boolean;
    onRest?: () => void;
}

export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
    ({ className, isOpen, onRest, children, ...rest }, ref) => {
        const internalRef = useRef<HTMLDivElement | null>(null);
        const [isHidden, setIsHidden] = useState(!isOpen);
        const [overflowVisible, setOverflowVisible] = useState<boolean>(isOpen);
        const previousIsOpen = usePreviousIsOpen(isOpen);

        useEffect(() => {
            if (
                typeof previousIsOpen === 'boolean' &&
                isOpen !== previousIsOpen
            ) {
                setIsHidden(!isOpen);
                setOverflowVisible(false);
            }
        }, [previousIsOpen, isOpen]);

        return (
            <div
                {...rest}
                ref={mergeRefs([internalRef, ref])}
                className={classNames('ffe-collapse', className, {
                    'ffe-collapse--open': isOpen,
                    'ffe-collapse--hidden': isHidden,
                })}
                onTransitionEnd={e => {
                    if (
                        e.target === internalRef.current &&
                        e.propertyName === 'grid-template-rows'
                    ) {
                        setIsHidden(!isOpen);
                        if (isOpen) {
                            setOverflowVisible(true);
                        }
                        onRest?.();
                    }
                }}
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
