const User = require("../models/User")
const InvalidBalanceToAddError = require("../errors/InvalidBalanceToAddError")

class AddBalance{
    constructor(balanceToAdd, currentBalance){
        this.balanceToAdd = balanceToAdd
        this.currentBalance = currentBalance
    }


    #validateBalance(){
        const Joi = require('joi')
        const schema = Joi.object({
            balanceToAdd: Joi.number().greater(0)
        }).options({abortEarly:false})

        const {value,error}=schema.validate({balanceToAdd:this.balanceToAdd})
        if (error) {
            throw new InvalidBalanceToAddError(error.message)
        }
        return value
    }

    sum(){
        const validatedBalance = this.#validateBalance()
        return this.currentBalance += validatedBalance.balanceToAdd
    }
}

module.exports = AddBalance