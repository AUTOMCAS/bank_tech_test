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
    this.statement.push(`13/11/2022 || ${deposit.toFixed(2)} || || ${this.getBalance()}`)
  }

  makeWithdrawal(withdrawal) {
    this.balance -= withdrawal;
    this.statement.push(`13/11/2022 || || ${withdrawal.toFixed(2)} || ${this.getBalance()}`)
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

}

module.exports = Bank;
