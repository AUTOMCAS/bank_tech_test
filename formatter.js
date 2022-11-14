class Formatter {
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
}

module.exports = Formatter;
