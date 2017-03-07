import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import createRafMock from 'mock-raf';

import easeProperties from '../ease-properties';

const rafMock = createRafMock();

const Circle = ({ radius, opacity, ...rest }) => ( // eslint-disable-line react/prop-types
    <circle r={radius} opacity={opacity} {...rest} />
);

describe('easeProperties decorator', () => {
    beforeEach(() => {
        window.requestAnimationFrame = f => f;
        window.cancelAnimationFrame = f => f;

        sinon.stub(window, 'requestAnimationFrame', rafMock.raf);
        sinon.stub(window, 'cancelAnimationFrame', rafMock.cancel);
    });

    afterEach(() => {
        window.requestAnimationFrame.restore();
        window.cancelAnimationFrame.restore();
    });

    describe('initializing', () => {
        it('throws error if properties object is not provided', () => {
            const DecoratedComponent = easeProperties()(Circle);
            expect(() => shallow(<DecoratedComponent />)).to.throwException();
        });

        it('sets provided property to state if single prop', () => {
            const DecoratedComponent = easeProperties({ radius: {} })(Circle);
            const wrapper = shallow(<DecoratedComponent radius={1} />);

            expect(wrapper.state('radius')).to.be.an('object');
        });

        it('sets several properties to state if more than one prop', () => {
            const DecoratedComponent = easeProperties({ radius: {}, opacity: {} })(Circle);
            const wrapper = shallow(<DecoratedComponent radius={1} opacity={1} />);

            expect(wrapper.state('radius')).to.be.an('object');
            expect(wrapper.state('opacity')).to.be.an('object');
        });

        it('sets current value of prop to prop value if initial value is not provided', () => {
            const DecoratedComponent = easeProperties({ radius: {} })(Circle);
            const wrapper = shallow(<DecoratedComponent radius={1} />);

            expect(wrapper.state('radius').currentValue).to.be(1);
        });

        it('sets from value of prop equal to current value', () => {
            const DecoratedComponent = easeProperties({ radius: {} })(Circle);
            const wrapper = shallow(<DecoratedComponent radius={1} />);

            expect(wrapper.state('radius').currentValue).to.be(wrapper.state('radius').fromValue);
        });

        it('sets duration for prop easing if provided', () => {
            const DecoratedComponent = easeProperties({ radius: { duration: 2 } })(Circle);
            const wrapper = shallow(<DecoratedComponent radius={1} />);

            expect(wrapper.state('radius').duration).to.be(2);
        });

        it('defaults duration to 1 second if not provided', () => {
            const DecoratedComponent = easeProperties({ radius: {} })(Circle);
            const wrapper = shallow(<DecoratedComponent radius={1} />);

            expect(wrapper.state('radius').duration).to.be(1);
        });
    });

    describe('easing', () => {
        it('starts easing if eased property changes', () => {
            const DecoratedComponent = easeProperties({ radius: {} })(Circle);
            const wrapper = shallow(<DecoratedComponent radius={1} />);

            wrapper.setProps({ radius: 100 });

            expect(wrapper.find(Circle).prop('radius')).to.be(1);
            rafMock.step({ count: 100 });

            expect(wrapper.find(Circle).prop('radius')).to.be(100);
        });

        it('eases from a larger value to a smaller value as well', () => {
            const DecoratedComponent = easeProperties({ radius: {} })(Circle);
            const wrapper = shallow(<DecoratedComponent radius={100} />);

            wrapper.setProps({ radius: 1 });

            expect(wrapper.find(Circle).prop('radius')).to.be(100);
            rafMock.step({ count: 100 });

            expect(wrapper.find(Circle).prop('radius')).to.be(1);
        });

        it('doesn\'t ease if non-eased property changes', () => {
            const DecoratedComponent = easeProperties({ radius: {} })(Circle);
            const wrapper = shallow(<DecoratedComponent radius={1} />);

            wrapper.setProps({ width: 100 });

            expect(wrapper.find(Circle).prop('width')).to.be(100);
        });

        it('resets the iteration count if prop changes', () => {
            const DecoratedComponent = easeProperties({ radius: {} })(Circle);
            const wrapper = shallow(<DecoratedComponent radius={1} />);

            wrapper.setProps({ radius: 50 });

            rafMock.step({ count: 30 });
            expect(wrapper.state('radius').currentIteration).to.be(30);

            wrapper.setProps({ radius: 100 });
            expect(wrapper.state('radius').currentIteration).to.be(0);
        });

        it('sets current value of prop to its initial value if provided', () => {
            const DecoratedComponent = easeProperties({ radius: { initialValue: 10 } })(Circle);
            const wrapper = shallow(<DecoratedComponent radius={1} />);

            expect(wrapper.state('radius').currentValue).to.be(10);
        });
    });

    describe('unmounting', () => {
        it('cancels pending animation frames', () => {
            const DecoratedComponent = easeProperties({ radius: {} })(Circle);
            const wrapper = shallow(<DecoratedComponent radius={1} />);

            wrapper.setProps({ radius: 9000 });
            rafMock.step({ count: 100 });

            const state = wrapper.state('radius');
            wrapper.unmount();

            expect(window.cancelAnimationFrame.lastCall.args[0]).to.be(state.rafId);
        });
    });
});
