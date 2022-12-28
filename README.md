# Bank App tech test

## The objective

Build a simple bank account application to be run from the command line.

The application must allow a user to:

- Make a deposit
- Make a withdrawal (users are allowed to be overdrawn)
- Print a statement with a header, the date, transaction and balance.

## Approach

Initial planning diagram for classes and functions.
![Planning diagram](https://github.com/AUTOMCAS/bank_tech_test/blob/main/misc/diagram.png?raw=true)

Classes have single responsibilities with an account handling user interaction and balance, statement and formatting classes handling modification of the their respective data.

## Setup

This guidance assumes you have npm and nvm installed and are confident in pulling this repository.

Install node using nvm if you do not have it:

```
$ nvm install node
$ nvm use node
```

Install dependencies:

```bash
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

**From within the project directory:**

To run a quick example in node:

```bash
const Account = require("./src/account")
const account = new Account()

account.deposit(100)
account.deposit(250)
account.withdraw(50)
account.printStatement()
```

Detailed running process:

```bash
# Run node
$ node
```

```bash
# Create a new account instance:
const Account = require("./src/account")
const account = new Account()
```

```bash
# Make a deposit
account.deposit(100) # valid
account.deposit(100.00) # valid
account.deposit("100") # valid
account.deposit("100.00") # valid
account.deposit("Monies!") # invalid
```

```bash
# Make a withdrawal
account.withdraw(100) # valid
account.withdraw(100.00) # valid
account.withdraw("100") # valid
account.withdraw("100.00") # valid
account.withdraw("Monies!") # invalid
```

```bash
# Print the statement
account.printStatement()
```

## Example output

![example](https://github.com/AUTOMCAS/bank_tech_test/blob/main/misc/bank-example.png?raw=true)

## Test coverage

![test coverage](https://github.com/AUTOMCAS/bank_tech_test/blob/main/misc/bank-test-coverage.png?raw=true)
