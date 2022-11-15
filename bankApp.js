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

    const transaction = {
      amount: deposit,
      type: "deposit",
    };

    this.balance.add(deposit);
    this.statement.add(transaction);
  }

  withdraw(amount) {
    if (this.checkNumberValidity(amount) == false) return;
    const withdrawal = parseFloat(amount);

    let transaction = {
      amount: withdrawal,
      type: "withdrawal",
    };

    this.balance.subtract(withdrawal);
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
