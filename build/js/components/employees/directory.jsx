import React, { Component, PropTypes } from 'react';
import { Employee } from 'js/clients/employees_client';

export default class Directory extends Component {
  static propTypes = {
    employees: PropTypes.arrayOf(PropTypes.instanceOf(Employee)).isRequired
  }

  _renderEmployee(employee) {
    return (
      <li key={employee.email}>
        <div><strong>First Name:</strong> {employee.first_name}</div>
        <div><strong>Last Name:</strong> {employee.last_name}</div>
        <div><strong>Email:</strong> {employee.email}</div>
      </li>
    );
  }

  render() {
    return (
      <ul>
        {this.props.employees.map(this._renderEmployee)}
      </ul>
    );
  }
}
