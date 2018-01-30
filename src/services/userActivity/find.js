const { MongoRepository } = require('../../repositories/mongodb');

const findUserByUsername = async ({ username }) => {
  const db = await MongoRepository.getConnection();
  const collection = db.collection('_User');
  const user = await collection.findOne({username});

  return user;
};

exports.findUserByUsername = findUserByUsername;
