const UserNotFound = require('../errors/UserNotFoundError')
const User = require('../models/User')


class GetUser{
    
    users = [
        new User('17260681', 'jugo@mail.com', 'Julian Glz', 15),
        new User('17260672', 'cris@mail.com', 'Cris Hdz', 22)
    ]

    find(controlNumber){
        const userObj = this.users.find(user => user.controlNumber === controlNumber)
        if (!userObj) throw new UserNotFound(controlNumber)
        return userObj
    }
    
}

module.exports = GetUser