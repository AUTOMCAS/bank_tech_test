
class Statement {
  constructor() {
    this.statement = []
  }

  get() {
    return this.statement;
  }

  add(row) {
    this.statement.push(row)
  }

  getHeader() {
    return "date || credit || debit || this.balance"
  }
}

module.exports = Statement