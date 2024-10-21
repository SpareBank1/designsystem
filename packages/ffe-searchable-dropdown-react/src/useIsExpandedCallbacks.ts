import { useEffect } from 'react';

interface Params {
    isExpanded: boolean;
    onOpen?: () => void;
    onClose?: () => void;
}

export const useIsExpandedCallbacks = ({
    isExpanded,
    onOpen,
    onClose,
}: Params) => {
    useEffect(() => {
        const cb = isExpanded ? onOpen : onClose;
        cb?.();
    }, [isExpanded, onOpen, onClose]);
};
