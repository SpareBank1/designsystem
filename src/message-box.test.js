import { shallow } from 'enzyme';
import { assert } from 'chai';
import React from 'react';
import { SuccessMessage, InfoMessage, ErrorMessage, TipsMessage } from './index';

describe('<MessageBox />', () => {
   
    it('should render the proper wrapper element', () => {
        [SuccessMessage, ErrorMessage, InfoMessage, TipsMessage].map(Message => {
            assert.equal(shallow(<Message />).is('div.ffe-message-box'), true);
        })
    });

    it('should render title and content', () => {
        const title = 'Oppdateringen gikk bra';
        const content = 'Dette er en melding til deg';

        [SuccessMessage, ErrorMessage, InfoMessage, TipsMessage].map(Message => {
            const wrapper = shallow(<Message title={ title } content={ content } />);
            assert.equal(new RegExp(title).test(wrapper.text()), true);
            assert.equal(new RegExp(content).test(wrapper.text()), true);
        });
    });

    it('should support HTML content', () => {
        const content = <p className="ninja">Swoosh!</p>;
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
        testClassnames(shallow(<InfoMessage />), 'info');
        testClassnames(shallow(<TipsMessage />), 'tips');
        testClassnames(shallow(<SuccessMessage />), 'success');
        testClassnames(shallow(<ErrorMessage />), 'error');
    });
});
