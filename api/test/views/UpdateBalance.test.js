const AddBalance = require('../../cases/AddBalance')
const InvalidBalanceToAddError = require('../../errors/InvalidBalanceToAddError')
const User = require('../../models/User')

describe('Test for balance', () => {
    test('Expect error when 0 is passed as balance to add.', () => {
        const user = new User('17260671', 'jugo@mail.com', 'Jugo', 15)
        const balanceToAdd = 0
        const t = () => {
            return new AddBalance(balanceToAdd, user.balance).sum()
        }
        expect(t).toThrow(InvalidBalanceToAddError)
    })
    test('Expect correct balance when passing value greater than 0 as balance to add.', () =>{
        const user = new User('17260671', 'jugo@mail.com', 'Jugo', 15)
        const balanceToAdd = 3
        const result = new AddBalance(balanceToAdd, user.balance).sum()
        expect(result).toBe(18)
    })
    test('Return an error when the balance you want to add is not a number.', () => {
        const user = new User('17260671', 'jugo@mail.com', 'Jugo', 15)
        const balanceToAdd = {"hola" : 12}
        const t = () => {
            return new AddBalance(balanceToAdd, user.balance).sum()
        }
        expect(t).toThrow(InvalidBalanceToAddError)
    })
})