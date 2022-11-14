const Formatter = require('./formatter')


class Statement {
  constructor() {
    this.statement = []
    this.formatter = new Formatter()
  }

  get() {
    return this.statement;
  }

  add(transaction) {
    console.log(transaction.amount)
    
    this.statement.push(transaction.amount)
  }


  getHeader() {
    return "date || credit || debit || this.balance"
  }
}

module.exports = Statement

// `${this.formatter.getTodaysDate()} || ${this.formatter.convertNumberToCurrency(
//   deposit
// )} || || ${this.balance.getBalance()}`