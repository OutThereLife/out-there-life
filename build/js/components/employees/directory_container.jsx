import React, { Component } from 'react';
import EmployeesClient from 'js/clients/employees_client';

import Loader from '../elements/loader';
import Directory from './directory';

export default class DirectoryContainer extends Component {
  state = { loading: true, employees: [] };

  componentWillMount() {
    EmployeesClient.all().then((employees) => {
      this.setState({ loading: false, employees });
    });
  }

  render() {
    return (
      <Loader loading={this.state.loading}>
        <Directory employees={this.state.employees} />
      </Loader>
    );
  }
}
