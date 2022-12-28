const StatementFormatter = require("./statementFormatter");

class Statement {
  constructor(balance) {
    this.statement = [];
    this.statementFormatter = new StatementFormatter();
    this.balance = balance;
  }

  get() {
    return this.statement;
  }

  add(transaction) {
    let date = this.statementFormatter.getTodaysDate();
    let balance = this.balance.getBalance();
    let transactionColumns =
      this.statementFormatter.transactionColumns(transaction);

    this.statement.push(`${date} ||${transactionColumns}|| ${balance}`);
  }

  getHeader() {
    return "date || credit || debit || balance";
  }
}

module.exports = Statement;
