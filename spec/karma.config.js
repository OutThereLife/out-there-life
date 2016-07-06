var webpackConfig = require('../webpack.config.js');
webpackConfig.progress = false;

// Enzyme Patch https://github.com/airbnb/enzyme/issues/47
// https://github.com/webpack/webpack/issues/184
// https://github.com/producthunt/chai-enzyme/issues/46
webpackConfig.externals = {
  'jsdom': 'window'
};
webpackConfig.resolve.extensions.push('.json');

var config = function (config) {
  config.set({
    browsers: [ 'Chrome' ],
    singleRun: true, //just run once by default
    frameworks: [
      'mocha',
      'sinon',
      'sinon-stub-promise',
      'chai'
    ],
    files: [
      'spec_helper.js',
      '*_spec.js*',
      '**/*_spec.js*'
    ],
    preprocessors: {
      'spec_helper.js': [ 'webpack'],
      '*_spec.js*': [ 'webpack'],
      '**/*_spec.js*': [ 'webpack']
    },
    reporters: [ 'mocha' ],
    webpack: webpackConfig,
    webpackServer: { noInfo: true }
  });
};

module.exports = config;
