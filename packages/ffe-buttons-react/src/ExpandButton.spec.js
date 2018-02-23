import React from 'react';
import { shallow } from 'enzyme';

import { ExpandButton } from './index';

const defaultProps = {
    children: <span>Expand-o-matic</span>,
    isExpanded: false,
    onClick: f => f,
};

const getWrapper = props =>
    shallow(<ExpandButton {...defaultProps} {...props} />);

describe('ExpandButton', () => {
    it('renders a button and label with the proper modifiers when isExpanded is true', () => {
        const wrapper = getWrapper({
            isExpanded: true,
        });
        expect(
            wrapper
                .find('.ffe-expand-button')
                .hasClass('ffe-expand-button--expanded'),
        ).toBe(true);
        expect(
            wrapper
                .find('.ffe-expand-button__label')
                .hasClass('ffe-expand-button__label--expanded'),
        ).toBe(true);
    });

    it('renders a button and label without the modifiers if isExpanded is false', () => {
        const wrapper = getWrapper({
            isExpanded: false,
        });
        expect(
            wrapper
                .find('.ffe-expand-button')
                .hasClass('ffe-expand-button--expanded'),
        ).toBe(false);
        expect(
            wrapper
                .find('.ffe-expand-button__label')
                .hasClass('ffe-expand-button__label--expanded'),
        ).toBe(false);
    });

    it('clicking the button calls onClick', () => {
        const onClick = jest.fn();
        const wrapper = getWrapper({
            onClick,
        });
        wrapper.find('button').simulate('click');
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
