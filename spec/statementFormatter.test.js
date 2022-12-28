const StatementFormatter = require("../src/statementFormatter");
const statementFormatter = new StatementFormatter();

jest.useFakeTimers().setSystemTime(new Date("2022-11-13"));

describe("StatementFormatter", () => {
  describe("getTodaysDate()", () => {
    it("returns todays date formatted correctly", () => {
      expect(statementFormatter.getTodaysDate()).toEqual("13/11/2022");
    });
  });

  describe("convertNumberToCurrency()", () => {
    it("returns formatted number in 0.00 statementFormatter", () => {
      expect(statementFormatter.convertNumberToCurrency(100)).toEqual("100.00");
      expect(statementFormatter.convertNumberToCurrency(100.55)).toEqual(
        "100.55"
      );
    });
  });

  describe("transactionColumns()", () => {
    it("returns correct formatted for a deposit", () => {
      transaction = { amount: 500, type: "deposit" };

      expect(statementFormatter.transactionColumns(transaction)).toEqual(
        " 500.00 || "
      );
    });

    it("returns correct formatted for any deposit", () => {
      transaction = { amount: 400, type: "deposit" };

      expect(statementFormatter.transactionColumns(transaction)).toEqual(
        " 400.00 || "
      );
    });

    it("returns correct formatted for a withdrawal", () => {
      transaction = { amount: 500, type: "withdrawal" };

      expect(statementFormatter.transactionColumns(transaction)).toEqual(
        " || 500.00 "
      );
    });

    it("returns correct formatted for a any withdrawal", () => {
      transaction = { amount: 200, type: "withdrawal" };

      expect(statementFormatter.transactionColumns(transaction)).toEqual(
        " || 200.00 "
      );
    });
  });
});
