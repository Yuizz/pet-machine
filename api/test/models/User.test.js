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
})
