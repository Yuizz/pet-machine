const User = require('./../models/user')

class UserService{
    static create(controlNumber, mail, name, lastName, balance){
        return new User(controlNumber, mail, name, lastName, 0)
    }

    static updateUserBalance(user, newBalance){
        user.setBalance = newBalance
    }
}

module.exports = UserService