class Bank {
  constructor() {
    this.balance = 0.00
  }

  getBalance() {
    return this.balance.toFixed(2)
  }

  addDeposit(deposit) {
    this.balance += deposit
  }

}

module.exports = Bank