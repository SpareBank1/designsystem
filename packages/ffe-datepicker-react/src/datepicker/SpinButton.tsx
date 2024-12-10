import React, { useRef } from 'react';

interface SpinButtonProps extends React.ComponentPropsWithoutRef<'span'> {
    onSpinButtonChange: (value: number[], allowFocusNext?: boolean) => void;
    children: React.ReactNode;
    maxLength: number;
    min: number;
    max: number;
    value?: number;
}

export const SpinButton = React.forwardRef<HTMLSpanElement, SpinButtonProps>(
    (
        { onSpinButtonChange, maxLength, min, max, value, children, ...rest },
        ref,
    ) => {
        const history = useRef<number[]>([]);
        return (
            <span
                role={'spinbutton'}
                inputMode={'numeric'}
                className="ffe-dateinput__field"
                tabIndex={0}
                onFocus={() => {
                    history.current = [];
                }}
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={value}
                ref={ref}
                onKeyDown={evt => {
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
                        let newValue = (value ?? 0) + 1;
                        if (newValue && newValue !== null && newValue > max) {
                            newValue = min;
                        }
                        onSpinButtonChange([newValue], false);
                    } else if (evt.key === 'ArrowDown') {
                        let newValue = (value ?? 0) - 1;
                        if (newValue < min) {
                            newValue = max;
                        }
                        onSpinButtonChange([newValue], false);
                    }
                }}
                {...rest}
            >
                {children}
            </span>
        );
    },
);
