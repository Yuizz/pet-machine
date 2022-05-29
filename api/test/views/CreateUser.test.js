const CreateUser = require('../../cases/CreateUser')
const InvalidUserDataError = require('../../errors/InvalidUserDataError')

describe('Tests for CreateUser', () => {
    
    test('Return an error object when try to create a new user with an null payload', () => {
        const payload = null
        const r = () => {
            const result = new CreateUser(payload).create() 
        }
        expect(r).toThrow(InvalidUserDataError)
    })

    test('Return an error object when try to create a new user with a payload with missin properties', ()=>{
        const payload = {controlNumber: null, mail: 15, name:null, balance:'Swag'}
        const t = () => {
            const result = new CreateUser(payload).create()
        }
        expect(t).toThrow(InvalidUserDataError)
    })

    test('Return an error object when try to create a new user with a payload with missing properties', () =>{
        const payload = {controlNumber: 'Numero de control'}
        const r = () => {
            const result = new CreateUser(payload).create()
        }
        expect(r).toThrow(InvalidUserDataError)
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