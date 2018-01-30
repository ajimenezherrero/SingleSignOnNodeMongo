const { MongoRepository } = require('../../repositories/mongodb');

const createUser = async ({ username, password }) => {
  const db = await MongoRepository.getConnection();
  const collection = db.collection('_User');

  const result = await collection.insert({
    username,
    password
  });

  const user = result.ops[0];

  return user;
};

exports.createUser = createUser;
