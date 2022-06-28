const UserNotFound = require('../errors/UserNotFoundError')
const User = require('../models/User')


class GetUser{
    #repository
    constructor(repository){
        this.#repository = repository
    }
    async findByControlNumber(controlNumber){
        const userObj = await this.#repository.findByControlNumber(controlNumber)
        console.log(userObj)
        if (!userObj) throw new UserNotFound(controlNumber, UserNotFound.CONTROL_NUMBER)
        return userObj
    }

    async findByRfid(rfid){
        const userObj = await this.#repository.findByRfid(rfid)
        if (!userObj) throw new UserNotFound(rfid, UserNotFound.RFID)
        return userObj
    }
    
}

module.exports = GetUser