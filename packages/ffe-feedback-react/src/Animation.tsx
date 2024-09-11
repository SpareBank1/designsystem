import lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import highFiveAnimation from './highFiveAnimation';

export const Animation = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const instance = lottie.loadAnimation({
            container: containerRef.current as HTMLDivElement,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: highFiveAnimation,
        });
        return () => instance.destroy();
    }, []);

    return (
        <div ref={containerRef} style={{ width: '180px', height: '180px' }} />
    );
};
