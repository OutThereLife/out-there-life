import Employees from './employees';

import { Router } from 'express';
const router = new Router();

// Simulate some latency to make the endpoint more realistic
const API_DELAY = 500;

router.route('/employees')
  .get((req, res) => {
    Employees.all((err, employees) => {
      if (err) return res.status(404).send(err);

      return setTimeout(() => res.status(200).json(employees), API_DELAY);
    });
  })
  .post((req, res) => {
    Employees.create(req.body.employee, (err, employee) => {
      if (err) return res.status(422).send({ employee: err });
      return setTimeout(() => res.status(201).json(employee), API_DELAY);
    });
  });

export default router;
