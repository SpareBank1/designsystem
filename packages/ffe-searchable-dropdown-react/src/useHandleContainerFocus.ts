import { RefObject, useEffect } from 'react';

interface Params {
    id: string;
    containerRef: RefObject<HTMLDivElement>;
    handleFocusMovedOutside: () => void;
}

export const useHandleContainerFocus = ({
    id,
    containerRef,
    handleFocusMovedOutside,
}: Params) => {
    useEffect(() => {
        /**
         * Because of changes in event handling between react v16 and v17, the check for the
         * event flag will only work in react v17. Therefore, we also check Element.contains()
         * to keep react v16 compatibility.
         */
        const handleContainerFocus = (e: MouseEvent | FocusEvent) => {
            const isFocusInside =
                (e.target &&
                    containerRef.current?.contains(e.target as Element)) ||
                // @ts-ignore
                e.__eventFromFFESearchableDropdownId === id;

            if (!isFocusInside) {
                handleFocusMovedOutside();
            }
        };

        document.addEventListener('mousedown', handleContainerFocus);
        document.addEventListener('focusin', handleContainerFocus);
        return () => {
            document.removeEventListener('mousedown', handleContainerFocus);
            document.removeEventListener('focusin', handleContainerFocus);
        };
    }, [id, containerRef, handleFocusMovedOutside]);
};
