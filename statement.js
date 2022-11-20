const Formatter = require("./formatter");

class Statement {
  constructor(balance) {
    this.statement = [];
    this.formatter = new Formatter();
    this.balance = balance;
  }

  get() {
    return this.statement;
  }

  add(transaction) {
    let date = this.formatter.getTodaysDate();
    let balance = this.balance.getBalance();
    let transactionColumns = this.formatter.transactionColumns(transaction);

    this.statement.push(`${date} ||${transactionColumns}|| ${balance}`);
  }

  getHeader() {
    return "date || credit || debit || balance";
  }
}

module.exports = Statement;
