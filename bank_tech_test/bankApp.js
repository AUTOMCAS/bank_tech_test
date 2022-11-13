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
    this.statement.push(
      `${this.getTodaysDate()} || ${deposit.toFixed(2)} || || ${this.getBalance()}`
    );
  }

  makeWithdrawal(withdrawal) {
    this.balance -= withdrawal;
    this.statement.push(
      `${this.getTodaysDate()} || || ${withdrawal.toFixed(2)} || ${this.getBalance()}`
    );
    console.log(this.statement);
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
}

module.exports = Bank;
