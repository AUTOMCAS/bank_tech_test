class Bank {
  constructor() {
    this.balance = 0
    this.statement = [];
  }

  getBalance() {
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
    this.statement.push(
      `${this.getTodaysDate()} || || ${this.formatValue(withdrawal)} || ${this.getBalance()}`
    );
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
    console.log("date || credit || debit || balance")
    this.statement.forEach((statementRow) => {
      console.log(statementRow);
    });
  }

  formatValue(value) {
    return value.toFixed(2)
  }
}

module.exports = Bank;
