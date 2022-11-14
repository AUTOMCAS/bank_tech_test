const Format = require("./format");

class Statement {
  constructor(balance) {
    this.statement = [];
    this.format = new Format();
    this.balance = balance;
  }

  get() {
    return this.statement;
  }

  add(transaction) {
    let date = this.format.getTodaysDate();
    let balance = this.balance.getBalance();
    let transactionColumns = this.format.transactionColumns(transaction);

    this.statement.push(`${date} ||${transactionColumns}|| ${balance}`);
  }

  getHeader() {
    return "date || credit || debit || balance";
  }
}

module.exports = Statement;
