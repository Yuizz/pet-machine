class InvalidBalanceToAddError extends Error{
    constructor (message){
        super()
        this.message = message
    }
}

module.exports = InvalidBalanceToAddError