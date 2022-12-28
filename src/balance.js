const StatementFormatter = require("./statementFormatter");
const statementFormatter = new StatementFormatter();

class Balance {
  constructor() {
    this.balance = 0;
  }

  getBalance() {
    return statementFormatter.convertNumberToCurrency(this.balance);
  }

  add(amount) {
    this.balance += amount;
  }

  subtract(amount) {
    this.balance -= amount;
  }
}

module.exports = Balance;
