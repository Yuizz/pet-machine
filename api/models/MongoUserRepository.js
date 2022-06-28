const UserRepository = require("./UserRepository");

class MongoUserRepository extends UserRepository{
    #db
    constructor(db){
        super()
        this.#db = db
    }
    save(user){
        return this.#db.collection('users').insertOne({...user})
    }
    findByRfid(rfid){
        return this.#db.collection('users').findOne({rfid})
    }
    findByControlNumber(controlNumber){
        return this.#db.collection('users').findOne({controlNumber})
    }
    updateBalanceByRfid(rfid, balance){
        return this.#db.collection('users').updateOne({rfid},{$set:{balance}})
    }
}

module.exports = MongoUserRepository