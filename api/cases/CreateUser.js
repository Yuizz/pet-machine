const User = require("../models/User")

class CreateUser{
    constructor(data){
        this.data = data
    }
    #validateData(){
        if (this.data == null){
            return {error: 'data no existe'}
        }
        if (this.data.controlNumber == null || typeof this.data.controlNumber != 'string'){
            return {error: 'necesitan tener un valor valido'}
        }
        else if(this.data.mail == null || typeof this.data.mail != 'string'){
            return {error: 'necesitan tener un valor valido'}
        }
        else if(this.data.name == null || typeof this.data.name != 'string'){
            return {error: 'necesitan tener un valor valido'}
        }
        else if(this.data.balance == null || typeof this.data.balance == isNaN){
            return {error: 'necesitan tener un valor valido'}
        }
        return {error: null}
    }

    create(){
        const isValid = this.#validateData()
        if (isValid.error){
            return {error: isValid.error}
        }
        return new User(this.data.controlNumber, this.data.mail, this.data.name, this.data.balance)
    }
}

module.exports = CreateUser