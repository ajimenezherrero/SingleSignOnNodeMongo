const jwt = require('jwt-simple');
const moment = require('moment');

const { findUserByUsername } = require('../userActivity/find');

const { JWT_SECRET } = require('../../config');
const { MongoRepository } = require('../../repositories/mongodb');

const createSession = async ({ userId }) => {
  const db = await MongoRepository.getConnection();
  const collection = db.collection('_Session');
  const expires = moment().add(14, 'days').valueOf();
  const token = jwt.encode({iss: userId, exp: expires}, JWT_SECRET);

  const session = await collection.insert({
    userId,
    token
  });

  return {
    _Session: token
  };
};

exports.createSession = createSession;
