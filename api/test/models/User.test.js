const User = require('./../../app/models/User')

describe('Unit Tests for User class', ()=>{

  test('Create an User object', ()=>{
    const user = new User('17260671', 'jugo@mail.com', 'Julian', 'Gonzalez', 2.4)

    expect(user.controlNumber).toBe('17260671')
    expect(user.mail).toBe('jugo@mail.com')
    expect(user.name).toBe('Julian')
    expect(user.lastName).toBe('Gonzalez')
    expect(user.balance).toBe(2.4)
    expect(user.createdAt).not.toBeUndefined()
    expect(user.updatedAt).not.toBeUndefined()

    console.log(user)
  })

  test('Add getters', ()=>{
    const user = new User('17260671', 'jugo@mail.com', 'Julian', 'Gonzalez', 2.4)
 
    expect(user.getMail).toBe('jugo@mail.com')
    expect(user.getName).toBe('Julian')
    expect(user.getLastName).toBe('Gonzalez')
    expect(user.getBalance).toBe(2.4)
    expect(user.getCreatedAt).not.toBeUndefined()
    expect(user.getUpdatedAt).not.toBeUndefined()
  })
  
  test('Add setters', ()=>{
    const user = new User('17260671', 'jugo@mail.com', 'Julian', 'Gonzalez', 2.4)
    user.setName = 'Abelardo'
    expect(user.name).toBe('Abelardo')

    user.setBalance = 2.8
    expect(user.balance).toBe(2.8)
  })
})


