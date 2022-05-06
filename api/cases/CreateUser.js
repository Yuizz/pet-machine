const User = require("../models/User")
const InvalidUserDataError = require ("../errors/InvalidUserDataError")

class CreateUser{
    constructor(data){
        this.data = data
    }
    #validateData(){
        const Joi = require('joi')
        const schema = Joi.object({
            controlNumber: Joi.string().regex(/^\d+$/).required(),  //El patron regex hace match con un string de puros numeros
            mail: Joi.string().email().required(),
            name: Joi.string().max(70).required(),
            balance: Joi.number().min(0)
        }).options({abortEarly:false})
        
        const {value,error}=schema.validate(this.data)
        if (error) {
            throw new InvalidUserDataError(error.message)
        }
        return value
    }

    create(){
        const validatedData = this.#validateData()
        return new User(validatedData.controlNumber, validatedData.mail, validatedData.name, validatedData.balance)
    }
}

module.exports = CreateUser