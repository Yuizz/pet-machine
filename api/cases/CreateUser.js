const User = require("../models/User")
const InvalidUserDataError = require ("../errors/InvalidUserDataError")

class CreateUser{
    #repository
    constructor(repository, data){
        this.#repository = repository
        this.data = data
    }
    #validateData(){
        const Joi = require('joi')
        const schema = Joi.object({
            controlNumber: Joi.string().regex(/^\d+$/).required(),  //El patron regex hace match con un string de puros numeros
            mail: Joi.string().email().required(),
            name: Joi.string().max(70).required(),
            balance: Joi.number().min(0).default(0),
            rfid: Joi.string().min(10).max(10).required()
        }).options({abortEarly:false})
        
        const {value,error}=schema.validate(this.data)
        if (error) {
            throw new InvalidUserDataError(error.message)
        }
        return value
    }

    async create(){
        const validatedData = this.#validateData()
        const user = new User(validatedData.controlNumber, validatedData.mail, validatedData.name, validatedData.balance, validatedData.rfid)
        await this.#repository.save(user)        
        return await this.#repository.findByControlNumber(user.controlNumber)
    }
}

module.exports = CreateUser