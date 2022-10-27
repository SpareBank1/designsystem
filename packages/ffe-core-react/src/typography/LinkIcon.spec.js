import React from 'react';
import LinkIcon from './LinkIcon';

const defaultProps = {
    children: <span>test</span>,
    href: '/avtale/abc123',
};

const Link = props => <span {...props} />;

const getWrapper = props => shallow(<LinkIcon {...defaultProps} {...props} />);

describe('<LinkIcon />', () => {
    it('renders without exploding', () => {
        const wrapper = getWrapper();
        expect(wrapper.length).toBe(1);
    });

    it('renders an anchor tag by default', () => {
        const wrapper = getWrapper();
        expect(wrapper.is('a')).toBe(true);
    });
    it('renders child element', () => {
        const wrapper = getWrapper();
        expect(wrapper.find('span')).toHaveLength(1);
    });

    it('lets consumers provide an element', () => {
        const wrapper = getWrapper({
            element: Link,
        });
        expect(wrapper.is('Link')).toBe(true);
    });

    it('adds ffe-link-icon class', () => {
        const wrapper = getWrapper();
        expect(wrapper.hasClass('ffe-link-icon')).toBe(true);
    });

    it('adds the given className next to the ffe-link-icon classes', () => {
        const wrapper = getWrapper({
            className: 'some-other-class',
        });
        expect(wrapper.hasClass('ffe-link-icon')).toBe(true);
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
