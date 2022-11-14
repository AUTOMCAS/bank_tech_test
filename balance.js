const Format = require('./format')
const format = new Format()

class Balance {
  constructor() {
    this.balance = 0
    this.format = new Format();
  }

  getBalance() {
    return this.format.convertNumberToCurrency(this.balance);
  }

  add(amount) {
    this.balance += amount
  }

  subtract(amount) {
    this.balance -= amount
  }
}

module.exports = Balance