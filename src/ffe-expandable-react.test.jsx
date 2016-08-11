import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Expandable from './ffe-expandable-react';

class Folded extends React.Component {
    render() {
        return (<div className="folded">
            test content
        </div>);
    }

}

class Expanded extends React.Component {
    componentDidMount() {
        ReactDOM.findDOMNode(this).parentNode.clientHeight = 5000;
    }

    render() {
        return (
            <div className="expanded">
                test content
            </div>
        );
    }
}

describe('ffe-expandable-react', () => {
    let componentMounted, expanded;

    beforeEach('mount render component', () => {
        expanded = <Expanded />;
        componentMounted = mount(
            <Expandable
                isOpen={ true }
                folded={ <Folded /> }
                expanded={ expanded }
                customClass={ 'expandable-wrapper' }
            />
        );
    });

    it('mounts children', () => {
        expect(componentMounted).to.contain(<Folded />);
        expect(componentMounted).to.contain(<Expanded />);
    });

    it('has wrapped Expandable with max-height set to 5000', () => {
        expect(componentMounted.find('.expandable-wrapper')).to.have.style('max-height', '5000px');
    });

    it('has wrapped Expandable with max-height set to 0 when isOpen is false', () => {
        componentMounted = mount(
            <Expandable
                isOpen={ false }
                folded={ <Folded /> }
                expanded={ expanded }
                customClass={ 'expandable-wrapper' }
            />
        );
        expect(componentMounted.find('.expandable-wrapper')).to.have.style('max-height', '0');
    });
});
