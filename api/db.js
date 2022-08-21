const { MongoClient } = require("mongodb")

const mongoUrl =
  process.env.NODE_ENV !== "production"
    ? `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DOMAIN}:27017`
    : `mongodb://${process.env.MONGO_DOMAIN}/pet_machine`
const client = new MongoClient(mongoUrl)

client.connect()
const db = client.db(process.env.MONGO_DBNAME)

module.exports = db
