import React from 'react';

export default function BackgroundColors() {
    const backgroundColors = [
        'frost-30',
        'sand',
        'sand-70',
        'sand-30',
        'syrin-70',
        'syrin-30',
        'vann',
        'vann-30',
        'fjell',
        'hvit',
    ];

    return (
        <div className="sb1ex-expanded__background">
            {backgroundColors.map(color => (
                <span key={color}>
                    <div
                        className="sb1ex-expanded__background-preview"
                        style={{ backgroundColor: `var(--ffe-farge-${color})` }}
                    />
                    {color}
                </span>
            ))}
        </div>
    );
}
