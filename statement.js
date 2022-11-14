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

    this.statement.push(`${date} || ${transaction.amount} || || ${balance}`);
   }

  transactionHandler(transaction) {
    return ` 500.00 || `;
  }

  getHeader() {
    return "date || credit || debit || balance";
  }
}

module.exports = Statement;
