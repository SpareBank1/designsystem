import React, { useRef } from 'react';
import classNames from 'classnames';

interface SpinButtonProps extends React.ComponentPropsWithoutRef<'span'> {
    className?: string;
    onSpinButtonChange: (value: number[], allowFocusNext?: boolean) => void;
    children: React.ReactNode;
    maxLength: number;
    min: number;
    max: number;
    value?: number;
    nextSpinButton?: React.RefObject<HTMLSpanElement>;
    prevSpinButton?: React.RefObject<HTMLSpanElement>;
}

export const SpinButton = React.forwardRef<HTMLSpanElement, SpinButtonProps>(
    (
        {
            className,
            onSpinButtonChange,
            maxLength,
            min,
            max,
            value,
            nextSpinButton,
            prevSpinButton,
            children,
            ...rest
        },
        ref,
    ) => {
        const history = useRef<number[]>([]);

        const handleKeyDown = (evt: React.KeyboardEvent) => {
            if (/\d/.test(evt.key)) {
                evt.preventDefault();
                evt.nativeEvent.stopImmediatePropagation();
                const digit = parseInt(evt.key);
                history.current =
                    history.current.length >= maxLength
                        ? [digit]
                        : history.current.concat(digit);
                onSpinButtonChange(history.current);
            } else if (evt.key === 'Backspace' || evt.key === 'Delete') {
                if (value === 0) {
                    history.current = [];
                    prevSpinButton?.current?.focus();
                    return;
                }
                const truncated = value?.toString().slice(0, -1);
                history.current = truncated
                    ? truncated.split('').map(Number)
                    : [];
                onSpinButtonChange(history.current);
            } else if (evt.key === 'ArrowUp') {
                evt.preventDefault();
                history.current = [];
                let newValue = (value ?? 0) + 1;
                if (newValue > max) {
                    newValue = min;
                }
                onSpinButtonChange([newValue], false);
            } else if (evt.key === 'ArrowDown') {
                evt.preventDefault();
                history.current = [];
                let newValue = (value ?? 0) - 1;
                if (newValue < min) {
                    newValue = max;
                }
                onSpinButtonChange([newValue], false);
            } else if (evt.key === 'ArrowLeft') {
                evt.preventDefault();
                prevSpinButton?.current?.focus();
            } else if (evt.key === 'ArrowRight') {
                evt.preventDefault();
                nextSpinButton?.current?.focus();
            }
        };

        return (
            <span
                role={'spinbutton'}
                inputMode={'numeric'}
                className={classNames(className, 'ffe-dateinput__field')}
                tabIndex={0}
                onFocus={() => {
                    history.current = [];
                }}
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={value}
                ref={ref}
                {...rest}
                onKeyDown={handleKeyDown}
                onKeyUp={evt => {
                    if (/\d/.test(evt.key)) {
                        evt.preventDefault();
                        evt.nativeEvent.stopImmediatePropagation();
                    }
                }}
            >
                {children}
            </span>
        );
    },
);
