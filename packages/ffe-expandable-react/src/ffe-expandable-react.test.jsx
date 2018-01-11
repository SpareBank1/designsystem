import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';

import Expandable from './ffe-expandable-react';

const FoldedContent = () => (
    <div className="folded">
        test content
    </div>
);

const ExpandedContent = () => (
    <div className="expanded">
        test content
    </div>
);

describe('ffe-expandable-react', () => {
    let componentMounted;

    beforeEach('mount render component', () => {
        componentMounted = mount(
            <Expandable
                isOpen={true}
                folded={<FoldedContent />}
                expanded={<ExpandedContent />}
                customClass="expandable-wrapper"
            />
        );
        componentMounted.instance().onHeightReady(5000);
    });

    it('mounts children', () => {
        expect(componentMounted).to.contain(<FoldedContent />);
        expect(componentMounted).to.contain(<ExpandedContent />);
    });

    it('adds 2 pixels to height to allow for focus border', () => {
        expect(componentMounted.find('.expandable-wrapper')).to.have.style('height', '5002px');
    });

    it('has wrapped Expandable with height set to 0px when isOpen is false', () => {
        componentMounted = mount(
            <Expandable
                isOpen={false}
                folded={<FoldedContent />}
                expanded={<ExpandedContent />}
                customClass="expandable-wrapper"
            />
        );
        expect(componentMounted.find('.expandable-wrapper')).to.have.style('height', '0px');
    });
});
