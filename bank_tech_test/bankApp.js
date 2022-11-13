class Bank {
  constructor() {
    this.balance = 0.0;
    this.statement = ["date || credit || debit || balance"];
  }

  getBalance() {
    return this.balance.toFixed(2);
  }

  addDeposit(deposit) {
    this.balance += deposit;
    this.addToStatement()
  }

  makeWithdrawal(withdrawal) {
    this.balance -= withdrawal;
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

  addToStatement() {
    this.statement.push("13/11/2022 || 1000.00 || || 1000.00")
  }
}

module.exports = Bank;
