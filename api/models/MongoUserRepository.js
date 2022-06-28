const UserRepository = require("./UserRepository");

class MongoUserRepository extends UserRepository{
    #db
    constructor(db){
        super()
        this.#db = db
    }
    create(user){
        return this.#db.collection('users').insertOne({...user, createdAt:new Date(), updatedAt:new Date()})
    }
    findByRfid(rfid){
        return this.#db.collection('users').findOne({rfid})
    }
    findByControlNumber(controlNumber){
        return this.#db.collection('users').findOne({controlNumber})
    }
    updateBalanceByRfid(rfid, balance){
        return this.#db.collection('users').updateOne({rfid},{$set:{balance, updatedAt:new Date()}})
    }
}

module.exports = MongoUserRepository