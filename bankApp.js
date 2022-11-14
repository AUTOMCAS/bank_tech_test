const Formatter = require("./formatter");
const Balance = require("./balance");
const Statement = require("./statement");

class bankApp {
  constructor() {
    this.formatter = new Formatter();
    this.balance = new Balance();
    this.statement = new Statement(this.balance);
  }

  makeDeposit(amount) {
    this.balance.add(amount); 

    let transaction = {
      amount: amount,
      type: "deposit",
    };
    this.statement.add(transaction);
  }

  makeWithdrawal(amount) {
    this.balance.subtract(amount);

    let transaction = {
      amount: amount,
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
