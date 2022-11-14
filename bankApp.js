const Formatter = require('./formatter')
const formatter = new Formatter()

class Bank {
  constructor() {
    this.balance = 0
    this.statement = [];
  }

  getBalance() {
    return formatter.convertNumberToCurrency(this.balance);
  }

  addDeposit(deposit) {
    this.balance += deposit;
    this.statement.push(
      `${formatter.getTodaysDate()} || ${formatter.convertNumberToCurrency(deposit)} || || ${this.getBalance()}`
    );
  }

  makeWithdrawal(withdrawal) {
    this.balance -= withdrawal;
    this.statement.push(
      `${formatter.getTodaysDate()} || || ${formatter.convertNumberToCurrency(withdrawal)} || ${this.getBalance()}`
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
}

module.exports = Bank;
