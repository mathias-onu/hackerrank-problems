export class BankAccount {
    private _balance!: number

    constructor(balance: number) {
        this._balance = balance
    }

    deposit(amount: number): number {
        return this._balance += amount
    }

    withdraw(amount: number): number | Error {
        if (amount <= this._balance) return this._balance -= amount
        else return new Error('Withdrawal amount is greater than your account balance.')
    }

    get balance() {
        return this._balance
    }
}