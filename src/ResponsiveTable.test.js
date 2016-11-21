import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import ResponsiveTable from './ResponsiveTable';

describe('<ResponsiveTable />', () => {
  const header = { content: 'Some heading', key: 'a-heading' };
  const htmlHeader = { content: <input type="checkbox" />, key: 'a-checkbox' };

  const data = [
    ['One column', <div>Hello</div>, 1],
    ['One column', <div>Hello</div>, 2],
    ['One column', <div>Hello</div>, 3],
  ];

  describe('general', () => {
    it('renders without exploding', () => {
      const wrapper = shallow(<ResponsiveTable />);
      expect(wrapper).to.have.length(1);
    });

    it('renders the correct dom structure', () => {
      const wrapper = shallow(<ResponsiveTable />);
      expect(wrapper.is('table')).to.equal(true);
      expect(wrapper.hasClass('ffe-responsive-table')).to.equal(true);
    });
  });

  describe('table caption', () => {
    it('does not render a <caption /> if caption prop is not provided', () => {
      const wrapper = shallow(<ResponsiveTable />);
      expect(wrapper.find('caption')).to.have.length(0);
    });

    it('renders a <caption /> if caption prop is provided', () => {
      const wrapper = shallow(<ResponsiveTable caption="A nice table" />);
      expect(wrapper.find('caption')).to.have.length(1);
      expect(wrapper.find('caption').text()).to.equal('A nice table');
    });
  });

  describe('table headers', () => {
    it('does not render a <thead /> if headers prop is not provided', () => {
      const wrapper = shallow(<ResponsiveTable />);
      expect(wrapper.find('thead')).to.have.length(0);
    });

    it('does not render a <thead /> if headers prop is empty array', () => {
      const wrapper = shallow(<ResponsiveTable headers={[]}/>);
      expect(wrapper.find('thead')).to.have.length(0);
    });

    it('renders headers inside a <thead />', () => {
      const wrapper = shallow(<ResponsiveTable headers={[header]}/>);
      expect(wrapper.find('thead')).to.have.length(1);
    });

    it('renders headers as <th /> tags', () => {
      const wrapper = shallow(<ResponsiveTable headers={[header, header, header]}/>);
      expect(wrapper.find('th')).to.have.length(3);
    });

    it('renders header content as <th /> content', () => {
      const wrapper = shallow(<ResponsiveTable headers={[header, header, header]}/>);
      expect(wrapper.find('th').first().text()).to.equal(header.content);
    });

    it('renders HTML content as <th /> content', () => {
      const wrapper = shallow(<ResponsiveTable headers={[htmlHeader, header]} />);

      expect(wrapper.find('th').first().contains(htmlHeader.content)).to.equal(true);
    });
  });

  describe('table body', () => {
    it('does not render a tbody if data prop is not provided', () => {
      const wrapper = shallow(<ResponsiveTable />);
      expect(wrapper.find('tbody')).to.have.length(0);
    });

    it('does not render a tbody if data prop is empty', () => {
      const wrapper = shallow(<ResponsiveTable data={[]} />);
      expect(wrapper.find('tbody')).to.have.length(0);
    });

    it('renders a tbody if data is provided', () => {
      const wrapper = shallow(<ResponsiveTable data={data} />);
      expect(wrapper.find('tbody')).to.have.length(1);
    });

    it('renders a <tr /> row for each entry in the data prop', () => {
      const wrapper = shallow(<ResponsiveTable data={data} />);
      expect(wrapper.find('tr')).to.have.length(data.length);
    });

    it('renders a <td /> cell for each entry in each row', () => {
      const wrapper = shallow(<ResponsiveTable data={data} />);
      expect(wrapper.find('td')).to.have.length(data.length * data[0].length);
    });

    it('renders a content-div inside each td', () => {
      const wrapper = shallow(<ResponsiveTable data={data} />);
      expect(
        wrapper.find('.ffe-responsive-table__content').length
      ).to.equal(
        wrapper.find('td').length
      );
    });

    it('renders content of each cell', () => {
      const wrapper = shallow(<ResponsiveTable data={data} />);

      wrapper.everyWhere

      expect(
        wrapper.find('.ffe-responsive-table__content').at(0).text()
      ).to.equal(data[0][0]);
      expect(
        wrapper.find('.ffe-responsive-table__content').contains(data[0][1])
      ).to.equal(true);
    });

    it('adds column heading to data-th property of each cell', () => {
      const wrapper = shallow(
        <ResponsiveTable data={data} headers={[header, header, header]} />
      );
      console.log(wrapper.find('td').first().debug());
      expect(wrapper.find('td').first().prop('data-th')).to.equal(header.content);
    });
  });
});
