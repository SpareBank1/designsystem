import React, { useImperativeHandle, useRef, useState } from 'react';

export interface CalendarWrapperProps {
    children: React.ReactNode;
}

export type CalendarWrapperHandle = {
    readonly open: ({ left, top }: { left: number; top: number }) => void;
    readonly close: () => void;
};

export const CalendarWrapper = React.forwardRef<
    CalendarWrapperHandle,
    CalendarWrapperProps
>(({ children }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);
    const [style, setStyle] = useState<React.CSSProperties>();

    useImperativeHandle(ref, () => ({
        open: ({ top, left }) => {
            setStyle({
                '--top': `${top}px`,
                '--left': `${left}px`,
            } as React.CSSProperties);
            dialogRef.current?.showModal();
        },
        close: () => {
            dialogRef.current?.close();
        },
    }));

    return (
        <dialog
            style={style}
            className="ffe-datepicker__dialog"
            ref={dialogRef}
            onClick={event => {
                const target = event.target as HTMLDialogElement;
                if (target.nodeName === 'DIALOG') {
                    target.close();
                }
            }}
        >
            {children}
        </dialog>
    );
});
