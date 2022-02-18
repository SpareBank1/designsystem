import React from 'react';
import Label from './Label';

const defaultProps = { htmlFor: 'testId', children: 'label text' };
const getWrapper = props => shallow(<Label {...defaultProps} {...props} />);

describe('<Label>', () => {
    it('renders a label ', () => {
        const wrapper = getWrapper();

        expect(wrapper.is('label')).toBe(true);
        expect(wrapper.hasClass('ffe-form-label')).toBe(true);
    });

    it('passes props correct', () => {
        const wrapper = getWrapper({
            className: 'app-label',
            children: 'test text',
            htmlFor: 'a-new-id',
        });

        expect(wrapper.text()).toMatch(/test text/);
        expect(wrapper.hasClass('app-label')).toBe(true);
        expect(wrapper.prop('htmlFor')).toBe('a-new-id');
    });

    it('sets correct className when block is passed', () => {
        const wrapper = getWrapper({ block: false });

        expect(wrapper.hasClass('ffe-form-label--block')).toBe(false);
        wrapper.setProps({ block: true });
        expect(wrapper.hasClass('ffe-form-label--block')).toBe(true);
    });
});
