import { AccordionItem, WhiteAccordion } from '.';
import { shallow } from 'enzyme';
import React from 'react';

const getWrapper = props =>
    shallow(
        <WhiteAccordion {...props}>
            <AccordionItem>Foo</AccordionItem>
            <AccordionItem>Bar</AccordionItem>
        </WhiteAccordion>,
    );

describe('<Accordion />', () => {
    it('renders an unorderered list', () => {
        const wrapper = getWrapper();
        expect(wrapper.is('ul')).toBe(true);
    });
    it('provides the same uuid property to each child', () => {
        const wrapper = getWrapper();
        const children = wrapper.find('AccordionItem');
        expect(children.first().prop('uuid')).toBe(
            children.last().prop('uuid'),
        );
    });
    it('provides different uuids for each instance of the accordion', () => {
        const oneWrapper = getWrapper();
        const anotherWrapper = getWrapper();
        expect(
            oneWrapper
                .find('AccordionItem')
                .first()
                .prop('uuid'),
        ).not.toBe(
            anotherWrapper
                .find('AccordionItem')
                .last()
                .prop('uuid'),
        );
    });
});
