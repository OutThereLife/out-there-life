import sinonStubPromise from 'sinon-stub-promise';
sinonStubPromise(sinon);

mocha.suite.beforeEach(function() {
  this.spec = {};
  this.spec.sandbox = sinon.sandbox.create();
});

mocha.suite.afterEach(function() {
  this.spec.sandbox.restore();
});
