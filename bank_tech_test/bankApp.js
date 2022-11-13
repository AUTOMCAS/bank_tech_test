class Bank {
  constructor() {
    this.balance = 0
    this.statement = ["date || credit || debit || balance"];
  }

  getBalance() {
    console.log(this.balance)
    return this.formatValue(this.balance);
   
  }

  addDeposit(deposit) {
    this.balance += deposit;
    this.statement.push(
      `${this.getTodaysDate()} || ${this.formatValue(deposit)} || || ${this.getBalance()}`
    );
  }

  makeWithdrawal(withdrawal) {
    this.balance -= withdrawal;
    this.addToStatement(withdrawal, withdrawal)
  }

  addToStatement(deposit, withdrawal) {
    this.statement.push(
      `${this.getTodaysDate()} || ${this.formatValue(deposit)} || ${this.formatValue(withdrawal)} || ${this.getBalance()}`
    );

    console.log(this.statement)
  }

  getTodaysDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    return `${day}/${month}/${year}`;
  }

  getStatement() {
    return this.statement;
  }

  printStatement() {
    this.statement.forEach((row) => {
      console.log(row);
    });
  }

  formatValue(value) {
    if (value === null) return
    return value.toFixed(2)
  }
}

module.exports = Bank;
