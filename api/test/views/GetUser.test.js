const GetUser = require('../../cases/GetUser')
const UserNotFound = require('../../errors/UserNotFoundError')

describe('Tests for GetUser',() =>{

    test('Return an user with the given control number.', () => {
        const ctrlNumber = '17260681'
        const name = 'Julian Glz'
        const result = new GetUser().find(ctrlNumber)
        expect(result.controlNumber).toBe(ctrlNumber)
        expect(result.name).toBe(name)
    })

    test('Returns undefined when user is not found with the number given.', () =>{
        const ctrlNumber = '1726064'
        const t = () => {
            const result = new GetUser().find(ctrlNumber)
        }
        expect(t).toThrow(UserNotFound)
    })
        
})