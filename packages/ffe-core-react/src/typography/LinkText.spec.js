import React from 'react';
import { shallow } from 'enzyme';

import LinkText from './LinkText';

const defaultProps = {
    children: 'avtaleteksten',
    href: '/avtale/abc123',
};

const Link = props => (
    <span
        {...props}
    />
);

const getWrapper = props => shallow(<LinkText {...defaultProps} {...props} />);

describe('<LinkText />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.length).toBe(1);
    });

    it('renders an anchor tag by default', () => {
        const wrapper = getWrapper();
        expect(wrapper.is('a')).toBe(true);
    });

    it('lets consumers provide an element', () => {
        const wrapper = getWrapper({
            element: Link,
        });
        expect(wrapper.is('Link')).toBe(true);
    });

    it('adds ffe-link-text class', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-link-text')).toBe(true);
    });

    it('does not add the --no-underline modifier by default', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-link-text--no-underline')).toBe(false);
    });

    it('adds the --no-underline modifier if underline prop is false', () => {
        const wrapper = getWrapper({
            underline: false,
        });
        expect(wrapper.hasClass('ffe-link-text--no-underline')).toBe(true);
    });

    it('adds the given className next to the ffe-link-text classes', () => {
        const wrapper = getWrapper({
            className: 'some-other-class',
        });
        expect(wrapper.hasClass('ffe-link-text')).toBe(true);
        expect(wrapper.hasClass('some-other-class')).toBe(true);
    });

    it('passes on unrecognized props to the anchor', () => {
        const wrapper = getWrapper({
            target: '_blank',
            rel: 'noopener noreferrer',
        });
        expect(wrapper.props().target).toBe('_blank');
        expect(wrapper.props().rel).toBe('noopener noreferrer');
    });
});
