import { useEffect, useRef } from 'react';

export const usePreviousIsOpen = (isOpen: boolean) => {
    const ref = useRef<boolean>();
    useEffect(() => {
        ref.current = isOpen;
    });
    return ref.current;
};
