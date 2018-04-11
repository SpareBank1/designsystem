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
    it('provides the blue type property to each AccordionItem', () => {
        const wrapper = getWrapper();
        expect(
            wrapper
                .find('AccordionItem')
                .everyWhere(item => item.prop('type') === 'blue'),
        ).toBe(true);
    });
});
