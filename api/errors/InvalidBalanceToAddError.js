class InvalidBalanceToAddError extends Error{
    constructor (balanceToAdd){
        super()
        this.message = `The inserted balance "${balanceToAdd}" must be a number and be higher than 0`
    }
}

module.exports = InvalidBalanceToAddError