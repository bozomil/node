const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb://mongo:27017/docker-node-mongo'
  );
  database = client.db('auth-blog');
}

function getDb() {
  if (!database) {
    throw { message: 'You must connect first!' };
  }
  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
