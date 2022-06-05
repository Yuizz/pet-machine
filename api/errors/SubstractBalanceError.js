class SubstractBalanceError extends Error{
    constructor (balancetoSubstract){
        super()
        this.message = `The balance you want to substract "${balancetoSubstract}" must be a number and higher than 0.`
    }
}

module.exports = SubstractBalanceError