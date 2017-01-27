import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
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

  const wrapper = shallow(<TableRowExpandable { ...props }>
                    <div>
                      <p>The cake is a lie</p>
                    </div>
                  </TableRowExpandable>);

  it('should be collapsed by default', () => {
      expect(wrapper.state().expanded).to.equal(false);
      expect(wrapper.find('tbody tr')).to.have.length(1);
  });

  it('should render expanded content', () => {
      wrapper.setState({ expanded: true });
      expect(wrapper.find('td').last().find('div p').text()).to.equal('The cake is a lie');
  });

});
