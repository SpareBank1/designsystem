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
    const waveHeight = 550;

    return (
        <div style={{
            position: 'relative',
            minHeight: `1500px`,
            width: '100%',
            padding: '100px',
            overflow: 'hidden'
        }}>
            <AnimatedWave
                height={waveHeight}
                amplitude={75}
                speed={0.5}
                points={3}
                align="top"
                sharpness={0.8}
                fill="#005AA4"
            />
        </div>
    );
};

export default WaveDemo;
