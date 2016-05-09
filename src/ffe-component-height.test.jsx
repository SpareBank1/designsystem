import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';

import ComponentHeight from './ffe-component-height';

class ChildElement extends React.Component {
    componentDidMount() {
        ReactDOM.findDOMNode(this).parentNode.clientHeight = 5000;
    }

    render() {
        return (
            <div className="to-be-measured" style={ { height:'500px' } }>
                test
            </div>
        );
    }
}

describe('ReactHeight', () => {
    let componentMounted, height;

    beforeEach('mount render component', () => {
        componentMounted = mount(
            <div>
                <ComponentHeight
                    onHeightReady={ value => {
                        height = value;
                    } }
                >
                    <ChildElement />
                </ComponentHeight>
            </div>
        );
    });

    it('mounts children', () => {
        expect(componentMounted).to.contain(<ChildElement />);
    });

    it('calculates element height', () => {
        expect(height).to.be.a('number');
        expect(height).to.equal(5000);
    });
});
