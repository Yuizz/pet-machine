const User = require('./../models/user')
const UserService = require('./../services/UserService')

class UserView{
    static createUser(payload){
        if (payload == null){
            return {error: 'payload no existe'}
        }
        if (payload.controlNumber == null || typeof payload.controlNumber != 'string'){
            return {error: 'necesitan tener un valor valido'}
        }
        else if(payload.mail == null || typeof payload.mail != 'string'){
        return {error: 'necesitan tener un valor valido'}
        }
        else if(payload.name == null || typeof payload.name != 'string'){
            return {error: 'necesitan tener un valor valido'}
        }
        else if(payload.lastName == null || typeof payload.lastName != 'string'){
            return {error: 'necesitan tener un valor valido'}
        }
        else if(payload.balance == null || typeof payload.balance == isNaN){
            return {error: 'necesitan tener un valor valido'}
        }
        else {
            return new User(payload.controlNumber, payload.mail, payload.name, payload.lastName, payload.balance)
             
        } 
    }
}

module.exports = UserView