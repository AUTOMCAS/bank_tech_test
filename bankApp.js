const Formatter = require("./formatter");
const Balance = require("./balance");
const Statement = require("./statement");

class bankApp {
  constructor() {
    this.formatter = new Formatter();
    this.balance = new Balance();
    this.statement = new Statement();
  }

  addDeposit(deposit) {
    this.balance.add(deposit);
    this.statement.add(
      `${this.formatter.getTodaysDate()} || ${this.formatter.convertNumberToCurrency(
        deposit
      )} || || ${this.balance.getBalance()}`
    );
  }

  makeWithdrawal(withdrawal) {
    this.balance.subtract(withdrawal);
    this.statement.add(
      `${this.formatter.getTodaysDate()} || || ${this.formatter.convertNumberToCurrency(
        withdrawal
      )} || ${this.balance.getBalance()}`
    );
  }

  getStatement() {
    return this.statement.get();
  }

  printStatement() {
    console.log("date || credit || debit || this.balance");
    this.statement.forEach((statementRow) => {
      console.log(statementRow);
    });
  }
}

module.exports = bankApp;
