import { DioAccount } from "./DioAccount";

export class AccountPremium extends DioAccount {
    
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
            this.setBalance(value + 10)
            console.log(`Voce depositou R$${value}`)
        }
    }
}