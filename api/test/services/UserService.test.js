const UserService = require('./../../app/services/UserService')

describe('Test for UserService', ()=>{

    test('1. Create a new user using the UserService', () =>{
        const user = UserService.create('17260671', 'jugo@mail.com', 'Julian', 'Gonzalez')
        expect(user.controlNumber).toBe('17260671')
        expect(user.mail).toBe('jugo@mail.com')
        expect(user.name).toBe('Julian')
        expect(user.lastName).toBe('Gonzalez')
        expect(user.balance).not.toBeUndefined()
    })

    test('2. Update balance', () => {
        const user = UserService.create('17260671', 'jugo@mail.com', 'Julian', 'Gonzalez', 2.4)
        UserService.updateUserBalance(user, 3.5)
        expect(user.balance).toBe(3.5)
        })

})