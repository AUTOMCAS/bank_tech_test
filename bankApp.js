const Balance = require("./balance");
const Statement = require("./statement");

class bankApp {
  constructor() {
    this.balance = new Balance();
    this.statement = new Statement(this.balance);
  }

  deposit(amount) {
    if (this.checkNumberValidity(amount) == false) return;

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

  checkNumberValidity(amount) {
    if (isNaN(amount)) {
      console.log("Amount must be a number");
      return false;
    }
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
