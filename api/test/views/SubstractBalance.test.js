const User = require('../../models/User')
const SubstractBalance = require('../../cases/SubstractBalance')
const SubstractBalanceError = require('../../errors/SubstractBalanceError')
const InsufficientBalanceError = require('../../errors/InsufficientBalanceError')

describe('Test for SubstractBalance' , () => {

    test('Return an error when the balance you want to substract is not a number.', () => {
        const user = new User('17260671', 'jugo@mail.com', 'Jugo', 15)
        const balanceToSubstract = 'hola'
        const t = () => {
            return new SubstractBalance(balanceToSubstract, user.balance).substract()
        }
        expect(t).toThrow(SubstractBalanceError)
    })

    test('Return an error if the balance of the user is not enough to make a payment.', () => {
        const user = new User('17260671', 'jugo@mail.com', 'Jugo', 15)
        const balanceToSubstract = 29
        const t = () => {
            return new SubstractBalance(balanceToSubstract, user.balance).substract()
        }
        expect(t).toThrow(InsufficientBalanceError)
    })
})