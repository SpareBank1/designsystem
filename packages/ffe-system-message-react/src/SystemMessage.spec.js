import React from 'react';

import {
    SystemErrorMessage,
    SystemInfoMessage,
    SystemNewsMessage,
    SystemSuccessMessage,
} from '.';

const defaultProps = {
    children: <span>Message</span>,
};

const getWrapper = Comp => props =>
    mount(<Comp {...defaultProps} {...props} />);

const getErrorWrapper = getWrapper(SystemErrorMessage);
const getInfoWrapper = getWrapper(SystemInfoMessage);
const getNewsWrapper = getWrapper(SystemNewsMessage);
const getSuccessWrapper = getWrapper(SystemSuccessMessage);

describe('<SystemMessage />', () => {
    it('renders without exploding', () => {
        const wrapper = getInfoWrapper();
        expect(wrapper.exists()).toBe(true);
    });
    it('applies the correct modifier classes to each type', () => {
        const errorWrapper = getErrorWrapper();
        expect(
            errorWrapper
                .find('.ffe-system-message-wrapper')
                .hasClass('ffe-system-message-wrapper--error'),
        ).toBe(true);

        const infoWrapper = getInfoWrapper();
        expect(
            infoWrapper
                .find('.ffe-system-message-wrapper')
                .hasClass('ffe-system-message-wrapper--info'),
        ).toBe(true);

        const newsWrapper = getNewsWrapper();
        expect(
            newsWrapper
                .find('.ffe-system-message-wrapper')
                .hasClass('ffe-system-message-wrapper--news'),
        ).toBe(true);

        const successWrapper = getSuccessWrapper();
        expect(
            successWrapper
                .find('.ffe-system-message-wrapper')
                .hasClass('ffe-system-message-wrapper--success'),
        ).toBe(true);
    });
    it('renders with correct aria-label', () => {
        const infoWrapper = getInfoWrapper();
        const successWrapper = getSuccessWrapper();
        const infoEl = infoWrapper.find('.ffe-system-message-wrapper');
        const successEl = successWrapper.find('.ffe-system-message-wrapper');
        expect(infoEl.prop('aria-label')).toBe('Infomelding');
        expect(successEl.prop('aria-label')).toBe('Suksessmelding');
    });
    it('renders with role group on container', () => {
        const infoWrapper = getInfoWrapper();
        const infoEl = infoWrapper.find('.ffe-system-message-wrapper');
        expect(infoEl.prop('role')).toBe('group');
    });

    it('collapses when close button is clicked', done => {
        const wrapper = getInfoWrapper({
            animationLengthMs: 10,
        });
        expect(wrapper.find('.ffe-system-message-wrapper').exists()).toBe(true);
        wrapper.find('button').simulate('click');

        setTimeout(() => {
            wrapper.update();
            expect(wrapper.find('.ffe-system-message-wrapper').exists()).toBe(
                false,
            );
            done();
        }, 20);
    });
    it('calls onClose prop when close button is clicked', done => {
        const onClickSpy = jest.fn();
        const wrapper = getInfoWrapper({
            animationLengthMs: 10,
            onClose: onClickSpy,
        });
        expect(wrapper.find('.ffe-system-message-wrapper').exists()).toBe(true);
        wrapper.find('button').simulate('click');

        setTimeout(() => {
            wrapper.update();
            expect(onClickSpy).toHaveBeenCalledTimes(1);
            done();
        }, 20);
    });
    it('renders a Norwegian aria label on the close button by default', () => {
        const wrapper = getInfoWrapper();
        expect(wrapper.find('button').prop('aria-label')).toBe('Lukk');
    });
    it('renders an English aria-label if locale is "en"', () => {
        const wrapper = getInfoWrapper({
            locale: 'en',
        });
        expect(wrapper.find('button').prop('aria-label')).toBe('Close');
    });
});
