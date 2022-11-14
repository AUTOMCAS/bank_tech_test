
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
}

module.exports = Statement