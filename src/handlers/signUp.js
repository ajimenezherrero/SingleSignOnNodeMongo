const { findUserByUsername } = require('../services/userActivity/find');
const { createUser } = require('../services/userActivity/create');
const { createSession } = require('../services/sessionActivity/create');
const logger = require('simple-logger-cornerjob').getLogger('Server');

async function signUp(req, res) {
  logger.info('Handler signUp/');
  const { body } = req;

  try {
    if(!body.username || !body.password) throw ({code: 400, message: 'Invalid Request'});

    const { username, password } = body;
    const userExist = await findUserByUsername({ username });

    if (userExist) {
      throw ({code: 400, message: 'There is a User with this Username'});
    } else {
      const userCreated = await createUser({ username, password });
      const token = await createSession({
        userId: userCreated._id
      });

      res.json(token);
    }
  } catch(e) {
    res.status(e.code || 500).send(e.message || e);
  }
}

exports.signUp = signUp;
