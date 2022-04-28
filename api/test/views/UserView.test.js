const UserView = require('./../../app/views/UserView')

describe('Tests for UserView', () => {
    
    test('Return an error object when try to create a new user with an null payload', () => {
        const payload = null
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    })

    test('Return an error object when try to create a new user with a payload with missin properties', ()=>{
        const payload = {controlNumber: null, mail: 15, name:null, lastName: 12, balance:'Swag'}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    })

    test('Return an error object when try to create a new user with a payload with missing properties', () =>{
        const payload = {controlNumber: 'Numero de control'}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    })

    test('Create a user by a given valid payload', () =>{
        const payload = {
        controlNumber: '17260671',
        mail: 'jugo@mail.com',
        name:'Julian',
        lastName: 'Gonzalez',
        balance:2.4}
        
        const result = UserView.createUser(payload)
        expect(result.controlNumber).toBe('17260671')
        expect(result.mail).toBe('jugo@mail.com')
        expect(result.name).toBe('Julian')
        expect(result.lastName).toBe('Gonzalez')
        expect(result.balance).toBe(2.4)
    })
})          