class SubstractBalanceError extends Error{
    constructor (message){
        super()
        this.message = message
    }
}

module.exports = SubstractBalanceError