const Formatter = require('./formatter')
const formatter = new Formatter()

class Balance {
  constructor() {
    this.balance = 0
  }

  getBalance() {
    return formatter.convertNumberToCurrency(this.balance);
  }

  add(amount) {
    this.balance += amount
  }

  subtract(amount) {
    this.balance -= amount
  }
}

module.exports = Balance