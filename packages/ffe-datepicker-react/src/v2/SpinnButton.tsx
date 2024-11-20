import React, { useState } from 'react';

interface Props {
    onChange: (date: number) => void;
    children: React.ReactNode;
}

export const SpinnButton = React.forwardRef<HTMLSpanElement, Props>(
    ({ onChange, children }, ref) => {
        const [, setHistory] = useState<string[]>([]);

        return (
            <span
                className="ffe-dateinput__field"
                tabIndex={0}
                onFocus={() => setHistory([])}
                /* onFocus={() => dayRef.current?.focus()}*/
                /* onKeyDown={handleDayChange}*/
                /*  ref={dayRef}*/
                ref={ref}
                onKeyDown={evt => {
                    evt.stopPropagation();
                    if (/\d/.test(evt.key)) {
                        setHistory(prev => {
                            const newHistory = prev.concat(evt.key);
                            console.log(newHistory);
                            const [first, second] = newHistory.slice(-2);
                            console.log(first, second);

                            // onChange(newHistory);
                            return newHistory;
                        });
                    }
                }}
            >
                {children}
            </span>
        );
    },
);
