const test = require('tape');
const proxyquire = require('proxyquire');
const { stub, spy } = require('sinon');

const signIn = proxyquire('../signIn', {
  logger: {
    info: spy()
  }
}).signIn;

/**
 * Test getService handler
 */
test('signIn handler', ({ ok, end }) => {
  const jsonStub = stub();
  const statusStub = stub();
  const req = {};
  const res = {
    status: statusStub,
    send: stub(),
    json: jsonStub
  };

  signIn(req, res);

  ok(statusStub.calledOnce, 'should call response json');
  end();
});
