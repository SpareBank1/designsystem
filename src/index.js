import React from 'react';
import Accordion from './accordion';
import AccordionItem from './accordion-item';

const WhiteAccordion = props => <Accordion {...props} />;
const BlueAccordion = props => <Accordion {...props} type="blue" />;

export {
    WhiteAccordion,
    BlueAccordion,
    AccordionItem
};
