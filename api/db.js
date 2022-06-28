const { MongoClient } = require("mongodb");

const dbUser = process.env.MONGO_INITDB_ROOT_USERNAME;
const dbPass = process.env.MONGO_INITDB_ROOT_PASSWORD;
const dbHost = process.env.MONGO_DB_HOST;

const mongoUrl = `mongodb://${dbUser}:${dbPass}@${dbHost}:27017`;
const client = new MongoClient(mongoUrl);
client.connect();
const db = client.db("pet_machine");

module.exports = db;
