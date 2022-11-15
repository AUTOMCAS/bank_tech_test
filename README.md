# Bank App tech test

## Functionality
[Planning diagram](https://raw.githubusercontent.com/AUTOMCAS/bank_tech_test/main/diagram.png)

- Make a deposit
- Make a withdrawal (users are allowed to be overdrawn)
- Print a statement with the date, transaction and balance shown as below

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```


## Setup

This guidance assumes you have npm and nvm installed and are confident in pulling this repository.

Install node using nvm if you do not have it:
```
$ nvm install node
$ nvm use node
```

Install dependencies:
``` bash
# From within the project directory:
$ npm install
```

## Testing

```bash
# Install jest globally
$ npm install -g jest

# Run tests
$ jest

# Run tests with coverage
$ jest --coverage
```

## Running the code
From within the project directory:
```bash
# Run node
$ node

# Create a new bankApp instance:
const BankApp = require("./bankApp")
const bankApp = new BankApp()

# Make a deposit
bankApp.deposit(100) # valid
bankApp.deposit(100.00) # valid
bankApp.deposit("100") # valid
bankApp.deposit("100.00") # valid
bankApp.deposit("Monies!") # invalid

# Make a withdrawal
bankApp.withdraw(100) # valid
bankApp.withdraw(100.00) # valid
bankApp.withdraw("100") # valid
bankApp.withdraw("100.00") # valid
bankApp.withdraw("Monies!") # invalid

# Print the statement
bankApp.printStatement()
```

## Thoughts

Issues related to the output being console.logs in node:  
- `getStatement()` function in `bankApp` class is a little redundant but I struggled to find a way of testing the intended output (printing in node).

- I attempted to use errors when the user inputs incorrect info but I struggled to make it work in both testing and in console.log. 

Error handling could have been moved to its own class to simplify `bankApp` class

Earlier tests could have been refactored as I got more knowledge on how to write relevant tests.