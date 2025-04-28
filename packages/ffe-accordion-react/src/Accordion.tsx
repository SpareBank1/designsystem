import React from 'react';
import classNames from 'classnames';
import { AccordionProvider } from './AccordionContext';

export interface AccordionProps extends React.ComponentPropsWithoutRef<'div'> {
    headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
}

export const Accordion: React.FC<AccordionProps> = ({
    children,
    headingLevel,
    className,
    ...rest
}) => {
    return (
        <AccordionProvider headingLevel={headingLevel}>
            <div
                className={classNames(
                    className,
                    'ffe-accordion',
                    'ffe-default-mode',
                )}
                role="group"
                aria-label="Trekkspillmeny"
                {...rest}
            >
                {children}
            </div>
        </AccordionProvider>
    );
};
