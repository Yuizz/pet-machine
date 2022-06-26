const {MongoClient} = require('mongodb')
const mongoUrl = "mongodb://jugo:pass@localhost:27017"
const client = new MongoClient(mongoUrl)
client.connect()
const db = client.db('test')

module.exports = db