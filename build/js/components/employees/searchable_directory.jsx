import React, { Component, PropTypes } from 'react';
import { Employee } from 'js/clients/employees_client';

import TextInput from '../elements/text_input.jsx';
import Directory from './directory';

export default class SearchableDirectory extends Component {
  static propTypes = {
    employees: PropTypes.arrayOf(PropTypes.instanceOf(Employee)).isRequired
  }

  state = { search: '' };

  _onSearch = (event) => {
    this.setState({ search: event.target.value });
  }

  _matchesSearch(attribute) {
    return attribute.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0;
  }

  _filteredEmployees() {
    if (!this.state.search) { return this.props.employees; }

    return this.props.employees.filter((employee) =>
      this._matchesSearch(employee.first_name) ||
        this._matchesSearch(employee.last_name) ||
        this._matchesSearch(employee.email)
    );
  }

  render() {
    return (
      <div>
        <TextInput value={this.state.search} onChange={this._onSearch} />
        <Directory employees={this._filteredEmployees()} />
      </div>
    );
  }
}
