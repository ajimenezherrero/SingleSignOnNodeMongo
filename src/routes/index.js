const { signInRouter } = require('./signIn');
const { signUpRouter } = require('./signUp');

const importRoutes = {
  signIn: signInRouter,
  signUp: signUpRouter
};

exports.routes = importRoutes;
