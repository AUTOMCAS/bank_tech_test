const Formatter = require('./formatter')
const formatter = new Formatter()

class Bank {
  constructor() {
    this.balance = 0
    this.statement = [];
  }

  getBalance() {
    return this.formatValue(this.balance);
  }

  addDeposit(deposit) {
    this.balance += deposit;
    this.statement.push(
      `${formatter.getTodaysDate()} || ${this.formatValue(deposit)} || || ${this.getBalance()}`
    );
  }

  makeWithdrawal(withdrawal) {
    this.balance -= withdrawal;
    this.statement.push(
      `${formatter.getTodaysDate()} || || ${this.formatValue(withdrawal)} || ${this.getBalance()}`
    );
  }

  getStatement() {
    return this.statement;
  }

  printStatement() {
    console.log("date || credit || debit || balance")
    this.statement.forEach((statementRow) => {
      console.log(statementRow);
    });
  }

  formatValue(value) {
    return value.toFixed(2)
  }
}

module.exports = Bank;
