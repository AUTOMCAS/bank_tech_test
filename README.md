### Questions

- Is there a better way to write unit tests that take an expected value? eg Statement.add()
- Console logging result?
- Better way to still TDD when refactoring? Breaks other tests

const bankApp = require("./bankApp");
let bank = new bankApp()
bank.deposit("hi")

bank.deposit(amount)
bank.withdrawal(amount)
bank.printStatement()