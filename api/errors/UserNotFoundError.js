class UserNotFound extends Error{
    constructor (controlNumber){
        super()
        this.message = `The user with the control number "${controlNumber}" does not exist.`
    }
}

module.exports = UserNotFound