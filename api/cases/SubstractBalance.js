const User = require('../models/User')
const SubstractBalanceError = require('../errors/SubstractBalanceError')
const InsufficientBalanceError = require('../errors/InsufficientBalanceError')

class SubstractBalance{
    constructor(balanceToSubstract, currentBalance){
        this.balanceToSubstract = balanceToSubstract
        this.currentBalance = currentBalance
    }

    #validateSubstract(){
        const Joi = require('joi')
        const schema = Joi.object({
            balanceToSubstract: Joi.number().greater(0)
        }).options({abortEarly:false})

        const {value,error}=schema.validate({balanceToSubstract:this.balanceToSubstract})
        if (error) {
            throw new SubstractBalanceError(error.message)
        }
        return value
    }

    substract(){
        const validateSubstract = this.#validateSubstract()
        const totalBalance = this.currentBalance - validateSubstract.balanceToSubstract
        const balanceNeeded = validateSubstract.balanceToSubstract - this.currentBalance
        if (totalBalance < 0) throw new InsufficientBalanceError(balanceNeeded)
        return totalBalance
    }



}
module.exports = SubstractBalance