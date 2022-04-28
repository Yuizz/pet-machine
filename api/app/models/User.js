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
  get getMail(){
    return this.mail
  }
  get getName(){
    return this.name
  }
  get getLastName(){
    return this.lastName
  }
  get getBalance(){
    return this.balance
  }
  get getCreatedAt(){
    return this.createdAt
  }
  get getUpdatedAt(){
    return this.updatedAt
  }

  set setName(newName){
    this.name = newName
  }
  set setBalance(newBalance){
    this.balance = newBalance
  }

  set setUpdatedAt(newUpdatedAt){
    this.updatedAt= newUpdatedAt
  }
}


module.exports = User
