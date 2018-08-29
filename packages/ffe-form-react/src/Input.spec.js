import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

const getWrapper = props => shallow(<Input {...props} />);

// These tests are skipped until this issue is resolved
// https://github.com/airbnb/enzyme/pull/1513
// TL;DR: enzyme doesn't support React 16.3 yet
describe.skip('<Input />', () => {
    it('renders an input element', () => {
        const wrapper = getWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.is('input')).toBe(true);
        expect(wrapper.hasClass('ffe-input-field')).toBe(true);
    });

    it('passes props', () => {
        const wrapper = getWrapper({
            autoComplete: true,
            className: 'app-input',
        });
        expect(wrapper.prop('autoComplete')).toBe(true);
        expect(wrapper.hasClass('app-input')).toBe(true);
        expect(wrapper.hasClass('ffe-input-field')).toBe(true);
    });

    // React doesn't pass the ref prop by default, since it's one of two special
    // props (key being the other one). In order to pass the ref prop to the
    // correct element (in this case, the <input />), we use the
    // `React.forwardRef` API. This test verifies that behavior.
    // Learn more about `forwardRef` in the React docs:
    // https://reactjs.org/docs/forwarding-refs.html
    it('passes refs to the correct DOM-element', () => {
        const spy = jest.fn();
        const wrapper = getWrapper({
            ref: { focus: spy },
        });
        wrapper.find('input').prop('ref').focus();
        expect(spy).toHaveBeenCalled();
    })

    it('sets the correct class for inline-modifer', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-input-field--inline')).toBe(false);
        wrapper.setProps({ inline: true });
        expect(wrapper.hasClass('ffe-input-field--inline')).toBe(true);
    });

    it('sets the correct class for textLike-modifer', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-input-field--text-like')).toBe(false);
        wrapper.setProps({ textLike: true });
        expect(wrapper.hasClass('ffe-input-field--text-like')).toBe(true);
    });
});
