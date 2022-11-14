class Format {
  getTodaysDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    return `${day}/${month}/${year}`;
  }

  convertNumberToCurrency(number) {
    return number.toFixed(2)
  }

  transactionHandler(transaction) {
    const transactionAmount = this.convertNumberToCurrency(
      transaction.amount
    );

    if (transaction.type == "deposit") return ` ${transactionAmount} || `;
    return ` || ${transactionAmount} `;
  }

}

module.exports = Format;
