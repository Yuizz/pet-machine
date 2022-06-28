const User = require("../models/User")
const InvalidBalanceToAddError = require("../errors/InvalidBalanceToAddError")

class AddBalance{
    #repository
    constructor( repository, rfid, balanceToAdd){
        this.#repository = repository
        this.rfid = rfid
        this.balanceToAdd = balanceToAdd
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

    async sum(){
        const user = await this.#repository.findByRfid(this.rfid)
        const validatedBalance = this.#validateBalance()
        this.#repository.updateBalanceByRfid(this.rfid, user.balance + validatedBalance.balanceToAdd)
        return await this.#repository.findByRfid(this.rfid)
    }
}

module.exports = AddBalance