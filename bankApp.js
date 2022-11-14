const Formatter = require("./formatter");
const Balance = require("./balance");
const Statement = require("./statement");

class bankApp {
  constructor() {
    this.formatter = new Formatter();
    this.balance = new Balance();
    this.statement = new Statement(this.balance);
  }

  makeDeposit(deposit) {
    let formattedDeposit = this.formatter.convertNumberToCurrency(deposit);
    this.balance.add(deposit);

    let transaction = {
      amount: formattedDeposit,
      type: "deposit",
    };
    this.statement.add(transaction);
  }

  makeWithdrawal(withdrawal) {
    let formattedDeposit = this.formatter.convertNumberToCurrency(withdrawal);
    this.balance.subtract(withdrawal);
    let transaction = {
      amount: formattedDeposit,
      type: "withdrawal",
    };
    this.statement.add(transaction);
  }

  getStatement() {
    return this.statement.get();
  }

  printStatement() {
    console.log(this.statement.getHeader());
    this.statement.get().forEach((statementRow) => {
      console.log(statementRow);
    });
  }
}

module.exports = bankApp;
