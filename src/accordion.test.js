import { assert } from 'chai';
import { whiteAccordion, blueAccordion } from '../docs/example-component';
import { AccordionItem } from '../src/';
import { shallow, render } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

const wrapperHasContent = (wrapper, content) => new RegExp(content).test(wrapper.html());

describe('ffe-accordion-react', () => {

    it('should render the proper amount of accordion items', () => {
        const wrapper = render(whiteAccordion);

        assert.equal(
            wrapper.find('.ffe-accordion-item').length,
            4);
    });

    it('should output content', () => {
        const wrapper = render(whiteAccordion);

        assert.equal(
            wrapperHasContent(wrapper, 'What is Lorem Ipsum?'),
            true);

        assert.equal(
            wrapperHasContent(wrapper, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'),
            true);
    });

    it('should use the correct type', () => {
        assert.equal(
            wrapperHasContent(render(blueAccordion), '.ffe-accordion-item--blue'),
            true);

        assert.equal(
            wrapperHasContent(render(blueAccordion), '.ffe-accordion-item--white'),
            false);

        assert.equal(
            wrapperHasContent(render(whiteAccordion), 'ffe-accordion-item--white'),
            true);

        assert.equal(
            wrapperHasContent(render(blueAccordion), 'ffe-accordion-item--blue'),
            true);
    });

    it('should toggle open/closed-state', () => {
        const itemWrapper = shallow(
            <AccordionItem
                expandedContent="Expanded"
                index={ 0 }
                isOpen={ false }
                uuid="some uuid"
            >
                Standard content
            </AccordionItem>
        );

        assert.equal(
            wrapperHasContent(itemWrapper, 'ffe-accordion-item--open'),
            false);

        itemWrapper.find('.ffe-accordion-item__toggler').simulate('click');

        assert.equal(
            wrapperHasContent(itemWrapper, 'ffe-accordion-item--open'),
            true);

        itemWrapper.find('.ffe-accordion-item__toggler').simulate('click');

        assert.equal(
            wrapperHasContent(itemWrapper, 'ffe-accordion-item--open'),
            false);
    });

    it('should call callback functions on open/closed-state', () => {
        const onOpen = sinon.spy();
        const onClose = sinon.spy();
        const itemWrapper = shallow(
            <AccordionItem
                expandedContent="Expanded"
                index={ 0 }
                isOpen={ false }
                onOpen={ onOpen }
                onClose={ onClose }
                uuid="some uuid"
            >
                Standard content
            </AccordionItem>
        );

      itemWrapper.find('.ffe-accordion-item__toggler').simulate('click');

      assert.equal(
        onOpen.callCount,
        1);

      assert.equal(
        onClose.callCount,
        0);

      itemWrapper.find('.ffe-accordion-item__toggler').simulate('click');

      assert.equal(
        onOpen.callCount,
        1);

      assert.equal(
        onClose.callCount,
        1);
    });
});
