import classNames from 'classnames';
import React, { ElementType } from 'react';

export type WaveSectionProps<As extends ElementType = any> = Omit<
    React.ComponentPropsWithoutRef<As>,
    'as' | 'className' | 'children'
> & {
    wavePosition?: 'top' | 'bottom' | 'both';
    backgroundColor?: 'default' | 'accent' | 'subtle';
    children: React.ReactNode;
    as?: As;
    className?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
};

export function WaveSection({
    wavePosition = 'both',
    backgroundColor = 'accent',
    children,
    as: Component = 'section',
    className,
    ...rest
}: WaveSectionProps) {
    if (
        Component === 'section' &&
        !rest['aria-label'] &&
        !rest['aria-labelledby']
    ) {
        console.warn(
            'WaveSection: Denne komponenten bruker <section> som standard HTML-element. Av tilgjengelighetsmessige årsaker bør du derfor alltid sette enten aria-label eller aria-labelledby når du bruker WaveSection som seksjon. Alternativt kan du overstyre komponenten med en annen HTML-tag. ved hjelp av "as"-prop-en.',
        );
    }
    return (
        <Component
            className={classNames('ffe-wave-section', {
                'ffe-accent-mode': backgroundColor === 'accent',
                'ffe-wave-section--subtle': backgroundColor === 'subtle',
            })}
            {...rest}
        >
            {['top', 'both'].includes(wavePosition) && (
                <div
                    className="ffe-wave-section__wave--top"
                    aria-hidden="true"
                />
            )}
            <div className="ffe-wave-section__content">{children}</div>
            {['bottom', 'both'].includes(wavePosition) && (
                <div
                    className="ffe-wave-section__wave--bottom"
                    aria-hidden="true"
                />
            )}
        </Component>
    );
}
