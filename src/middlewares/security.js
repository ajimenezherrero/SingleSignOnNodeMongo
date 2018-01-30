const { SECRET } = require('../config');

const security = (req, res, next) => {
  if (req.header('x-auth-secret') === SECRET) {
    next();
  } else {
    res.status(403).send({
      error: 'Invalid secret'
    });
  }
};

exports.security = security;
