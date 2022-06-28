class User{
  createdAt;
  updatedAt;
  constructor(controlNumber, mail, name, balance, rfid){
    this.controlNumber = controlNumber
    this.mail = mail
    this.name = name
    this.balance = balance
    this.rfid = rfid
  }
}


module.exports = User
