const { MONGO_URL, MONGO_DATABASE } = require('../config');
const { MongoClient } = require('mongodb');

class MongoRepository {

  constructor() {
    this.db = null;
  }

  getConnection() {
    return new Promise((resolve, reject) => {
      if (this.db && this.db.serverConfig && this.db.serverConfig.isConnected()) {
        resolve(this.db);
      } else {
        MongoClient.connect(MONGO_URL, {connectTimeoutMS: 200}, (error, client) => {
          if (error) {
            reject('Fail mongo connection');
          } else {
            this.db = client.db(MONGO_DATABASE);
            resolve(this.db);
          }
        });
      }
    });
  }
}

exports.MongoRepository = new MongoRepository();
