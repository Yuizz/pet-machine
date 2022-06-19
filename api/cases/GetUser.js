const UserNotFound = require('../errors/UserNotFoundError')
const User = require('../models/User')


class GetUser{
    
    users = [
        new User('17260681', 'jugo@mail.com', 'Julian Glz', 15, "0114875395"),
        new User('17260672', 'cris@mail.com', 'Cris Hdz', 22, "4578459865")
    ]

    findByControlNumber(controlNumber){
        const userObj = this.users.find(user => user.controlNumber === controlNumber)
        if (!userObj) throw new UserNotFound(controlNumber, UserNotFound.CONTROL_NUMBER)
        return userObj
    }

    findByRfid(rfid){
        const userObj = this.users.find(user => user.rfid === rfid)
        if (!userObj) throw new UserNotFound(rfid, UserNotFound.RFID)
        return userObj
    }
    
}

module.exports = GetUser