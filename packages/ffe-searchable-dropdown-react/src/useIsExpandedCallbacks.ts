import { useEffect, useState } from 'react';

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
    const [isInitialRender, setIsInitialRender] = useState(true);
    useEffect(() => {
        const cb = isExpanded ? onOpen : onClose;
        if (!isInitialRender) { cb?.() }
        setIsInitialRender(false);
    }, [isExpanded, onOpen, onClose]);
};
