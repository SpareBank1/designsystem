import React, { createContext } from 'react';

interface AccordionContextInterface {
    headingLevel: number;
}

export const AccordionContext = createContext<AccordionContextInterface>({
    headingLevel: 2,
});

interface Props {
    children: React.ReactNode;
    headingLevel: 1 | 2 | 3 | 4 | 5 | 6;
}

export const AccordionProvider: React.FC<Props> = ({
    children,
    headingLevel,
}) => {
    return (
        <AccordionContext.Provider value={{ headingLevel }}>
            {children}
        </AccordionContext.Provider>
    );
};
