export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }
  getAccountNumber = ():number => {
    return this.accountNumber
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.setBalance(value)
      console.log(`Voce depositou R$${value}`)
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus()){
      if(this.balance > value) {
        this.setBalance(- value)
        console.log(`Voce sacou R$${value}`)
      } else {
        console.log('Saldo insuficiente')
      }
      
    }
  }

  getBalance = (): number => {
    return this.balance
  }
  setBalance = (value: number): void => {
    if(this.validateStatus()){
      this.balance += value
    }
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
