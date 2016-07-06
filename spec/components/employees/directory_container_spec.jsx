import React from 'react';

import DirectoryContainer from 'js/components/employees/directory_container';
import { mount } from 'enzyme';

import Loader from 'js/components/elements/loader';
import SearchableDirectory from 'js/components/employees/searchable_directory';
import EmployeesClient, { Employee } from 'js/clients/employees_client';

describe('DirectoryContainer', function() {
  context('before the API request is complete', function() {
    beforeEach(function() {
      this.spec.promise = new Promise(function() {});
      this.spec.sandbox.stub(EmployeesClient, 'all').returns(this.spec.promise);
      this.spec.component = mount(<DirectoryContainer />);
    });

    it('starts in the loading state with no employees', function() {
      expect(this.spec.component.state('loading')).to.be.true;
      expect(this.spec.component.state('employees')).to.have.length(0);
    });

    it('passes loading=true to the Loader', function() {
      expect(this.spec.component.find(Loader).prop('loading')).to.be.true;
      expect(this.spec.component.find(SearchableDirectory)).to.have.length(0);
    });
  });
  context('when the API request is complete', function() {
    beforeEach(function() {
      this.spec.employees = [
        new Employee({ first_name: 'Bob', last_name: 'Bobberson', email: 'bob@bob.com' })
      ];
      this.spec.promise = Promise.resolve(this.spec.employees);
      this.spec.sandbox.stub(EmployeesClient, 'all').returns(this.spec.promise);
      this.spec.component = mount(<DirectoryContainer />);
    });

    it('is no longer in the loading state', function() {
      this.spec.promise.then(() => {
        expect(this.spec.component.state('loading')).to.be.false;
        expect(this.spec.component.state('employees')).to.have.length(1);
      });
    });

    it('renders the Directory with the employees', function() {
      this.spec.promise.then(() => {
        expect(this.spec.component.find(Directory)).to.have.length(1);
        expect(this.spec.component.find(Directory).prop('employees')).to.eql(this.spec.employees);
      });
    });
  });
});
