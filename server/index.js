const PORT = 8080;

import express from 'express';
const App = express();

import bodyParser from 'body-parser';
App.use(bodyParser.json());

import Api from './api';
App.use('/api', Api);

import Webpack from './webpack';
App.use(Webpack);

App.listen(PORT, '0.0.0.0', (err) => {
  if (err) { throw err; }

  console.log('webpack result is served from localhost:8080');
});
