import React, { useRef } from 'react';

interface Props {
    onChange: (value: number[]) => void;
    children: React.ReactNode;
    maxLength: number;
}

export const SpinnButton = React.forwardRef<HTMLSpanElement, Props>(
    ({ onChange, maxLength, children }, ref) => {
        const history = useRef<number[]>([]);

        return (
            <span
                className="ffe-dateinput__field"
                tabIndex={0}
                onFocus={() => {
                    history.current = [];
                }}
                ref={ref}
                onKeyDown={evt => {
                    evt.stopPropagation();

                    if (/\d/.test(evt.key)) {
                        history.current =
                            history.current.length === maxLength
                                ? (history.current = [parseInt(evt.key)])
                                : history.current.concat(parseInt(evt.key));
                        onChange(history.current);
                    } else if (evt.key === 'Backspace') {
                        history.current = [];
                        onChange(history.current);
                    }
                }}
            >
                {children}
            </span>
        );
    },
);
