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

  makeWithdrawal(withdrawal) {
    this.balance -= withdrawal
  }

}

module.exports = Bank