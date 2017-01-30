import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import TableRowExpandable from './TableRowExpandable';

const props = {
    cells : { name: 'Ola Normann', address: 'Gateveien 2', age: 23, phone: '912 34 567', email: 'ola@normann.no' },
    headers: [
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

  it('should be collapsed by default', () => {
      expect(wrapper.state().expanded).to.equal(false);
      expect(wrapper.find('.ffe-responsive-table__row-expandable--expanded')).to.have.length(0);
      expect(wrapper.find('.ffe-responsive-table__row-expanded-content').prop('aria-hidden')).to.equal('true');
  });

  it('should render expanded content', () => {
    wrapper.setState({ expanded: true });
    expect(wrapper.find('td').last().find('p').text()).to.equal('The cake is a lie');
    expect(wrapper.find('tr').last().hasClass('ffe-responsive-table__row-expanded-content--expanded')).to.equal(true);
  });

  const renderedWrapper = render(
	  <TableRowExpandable { ...props }>
		  <p>a Festivus for the rest of us</p>
	  </TableRowExpandable>
  );

  it('should render two tr', () => {
      expect(renderedWrapper.find('tbody tr')).to.have.length(2);
  });

  it('should have the correct aria attributes', () => {
    expect(renderedWrapper.find('tr').first().prop('aria-expanded')).to.equal('false');
    expect(renderedWrapper.find('tr').last().prop('aria-hidden')).to.equal('true');
  });

});
