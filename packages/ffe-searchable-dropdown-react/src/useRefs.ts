import React, { createRef, useLayoutEffect, useState } from 'react';

interface Params {
    listToRender: unknown[];
}

export const useRefs = ({ listToRender }: Params) => {
    const [refs, setRefs] = useState<React.RefObject<HTMLDivElement>[]>([]);
    useLayoutEffect(() => {
        setRefs(prevRefs =>
            Array(listToRender.length)
                .fill(null)
                .map((_, i) => prevRefs[i] || createRef()),
        );
    }, [listToRender.length]);

    return refs;
};
