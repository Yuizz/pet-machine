const User = require('../models/User')
const SubstractBalanceError = require('../errors/SubstractBalanceError')
const InsufficientBalanceError = require('../errors/InsufficientBalanceError')

class SubstractBalance{
    #repository
    constructor(repository, rfid, balanceToSubstract){
        this.#repository = repository
        this.rfid = rfid
        this.balanceToSubstract = balanceToSubstract
    }

    #validateSubstract(){
        const Joi = require('joi')
        const schema = Joi.object({
            balanceToSubstract: Joi.number().greater(0).required()
        }).options({abortEarly:false})

        const {value,error}=schema.validate({balanceToSubstract:this.balanceToSubstract})
        if (error) {
            throw new SubstractBalanceError(error.message)
        }
        return value
    }

    async substract(){
        const user = await this.#repository.findByRfid(this.rfid)
        const validatedSubstract = this.#validateSubstract()
        const totalBalance = user.balance - validatedSubstract.balanceToSubstract
        const balanceNeeded = validatedSubstract.balanceToSubstract - user.balance
        
        if (totalBalance < 0) throw new InsufficientBalanceError(balanceNeeded)
        
        this.#repository.updateBalanceByRfid(this.rfid, totalBalance)
        return await this.#repository.findByRfid(this.rfid)
    }

}
module.exports = SubstractBalance