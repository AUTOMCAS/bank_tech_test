const Bank = require("./bankApp");

jest.useFakeTimers().setSystemTime(new Date("2022-11-13"));

describe("Bank", () => {
  describe("getStatement()", () => {
    let bank = new Bank();
    it("returns correct statement after initial deposit of 1000", () => {
      let statement = bank.getStatement();
      bank.addDeposit(1000);

      let expectedRow = "13/11/2022 || 1000.00 || || 1000.00";
      expect(statement[0]).toEqual(expectedRow);
      expect(statement.includes(expectedRow)).toBe(true);
    });

    it("returns correct statement after deposit of 2000", () => {
      let statement = bank.getStatement();
      bank.addDeposit(2000);

      let expectedRow = "13/11/2022 || 2000.00 || || 3000.00";
      expect(statement.includes(expectedRow)).toBe(true);
    });

    it("returns correct statement after withdrawal of 500", () => {
      let statement = bank.getStatement();
      bank.makeWithdrawal(500);

      let expectedRow = "13/11/2022 || || 500.00 || 2500.00";
      expect(statement.includes(expectedRow)).toBe(true);
    });
  });

  describe("addDeposit()", () => {
    let bank = new Bank();
    it("Adds 100 to the balance", () => {
      let statement = bank.getStatement();
      bank.addDeposit(100);

      let expectedRow = "13/11/2022 || 100.00 || || 100.00";
      expect(statement[0]).toEqual(expectedRow);
      expect(statement.includes(expectedRow)).toBe(true);
    });
    it("Adds another 10.55 to the balance", () => {
      let statement = bank.getStatement();
      bank.addDeposit(10.55);

      let expectedRow = "13/11/2022 || 10.55 || || 110.55";
      expect(statement.includes(expectedRow)).toBe(true);
    });
  });

  describe("makeWithdrawal()", () => {
    let bank = new Bank();
    it("Removes 10.55 from the balance", () => {
      let statement = bank.getStatement();
      bank.addDeposit(100);
      bank.makeWithdrawal(10.55);

      let expectedRow = "13/11/2022 || || 10.55 || 89.45";
      expect(statement[1]).toEqual(expectedRow);
      expect(statement.includes(expectedRow)).toBe(true);
    });
  });
});
