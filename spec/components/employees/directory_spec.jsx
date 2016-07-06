import React from 'react';

import Directory from 'js/components/employees/directory';
import { shallow } from 'enzyme';

import { Employee } from 'js/clients/employees_client';

describe('Directory', function() {
  beforeEach(function() {
    this.spec.employees = [
      new Employee({ first_name: 'Bob', last_name: 'Bobberson', email: 'bob@bob.com' }),
      new Employee({ first_name: 'Ted', last_name: 'Tedderson', email: 'ted@ted.com' })
    ];

    this.spec.component = shallow(<Directory employees={this.spec.employees} />);
  });

  it('renders an <li /> for each employee', function() {
    expect(this.spec.component.find('li')).to.have.length(2);
  });

  it('renders the employee details within each <li />', function() {
    this.spec.component.find('li').forEach((li, i) => {
      expect(li.find('div')).to.have.length(3);
      expect(li.find('div').at(0).text()).to.include(this.spec.employees[i].first_name);
      expect(li.find('div').at(1).text()).to.include(this.spec.employees[i].last_name);
      expect(li.find('div').at(2).text()).to.include(this.spec.employees[i].email);
    });
  });
});
