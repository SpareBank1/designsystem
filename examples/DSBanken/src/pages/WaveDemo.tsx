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

    return (
        <div className="relative overflow-hidden" style={{ minHeight: "1500px" }}>
            {/* Wave component with content rendered inside */}
            <AnimatedWave
                height={800}
                amplitude={20}
                speed={0.5}
                points={3}
                align="top"
                sharpness={0.8}
                fill="#005AA4"
            >
                {/* Content positioned inside the wave's blue area */}
                <div className="w-full px-4 md:px-8 pt-20">
                    <div className="max-w-3xl">
                        <Heading2 className="ffe-accent-mode">
                            Animated Wave Demo
                        </Heading2>

                        <Paragraph className="ffe-accent-mode">
                            This demonstrates the AnimatedWave component with smooth Bézier curve animation.
                            The wave flows naturally across the top of the page, creating a dynamic visual effect.
                            This demonstrates the AnimatedWave component with smooth Bézier curve animation.
                            The wave flows naturally across the top of the page, creating a dynamic visual effect.
                        </Paragraph>
                    </div>
                </div>
            </AnimatedWave>
        </div>
    );
};

export default WaveDemo;
