import React from 'react';
import { Heading2, Paragraph } from '@sb1/ffe-core-react';
import { AnimatedWave } from '@sb1/ffe-shapes-react';

/**
 * Simple playground page that demonstrates the AnimatedWave component on
 * mobile-sized viewports. The wave is rendered as a fixed background at the top
 * of the page, while the lower rectangle becomes a colour block that can host
 * any content.
 */
const WaveDemo: React.FC = () => {
    const waveHeight = 220;

    return (
        <section
            style={{
                position: 'relative',
                minHeight: `calc(100vh - 4rem)`,
                color: 'white',
            }}
        >
            <AnimatedWave
                height={waveHeight}
                amplitude={25}
                speed={1}
                points={3}
                align="top"
                sharpness={0.8}
                fill="#002776"
            />
        </section>
    );
};

export default WaveDemo;
