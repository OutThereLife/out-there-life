import { Router } from 'express';
const router = new Router();

import webpack from 'webpack';
import config from '../webpack.config';

config.plugins.push(new webpack.HotModuleReplacementPlugin());
const devClient = ['webpack-hot-middleware/client?http://0.0.0.0:8080', 'webpack/hot/only-dev-server'];
config.entry = devClient.concat(config.entry);

const compiler = webpack(config);

import webpackDevMiddleware from 'webpack-dev-middleware';
router.use(webpackDevMiddleware(compiler, {
  publicPath: 'http://localhost:8080/',
  stats: { colors: true }
}));

import webpackHotMiddleware from 'webpack-hot-middleware';
router.use(webpackHotMiddleware(compiler));

export default router;
