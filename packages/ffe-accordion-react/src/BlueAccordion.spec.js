import { AccordionItem, BlueAccordion } from '.';
import { mount } from 'enzyme';
import React from 'react';

const getWrapper = () =>
    mount(
        <BlueAccordion>
            <AccordionItem>Foo</AccordionItem>
            <AccordionItem>Bar</AccordionItem>
        </BlueAccordion>,
    );

describe('<Accordion />', () => {
    it('adds modifier class to block element', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('.ffe-accordion.ffe-accordion--blue').length).toBe(
            1,
        );
    });
});
