import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import TableRowExpandable from './TableRowExpandable';

const props = {
    cells : { name: 'Ola Normann', address: 'Gateveien 2', age: 23, phone: '912 34 567', email: 'ola@normann.no' },
    columns: [
        { key: 'name', content: 'Navn' },
        { key: 'address', content: 'Adresse' },
        { key: 'age', content: 'Alder', alignRight: true },
        { key: 'phone', content: 'Telefon' },
        { key: 'email', content: 'E-post'}
    ]
};

describe('<TableRowExpandable>', () => {

    const wrapper = shallow(
        <TableRowExpandable { ...props }>
            <p>The cake is a lie</p>
        </TableRowExpandable>
    );

    const unexpandableWrapper = shallow(
        <TableRowExpandable { ...props }>
            { false && <div>Ignorance is bliss, and we won't render this</div> }
        </TableRowExpandable>
    );

    it('should be collapsed by default', () => {
        expect(wrapper.state().expanded).to.equal(false);
        expect(wrapper.find('.ffe-responsive-table__row-expandable--expanded')).to.have.length(0);
        expect(wrapper.find('.ffe-responsive-table__row-expandable-content').prop('aria-hidden')).to.equal('true');
        expect(wrapper.find('.ffe-responsive-table__row-expandable-content').hasClass('ffe-responsive-table__row--collapsed')).to.equal(true);
    });

    it('should render expanded content', () => {
        wrapper.setState({ expanded: true });
        expect(wrapper.find('td').last().find('p').text()).to.equal('The cake is a lie');
        expect(wrapper.find('tr').last().hasClass('ffe-responsive-table__row-expandable-content--expanded')).to.equal(true);
        expect(wrapper.find('tr').last().hasClass('ffe-responsive-table__row--collapsed')).to.equal(false);
    });

    it('should pass correct props to TableRow component', () => {
        wrapper.setState({ expanded: true });
        const tableRow = wrapper.find('TableRow').props();
        expect(tableRow.expanded).to.equal(true);
        expect(tableRow.columns).to.equal(props.columns);
        expect(tableRow.trClasses).contains('ffe-responsive-table__row-expandable--expanded');
    });

    it('should pass an expand icon with correct classname to TableRow', () => {
        wrapper.setState({ expanded: true });
        const tableRow = wrapper.find('TableRow').props();
        expect(tableRow.cells.expandIcon.props.className).contains('ffe-responsive-table__expand-icon--expanded');
        expect(tableRow.expandable).to.equal(true);
    });

    it('should not pass an expand icon to TableRows that are not expandable', () => {
        const tableRow = unexpandableWrapper.find('TableRow').props();
        expect(tableRow.cells.expandIcon).to.equal(' ');
        expect(tableRow.expandable).to.equal(false);
    });

    const renderedWrapper = render(
        <TableRowExpandable { ...props }>
            <p>a Festivus for the rest of us</p>
        </TableRowExpandable>
    );

    it('should render a tbody with two tr', () => {
        expect(renderedWrapper.find('tbody').children()).to.have.length(2);
    });

    it('should set the correct aria attributes on tr', () => {
        expect(renderedWrapper.find('tr').first().prop('aria-expanded')).to.equal('false');
        expect(renderedWrapper.find('tr').last().prop('aria-hidden')).to.equal('true');
    });

});
