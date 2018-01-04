/*eslint-env mocha */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

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
        ).to.be.true;
        expect(
            wrapper
                .find('.ffe-expand-button__label')
                .hasClass('ffe-expand-button__label--expanded'),
        ).to.be.true;
    });

    it('renders a button and label without the modifiers if isExpanded is false', () => {
        const wrapper = getWrapper({
            isExpanded: false,
        });
        expect(
            wrapper
                .find('.ffe-expand-button')
                .hasClass('ffe-expand-button--expanded'),
        ).to.be.false;
        expect(
            wrapper
                .find('.ffe-expand-button__label')
                .hasClass('ffe-expand-button__label--expanded'),
        ).to.be.false;
    });

    it('clicking the button calls onClick', () => {
        const onClick = sinon.spy();
        const wrapper = getWrapper({
            onClick,
        });
        wrapper.find('button').simulate('click');
        expect(onClick.calledOnce).to.be.true;
    });
});
