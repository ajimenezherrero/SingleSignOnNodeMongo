const { findUserByUsername } = require('../services/userActivity/find');
const { createSession } = require('../services/sessionActivity/create');
const logger = require('simple-logger-cornerjob').getLogger('Server');

async function signIn(req, res) {
  logger.info('Handler signIn/');
  const { body } = req;

  try {
    if(!body.username || !body.password) throw ({code: 400, message: 'Invalid Request'});
    const userExist = await findUserByUsername({
      username: body.username
    });

    if (userExist) {
      if (userExist.password !== body.password) {
        throw ({code: 404, message: 'Username or Password are incorrect'});
      }

      const token = await createSession({
        userId: userExist._id
      });

      res.status(200).send(token);
    } else {
      throw ({code: 404, message: 'Username or Password are incorrect'});
    }
  } catch(e) {
    res.status(e.code || 500).send(e.message || e);
  }
}

exports.signIn = signIn;
