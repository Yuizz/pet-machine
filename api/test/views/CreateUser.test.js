const CreateUser = require('../../cases/CreateUser')

describe('Tests for CreateUser', () => {
    
    test('Return an error object when try to create a new user with an null payload', () => {
        const payload = null
        const result = new CreateUser(payload).create()
        expect(result.error).toMatch(/data no existe/)
    })

    test('Return an error object when try to create a new user with a payload with missin properties', ()=>{
        const payload = {controlNumber: null, mail: 15, name:null, balance:'Swag'}
        const result = new CreateUser(payload).create()
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    })

    test('Return an error object when try to create a new user with a payload with missing properties', () =>{
        const payload = {controlNumber: 'Numero de control'}
        const result = new CreateUser(payload).create()
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    })

    test('Create a user by a given valid payload', () =>{
        const payload = {
        controlNumber: '17260671',
        mail: 'jugo@mail.com',
        name:'Julian Gonzalez',
        balance:2.4
        }    
        const result = new CreateUser(payload).create()
        expect(result.controlNumber).toBe('17260671')
        expect(result.mail).toBe('jugo@mail.com')
        expect(result.name).toBe('Julian Gonzalez')
        expect(result.balance).toBe(2.4)
    })
})          