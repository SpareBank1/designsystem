import React from 'react';
import { mount } from 'enzyme';

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
    it('collapses when close button is clicked', () => {
        const wrapper = getInfoWrapper();
        expect(wrapper.find('UnmountClosed').prop('isOpened')).toBe(true);

        wrapper.find('button').simulate('click');

        expect(wrapper.find('UnmountClosed').prop('isOpened')).toBe(false);
    });
    it('calls onClose prop when close button is clicked', () => {
        const onClose = jest.fn();
        const wrapper = getInfoWrapper({ onClose });

        wrapper.find('button').simulate('click');

        expect(onClose).toHaveBeenCalledTimes(1);
    });
});
