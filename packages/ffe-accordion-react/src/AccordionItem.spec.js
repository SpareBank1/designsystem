import React from 'react';
import { shallow } from 'enzyme';

import { AccordionItem } from '.';

const getWrapper = props => shallow(<AccordionItem {...props} />);

describe('<AccordionItem />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
    });

    describe('expanded content', () => {
        const getWrapperWithExpandedContent = props =>
            getWrapper({ expandedContent: 'Expanded content', ...props });
        it('is hidden by default', () => {
            const wrapper = getWrapperWithExpandedContent();
            expect(wrapper.find('Collapse').prop('isOpen')).toBe(false);
        });
        it('can be shown to begin with', () => {
            const wrapper = getWrapperWithExpandedContent({
                defaultOpen: true,
            });

            expect(wrapper.find('Collapse').prop('isOpen')).toBe(true);
            wrapper
                .find('.ffe-accordion-item__toggler')
                .simulate('click', { target: { nodeName: 'div' } });

            expect(wrapper.find('Collapse').prop('isOpen')).toBe(false);
        });
        it('can be controlled from the outside', () => {
            const wrapper = getWrapperWithExpandedContent({ open: false });
            expect(wrapper.find('Collapse').prop('isOpen')).toBe(false);

            wrapper.setProps({ open: true });

            expect(wrapper.find('Collapse').prop('isOpen')).toBe(true);
        });
        it('it toggled by clicking', () => {
            const wrapper = getWrapperWithExpandedContent();
            wrapper
                .find('.ffe-accordion-item__toggler')
                .simulate('click', { target: { nodeName: 'div' } });
            expect(wrapper.find('Collapse').prop('isOpen')).toBe(true);
        });
        it('is not toggled when clicked item is included in ignoredNodeNames prop', () => {
            const wrapper = getWrapperWithExpandedContent({
                ignoredNodeNames: ['button'],
            });
            wrapper
                .find('.ffe-accordion-item__toggler')
                .simulate('click', { target: { nodeName: 'button' } });
            expect(wrapper.find('Collapse').prop('isOpen')).toBe(false);
        });
        it('is toggled by enter or space', () => {
            const wrapper = getWrapperWithExpandedContent();

            wrapper.find('.ffe-accordion-item__toggler').simulate('keyup', {
                target: { nodeName: 'div' },
                keyCode: 13,
            }); // enter
            expect(wrapper.find('Collapse').prop('isOpen')).toBe(true);

            wrapper.find('.ffe-accordion-item__toggler').simulate('keyup', {
                target: { nodeName: 'div' },
                keyCode: 32,
            }); // esc
            expect(wrapper.find('Collapse').prop('isOpen')).toBe(false);
        });
        it('is not toggled by other keys', () => {
            const wrapper = getWrapperWithExpandedContent();
            wrapper.find('.ffe-accordion-item__toggler').simulate('keyup', {
                target: { nodeName: 'div' },
                keyCode: 14,
            }); // not enter
            expect(wrapper.find('Collapse').prop('isOpen')).toBe(false);
        });
        it('toggling onToggle prop', () => {
            const onToggleOpenSpy = jest.fn();

            const wrapper = getWrapperWithExpandedContent({
                onToggleOpen: onToggleOpenSpy,
            });
            wrapper
                .find('.ffe-accordion-item__toggler')
                .simulate('click', { target: { nodeName: 'div' } });

            expect(onToggleOpenSpy).toHaveBeenCalledTimes(1);
            expect(onToggleOpenSpy).toHaveBeenCalledWith(true);

            wrapper
                .find('.ffe-accordion-item__toggler')
                .simulate('click', { target: { nodeName: 'div' } });

            expect(onToggleOpenSpy).toHaveBeenCalledTimes(2);
            expect(onToggleOpenSpy).toHaveBeenCalledWith(false);
        });
    });
});
