const { MongoRepository } = require('../../repositories/mongodb');

const findSessionByUserId = async ({ userId }) => {
  const db = await MongoRepository.getConnection();
  const collection = db.collection('_Session');
  const session = await collection.findOne({userId});

  return session;
};

exports.findSessionByUsername = findSessionByUsername;
