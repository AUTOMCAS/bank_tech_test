const Account = require("./account");

jest.useFakeTimers().setSystemTime(new Date("2022-11-13"));

describe("Bank", () => {
  describe("getStatement()", () => {
    let account = new Account();
    it("returns correct statement after initial deposit of 1000", () => {
      let statement = account.getStatement();
      account.deposit(1000);

      let expectedRow = "13/11/2022 || 1000.00 || || 1000.00";
      expect(statement[0]).toEqual(expectedRow);
      expect(statement.includes(expectedRow)).toBe(true);
    });

    it("returns correct statement after deposit of 2000", () => {
      let statement = account.getStatement();
      account.deposit(2000);

      let expectedRow = "13/11/2022 || 2000.00 || || 3000.00";
      expect(statement.includes(expectedRow)).toBe(true);
    });

    it("returns correct statement after withdrawal of 500", () => {
      let statement = account.getStatement();
      account.withdraw(500);

      let expectedRow = "13/11/2022 || || 500.00 || 2500.00";
      expect(statement.includes(expectedRow)).toBe(true);
    });
  });

  describe("deposit()", () => {
    let account = new Account();
    it("Adds 100 to the balance as integer", () => {
      let statement = account.getStatement();
      account.deposit(100);

      let expectedRow = "13/11/2022 || 100.00 || || 100.00";
      expect(statement[0]).toEqual(expectedRow);
      expect(statement.includes(expectedRow)).toBe(true);
    });
    it("Adds another 10.55 to the balance as float", () => {
      let statement = account.getStatement();
      account.deposit(10.55);

      let expectedRow = "13/11/2022 || 10.55 || || 110.55";
      expect(statement.includes(expectedRow)).toBe(true);
    });

    it("Allows user to deposit when amount is a number as a string", () => {
      let statement = account.getStatement();
      account.deposit("10");

      let expectedRow = "13/11/2022 || 10.00 || || 120.55";
      expect(statement[2]).toEqual(expectedRow);
      expect(statement.includes(expectedRow)).toBe(true);
    });

    it("Allows user to deposit when amount is a number as a string and to 2 decimal places", () => {
      let statement = account.getStatement();
      account.deposit("0.45");

      let expectedRow = "13/11/2022 || 0.45 || || 121.00";
      expect(statement[3]).toEqual(expectedRow);
      expect(statement.includes(expectedRow)).toBe(true);
      expect(statement.length).toEqual(4);
    });

    it("Does not add to deposit if amount is invalid", () => {
      let statement = account.getStatement();
      account.deposit("none");

      expect(statement.length).toEqual(4);
    });
  });

  describe("withdraw()", () => {
    let account = new Account();
    it("Removes 10.55 from the balance", () => {
      let statement = account.getStatement();
      account.deposit(100);
      account.withdraw(10.55);

      let expectedRow = "13/11/2022 || || 10.55 || 89.45";
      expect(statement[1]).toEqual(expectedRow);
      expect(statement.includes(expectedRow)).toBe(true);
    });

    it("Does not subtract from deposit if amount is invalid", () => {
      let statement = account.getStatement();
      account.withdraw("none");

      expect(statement.length).toEqual(2);
    });
  });
});
