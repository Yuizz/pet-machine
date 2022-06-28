const {MongoClient} = require('mongodb')
const mongoUrl = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_DOMAIN}:27017`
const client = new MongoClient(mongoUrl)
client.connect()
const db = client.db('test')
module.exports = db