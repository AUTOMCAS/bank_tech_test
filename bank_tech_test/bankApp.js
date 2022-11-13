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
}

module.exports = Bank;
