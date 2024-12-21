const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

const DB_USER = process.env.MONGO_DB_USERNAME
const DB_PASS = process.env.MONGO_DB_PWD

async function connectToDatabase() {
  const client = await MongoClient.connect(`mongodb://${DB_USER}:${DB_PASS}@mongodb`);
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
