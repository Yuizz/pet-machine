class UserRepository{
    create(user){
        throw new Error("Method must be implemented.")
    }
    findByRfid(rfid){
        throw new Error("Method must be implemented.")
    }
    findByControlNumber(controlNumber){
        throw new Error("Method must be implemented.")
    }
    updateBalanceByRfid(rfid, balance){
        throw new Error("Method must be implemented.")
    }
}

module.exports = UserRepository