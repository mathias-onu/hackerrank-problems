import { BankAccount } from "./encapsulation"

class SavingsAccount extends BankAccount {
    private _interestRate: number = 0.01

    calculateInterestRate(): number {
        return this.balance * this._interestRate
    }
}
