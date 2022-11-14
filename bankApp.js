const Formatter = require("./formatter");
const Balance = require("./balance");

class Bank {
  constructor() {
    this.statement = [];
    this.formatter = new Formatter();
    this.balance = new Balance();
  }

  addDeposit(deposit) {
    this.balance.add(deposit);
    this.statement.push(
      `${this.formatter.getTodaysDate()} || ${this.formatter.convertNumberToCurrency(
        deposit
      )} || || ${this.balance.getBalance()}`
    );
  }

  makeWithdrawal(withdrawal) {
    this.balance.subtract(withdrawal);
    this.statement.push(
      `${this.formatter.getTodaysDate()} || || ${this.formatter.convertNumberToCurrency(
        withdrawal
      )} || ${this.balance.getBalance()}`
    );
  }

  getStatement() {
    return this.statement;
  }

  printStatement() {
    console.log("date || credit || debit || this.balance");
    this.statement.forEach((statementRow) => {
      console.log(statementRow);
    });
  }
}

module.exports = Bank;
