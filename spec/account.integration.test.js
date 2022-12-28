const Account = require("../src/account");

jest.useFakeTimers().setSystemTime(new Date("2022-11-13"));

describe("Account", () => {
  describe("getStatement()", () => {
    it("returns correct statement after initial deposit of 1000", () => {
      let account = new Account();
      let statement = account.getStatement();

      account.deposit(1000);

      let expectedRow = "13/11/2022 || 1000.00 || || 1000.00";
      expect(statement[0]).toEqual(expectedRow);
    });

    it("returns correct statement after two deposits", () => {
      let account = new Account();
      let statement = account.getStatement();

      account.deposit(1000);
      account.deposit(2000);

      let expectedRow = "13/11/2022 || 2000.00 || || 3000.00";
      expect(statement.includes(expectedRow)).toBe(true);
    });

    it("returns correct statement after withdrawal", () => {
      let account = new Account();
      let statement = account.getStatement();

      account.deposit(1250);
      account.withdraw(500);

      let expectedRow = "13/11/2022 || || 500.00 || 750.00";
      expect(statement.includes(expectedRow)).toBe(true);
    });
  });

  describe("deposit()", () => {
    it("Adds 100 to the balance as integer", () => {
      let account = new Account();
      let statement = account.getStatement();

      account.deposit(100);

      let expectedRow = "13/11/2022 || 100.00 || || 100.00";
      expect(statement[0]).toEqual(expectedRow);
    });
    it("Adds another 10.55 to the balance as float", () => {
      let account = new Account();
      let statement = account.getStatement();

      account.deposit(10.55);

      let expectedRow = "13/11/2022 || 10.55 || || 10.55";
      expect(statement[0]).toEqual(expectedRow);
    });

    it("Allows user to deposit when amount is a number as a string", () => {
      let account = new Account();
      let statement = account.getStatement();

      account.deposit("10");

      let expectedRow = "13/11/2022 || 10.00 || || 10.00";
      expect(statement[0]).toEqual(expectedRow);
    });

    it("Allows user to deposit when amount is a number as a string and to 2 decimal places", () => {
      let account = new Account();
      let statement = account.getStatement();

      account.deposit("0.45");

      let expectedRow = "13/11/2022 || 0.45 || || 0.45";
      expect(statement[0]).toEqual(expectedRow);
    });

    it("Does not add to deposit if amount is invalid", () => {
      let account = new Account();
      let statement = account.getStatement();

      account.deposit("none");

      expect(statement.length).toEqual(0);
    });
  });

  describe("withdraw()", () => {
    it("Removes 10.55 from the balance", () => {
      let account = new Account();
      let statement = account.getStatement();

      account.deposit(100);
      account.withdraw(10.55);

      let expectedRow = "13/11/2022 || || 10.55 || 89.45";
      expect(statement[1]).toEqual(expectedRow);
    });

    it("Does not subtract from deposit if amount is invalid", () => {
      let account = new Account();
      let statement = account.getStatement();
      account.withdraw("none");

      expect(statement.length).toEqual(0);
    });
  });

  describe("printStatement()", () => {
    it("returns statement", () => {
      let account = new Account();
      account.deposit(100);
      account.withdraw(10.55);

      expect(account.printStatement()).toMatch(
        "date || credit || debit || balance"
      );
      expect(account.printStatement()).toMatch(
        "13/11/2022 || || 10.55 || 89.45"
      );
    });
  });
});
