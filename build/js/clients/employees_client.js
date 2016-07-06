import { Record } from 'immutable';

export const Employee = new Record({
  first_name: '',
  last_name: '',
  email: ''
});

function parse(response) {
  return response.json().then((employees) =>
    employees.map(employee => new Employee(employee))
  );
}

export default class EmployeesClient {
  static all() {
    return fetch('/api/employees').then(parse);
  }
}
