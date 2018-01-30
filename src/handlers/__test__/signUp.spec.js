const test = require('tape');
const proxyquire = require('proxyquire');
const { stub, spy } = require('sinon');

const signUp = proxyquire('../signUp', {
  logger: {
    info: spy()
  }
}).signUp;

/**
 * Test getService handler
 */
test('signUp handler', ({ ok, end }) => {
  const jsonStub = stub();
  const statusStub = stub();
  const req = {};
  const res = {
    status: statusStub,
    send: stub(),
    json: jsonStub
  };

  signUp(req, res);

  ok(statusStub.calledOnce, 'should call response json');
  end();
});
