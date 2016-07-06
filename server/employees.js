const _employees = require('./fixtures/employees.json');

const API_DELAY = 500; // Add some latency to simulate a true API call
export default class Employees {
  static all(cb) { setTimeout(() => { cb(null, _employees); }, API_DELAY); }
}
