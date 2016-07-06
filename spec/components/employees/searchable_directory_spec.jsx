import React from 'react';
import { mount } from 'enzyme';

import { Employee } from 'js/clients/employees_client';
import SearchableDirectory from 'js/components/employees/searchable_directory';
import Directory from 'js/components/employees/directory';

describe('SearchableDirectory', function() {
  beforeEach(function() {
    this.spec.employees = [
      new Employee({ first_name: 'Bob', last_name: 'Bobberson', email: 'bob@bob.com' }),
      new Employee({ first_name: 'Ted', last_name: 'Tedderson', email: 'ted@ted.com' })
    ];
    this.spec.component = mount(<SearchableDirectory employees={this.spec.employees} />);
  });

  context('with no search terms', function() {
    it('displays all employees', function() {
      expect(this.spec.component.find(Directory)).to.have.length(1);
      expect(this.spec.component.find(Directory).prop('employees')).to.have.length(2);
      expect(this.spec.component.find(Directory).prop('employees')).to.eql(this.spec.employees);
    });

    it('renders an empty input by default', function() {
      expect(this.spec.component.find('input').text()).to.eq('');
    });
  });

  context('with search terms', function() {
    beforeEach(function() {
      this.spec.component.find('input').simulate('change', { target: { value: 'Ted' }});
    });

    it('filters the employees', function() {
      expect(this.spec.component.find(Directory).prop('employees')).to.have.length(1);
    });
  });
});
