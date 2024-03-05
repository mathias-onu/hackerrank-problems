import { BankAccount } from "./encapsulation";

class BusinessCheckingAccount extends BankAccount {
    open(initialDeposit: number, businessName?: string): void {
        if (initialDeposit < 5000) throw Error('Business accounts require an initial deposit of 5.000 Euros.')
        else super.open(initialDeposit)
    }
}

class PersonalCheckingAccount extends BankAccount {
    open(initialDeposit: number): void {
        if (initialDeposit < 100) throw Error('Persoanl accounts require an initial deposit of 100 Euros')
        else super.open(initialDeposit)
    }
}
