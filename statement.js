const Formatter = require('./formatter')

class Statement {
  constructor(balance) {
    this.statement = []
    this.formatter = new Formatter()
    this.balance = balance
  }

  get() {
    return this.statement;
  }

  add(transaction) {
    console.log(this.balance.getBalance())
    
    
    this.statement.push(`14/11/2022 || ${transaction.amount} || || 2000.00`)
    console.log(this.statement)
  }


  getHeader() {
    return "date || credit || debit || this.balance"
  }
}

module.exports = Statement
