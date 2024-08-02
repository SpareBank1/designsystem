import { useEffect, useState } from 'react';

export const useResize = () => {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    useEffect(() => {
        const getSize = () => setSize([window.innerWidth, window.innerHeight]);
        getSize();
        window.addEventListener('resize', getSize);
        return () => window.removeEventListener('resize', getSize);
    }, []);
    return size;
};
