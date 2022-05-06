class InvalidUserDataError extends Error{
    constructor (message){
        super()
        this.message = message
    }
}

module.exports = InvalidUserDataError