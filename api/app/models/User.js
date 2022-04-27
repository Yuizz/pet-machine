class User{
  constructor(controlNumber, mail, name, lastName, balance, createdAt, updatedAt){
    this.controlNumber = controlNumber
    this.mail = mail
    this.name = name
    this.lastName = lastName
    this.balance = balance
    this.createdAt = new Date()
    this.updatedAt = new Date()
  }
}

module.exports = User
