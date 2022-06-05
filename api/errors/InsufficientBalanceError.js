class InsufficientBalanceError extends Error{
    constructor (balanceNeeded){
        super()
        this.message = `Insufficient balance. You need "${balanceNeeded}" to afford the price.`
    }
}

module.exports = InsufficientBalanceError