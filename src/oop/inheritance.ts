import { BankAccount } from "./encapsulation"

class SavingsAccount extends BankAccount {
    private _interestRate: number = 0.01

    constructor(balance: number) {
        super(balance)
    }

    calculateInterestRate(): number {
        return this.balance * this._interestRate
    }
}
