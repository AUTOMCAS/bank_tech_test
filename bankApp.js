const Balance = require("./balance");
const Statement = require("./statement");

class bankApp {
  constructor() {
    this.balance = new Balance();
    this.statement = new Statement(this.balance);
  }

  deposit(amount) {
    if (isNaN(amount)) {
      throw new Error("Amount must be a number");
    }

    const deposit = parseFloat(amount);
    this.balance.add(deposit);

    const transaction = {
      amount: deposit,
      type: "deposit",
    };

    this.statement.add(transaction);
  }

  withdraw(amount) {
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
