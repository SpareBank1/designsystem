/*eslint-env mocha*/
import { shallow } from 'enzyme';
import { assert } from 'chai';
import React from 'react';
import { SuccessMessage, InfoMessage, ErrorMessage, TipsMessage } from './index';

describe('<MessageBox />', () => {

    it('should render the proper wrapper element', () => {
        [SuccessMessage, ErrorMessage, InfoMessage, TipsMessage].forEach(Message => {
            assert.equal(shallow(<Message />).is('div.ffe-message-box'), true);
        });
    });

    it('should render title and content', () => {
        const title = 'Oppdateringen gikk bra';
        const content = 'Dette er en melding til deg';

        [SuccessMessage, ErrorMessage, InfoMessage, TipsMessage].forEach(Message => {
            const wrapper = shallow(<Message title={ title } content={ content } />);
            assert.equal(new RegExp(title).test(wrapper.text()), true);
            assert.equal(new RegExp(content).test(wrapper.text()), true);
        });
    });

    it('should not render title-element if title is not defined', () => {
        const content = 'Dette er en melding til deg';
        const types = ['success, error, info, tips'];

        [SuccessMessage, ErrorMessage, InfoMessage, TipsMessage].forEach((Message, index) => {
            const wrapper = shallow(<Message content={ content } />);
            assert.equal(wrapper.find(`.ffe-message-box__title--${types[index]}`).length, 0,
                `Unexpected css class .ffe-message-box__title--${types[index]} in component output`);
        });
    });

    it('should render content prop inside a paragraph', () => {
        const content = 'Dette er en melding til deg';

        const wrapper = shallow(<InfoMessage content={content} />);

        assert.equal(wrapper.find('.ffe-body-text').length, 1);
    });


    it('should render children without a wrapper', () => {
        const content = (<marquee>Dette er en melding til deg</marquee>);

        const wrapper = shallow(<InfoMessage>{content}</InfoMessage>);

        assert.equal(wrapper.find('.ffe-body-text').length, false);
        assert.equal(wrapper.contains(content), true);
    });


    it('should support HTML content', () => {
        const content = (<p className="ninja">Swoosh!</p>);
        const wrapper = shallow(<SuccessMessage title="" content={ content } />);
        assert.equal(wrapper.contains(content), true);
    });


    it('should support HTML content as children', () => {
        const content = <p className="ninja">Swoosh!</p>;
        const wrapper = shallow(<SuccessMessage title="">{ content }</SuccessMessage>);
        assert.equal(wrapper.contains(content), true);
    });

    function testClassnames(wrapper, type) {
        assert.equal(wrapper.find(`.ffe-message-box__icon--${type}`).length, 1,
            `Expected to find css class .ffe-message-box__icon--${type} in component output`);
        assert.equal(wrapper.find(`.ffe-message-box__title--${type}`).length, 1,
            `Expected to find css class .ffe-message-box__title--${type} in component output`);
        assert.equal(wrapper.find(`.ffe-message-box__box--${type}`).length, 1,
            `Expected to find css class .ffe-message-box__box--${type} in component output`);
    }

    it('should use the correct CSS classes from FFE for the appropriate types', () => {
        const title = 'Title';
        testClassnames(shallow(<InfoMessage title={ title } />), 'info');
        testClassnames(shallow(<TipsMessage title={ title } />), 'tips');
        testClassnames(shallow(<SuccessMessage title={ title } />), 'success');
        testClassnames(shallow(<ErrorMessage title={ title } />), 'error');
    });

    it('should accept style prop to apply styles to outermost container', () => {
        const wrapper = shallow(<SuccessMessage style={ { marginTop: '40px' } } />);

        assert.ok(wrapper.props().style);
        assert.equal(wrapper.props().style.marginTop, '40px');
    });
});
