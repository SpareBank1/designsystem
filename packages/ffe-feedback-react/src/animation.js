import lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import highFiveAnimation from './high-five-animation.js';

export const Animation = () => {
    const containerRef = useRef();
    useEffect(() => {
        lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            animationData: highFiveAnimation,
        });
    }, []);

    return (
        <div ref={containerRef} style={{ width: '180px', height: '180px' }} />
    );
};
