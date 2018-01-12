import { shallow } from 'enzyme';
import React from 'react';
import { SuccessMessage, InfoMessage, ErrorMessage, TipsMessage } from '.';

const forAllMessageBoxes = props => assertion => {
    [SuccessMessage, ErrorMessage, InfoMessage, TipsMessage].forEach(
        MessageBox => {
            const wrapper = shallow(<MessageBox {...props} />);
            assertion(wrapper);
        },
    );
};

describe('<MessageBox />', () => {
    it('renders without exploding', () => {
        forAllMessageBoxes()(wrapper => expect(wrapper.exists()).toBe(true));
    });
    it('renders the correct classes by default', () => {
        forAllMessageBoxes()(wrapper =>
            expect(wrapper.hasClass('ffe-message-box')).toBe(true),
        );

        const successMessageWrapper = shallow(<SuccessMessage title="title" />);
        expect(
            successMessageWrapper.find('.ffe-message-box__box--success'),
        ).toHaveLength(1);
        expect(
            successMessageWrapper.find('.ffe-message-box__icon--success'),
        ).toHaveLength(1);
        expect(
            successMessageWrapper.find('.ffe-message-box__title--success'),
        ).toHaveLength(1);
    });
    it('renders an icon by default', () => {
        forAllMessageBoxes()(wrapper =>
            expect(wrapper.find('.ffe-message-box__icon')).toHaveLength(1),
        );
    });
    it('renders a title if specified', () => {
        forAllMessageBoxes({ title: 'Test title' })(wrapper =>
            expect(wrapper.find('.ffe-h4').text()).toBe('Test title'),
        );
    });
    it('renders children if specified', () => {
        forAllMessageBoxes({ children: <p>children</p> })(wrapper =>
            expect(wrapper.text()).toContain('children'),
        );
    });
});
