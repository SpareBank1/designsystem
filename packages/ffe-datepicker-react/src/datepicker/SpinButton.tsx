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
            evt.stopPropagation();

            if (/\d/.test(evt.key)) {
                history.current =
                    history.current.length === maxLength
                        ? (history.current = [parseInt(evt.key)])
                        : history.current.concat(parseInt(evt.key));
                onSpinButtonChange(history.current);
            } else if (evt.key === 'Backspace') {
                history.current = [];
                onSpinButtonChange(history.current);
            } else if (evt.key === 'ArrowUp') {
                evt.preventDefault();
                let newValue = (value ?? 0) + 1;
                if (newValue && newValue !== null && newValue > max) {
                    newValue = min;
                }
                onSpinButtonChange([newValue], false);
            } else if (evt.key === 'ArrowDown') {
                evt.preventDefault();
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
                onKeyDown={handleKeyDown}
                {...rest}
            >
                {children}
            </span>
        );
    },
);
