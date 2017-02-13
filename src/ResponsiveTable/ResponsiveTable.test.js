/*eslint-env mocha*/
import React from 'react';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';

import ResponsiveTable from './ResponsiveTable';

describe('<ResponsiveTable />', () => {
  const columns = [
    { key: 'name', header: 'Navn' },
    { key: 'address', header: 'Adresse' },
    { key: 'age', header: 'Alder', alignRight: true }
  ];
  const columnsWithFooterContent = [
    { key: 'name', header: 'Navn', footer: 'Sum alder' },
    { key: 'address', header: 'Adresse' },
    { key: 'age', header: 'Alder', footer: 135, alignRight: true }
  ];
  const data = [
    { name: 'Ola Normann', address: 'Gateveien 2', age: 23, phone: '912 34 567' },
    { name: 'Sivert Svenska', address: 'Gatuveio 7', age: 45, phone: '+46 123 456 789' },
    { name: 'Daniel Dansk', address: 'Kartoffel Fjers', age: 67, phone: '+45 018 456 789' }
  ];

  describe('general', () => {
    it('renders without exploding', () => {
      const wrapper = shallow(<ResponsiveTable columns={columns} data={data}/>);
      expect(wrapper).to.have.length(1);
    });

    it('renders the correct dom structure', () => {
      const wrapper = shallow(<ResponsiveTable columns={columns} data={data}/>);
      expect(wrapper.is('table')).to.equal(true);
      expect(wrapper.hasClass('ffe-responsive-table')).to.equal(true);
    });
  });

  describe('table caption', () => {
    it('does not render a <caption /> if caption prop is not provided', () => {
      const wrapper = shallow(<ResponsiveTable columns={columns} data={data}/>);
      expect(wrapper.find('caption')).to.have.length(0);
    });

    it('renders a <caption /> if caption prop is provided', () => {
      const wrapper = shallow(<ResponsiveTable columns={columns} data={data} caption="A nice table" />);
      expect(wrapper.find('caption')).to.have.length(1);
      expect(wrapper.find('caption').text()).to.equal('A nice table');
    });
  });

  describe('table headers', () => {
    const wrapper = render(<ResponsiveTable columns={columns} data={data}/>);

    it('renders columns inside a <thead />', () => {
      expect(wrapper.find('thead')).to.have.length(1);
    });

    it('renders columns as <th /> tags', () => {
      expect(wrapper.find('th')).to.have.length(3);
    });

    it('renders header content as <th /> content', () => {
      expect(wrapper.find('th').first().text()).to.equal(columns[0].header);
    });

  });

  describe('table footer', () => {
     const wrapper = render(<ResponsiveTable columns={columnsWithFooterContent} data={data}/>);

    it('renders a <tfoot />', () => {
      expect(wrapper.find('tfoot')).to.have.length(1);
    });

    it('renders the footer content inside <tfoot />', () => {
      expect(wrapper.find('tfoot').find('td').first().text()).to.equal('Sum alder');
    });

    it('does not render <tfoot /> unless footer is present in columns', () => {
      const wrapperWithoutFooterContent = render(<ResponsiveTable columns={columns} data={data}/>);
      expect(wrapperWithoutFooterContent.find('tfoot')).to.have.length(0);
    });
  });

  describe('table body', () => {

    it('does not render a tbody if data prop is empty', () => {
      const wrapper = shallow(<ResponsiveTable columns={columns} data={[]} />);
      expect(wrapper.find('tbody')).to.have.length(0);
    });

    it('renders a tbody if data is provided', () => {
      const wrapper = shallow(<ResponsiveTable columns={columns} data={data} />);
      expect(wrapper.find('tbody')).to.have.length(1);
    });

    it('renders a <tr /> row for each entry in the data prop', () => {
      const wrapper = render(<ResponsiveTable columns={columns} data={data} />);
      expect(wrapper.find('tbody tr')).to.have.length(data.length);
    });

    it('renders a <td /> cell for each entry in each row', () => {
      const wrapper = render(<ResponsiveTable columns={columns} data={data} />);
      expect(wrapper.find('td')).to.have.length(data.length * columns.length);
    });

    it('renders a content-div inside each td', () => {
      const wrapper = render(<ResponsiveTable columns={columns} data={data} />);
      expect(
        wrapper.find('td .ffe-responsive-table__content').length
      ).to.equal(
        data.length * columns.length
      );
    });

    it('renders content of each cell', () => {
      const wrapper = render(<ResponsiveTable columns={columns} data={data} />);
      expect(
        wrapper.find('td .ffe-responsive-table__content').first().text()
      ).to.equal(data[0].name);
    });

    it('adds column heading to data-th property of each cell', () => {
      const wrapper = render(<ResponsiveTable data={data} columns={columns} />);

      expect(wrapper.find('[data-th="Navn"]')).to.have.length(columns.length);
      expect(wrapper.find('td').first().prop('data-th')).to.equal(columns[0].header);
    });
  });
});
