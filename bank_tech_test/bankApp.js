class Bank {
  constructor() {
    this.balance = 0.0;
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
}

module.exports = Bank;
