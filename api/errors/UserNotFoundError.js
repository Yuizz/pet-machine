class UserNotFound extends Error{
    static RFID = "rfid"
    static CONTROL_NUMBER = "control number"
    constructor (id, idType){
        super()
        this.message = `The user with the ${idType} "${id}" does not exist.`
    }
}

module.exports = UserNotFound