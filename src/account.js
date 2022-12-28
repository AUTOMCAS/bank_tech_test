const Balance = require("./balance");
const Statement = require("./statement");

class Account {
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

    const transaction = {
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
    } else {
      return true;
    }
  }

  getStatement() {
    return this.statement.get();
  }

  printStatement() {
    let statementString = `${this.statement.getHeader()}\n`;
    const reversedStatement = this.getStatement().reverse();

    reversedStatement.forEach((statementRow) => {
      statementString += `${statementRow}\n`;
    });

    return statementString;
  }
}

module.exports = Account;
