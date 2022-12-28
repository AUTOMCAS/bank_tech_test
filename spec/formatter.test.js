const Formatter = require("../src/formatter");
const formatter = new Formatter();

jest.useFakeTimers().setSystemTime(new Date("2022-11-13"));

describe("Formatter", () => {
  describe("getTodaysDate()", () => {
    it("returns todays date formatted correctly", () => {
      expect(formatter.getTodaysDate()).toEqual("13/11/2022");
    });
  });

  describe("convertNumberToCurrency()", () => {
    it("returns formatted number in 0.00 formatter", () => {
      expect(formatter.convertNumberToCurrency(100)).toEqual("100.00");
      expect(formatter.convertNumberToCurrency(100.55)).toEqual("100.55");
    });
  });

  describe("transactionColumns()", () => {
    it("returns correct formatted for a deposit", () => {
      transaction = { amount: 500, type: "deposit" };

      expect(formatter.transactionColumns(transaction)).toEqual(" 500.00 || ");
    });

    it("returns correct formatted for any deposit", () => {
      transaction = { amount: 400, type: "deposit" };

      expect(formatter.transactionColumns(transaction)).toEqual(" 400.00 || ");
    });

    it("returns correct formatted for a withdrawal", () => {
      transaction = { amount: 500, type: "withdrawal" };

      expect(formatter.transactionColumns(transaction)).toEqual(" || 500.00 ");
    });

    it("returns correct formatted for a any withdrawal", () => {
      transaction = { amount: 200, type: "withdrawal" };

      expect(formatter.transactionColumns(transaction)).toEqual(" || 200.00 ");
    });
  });
});
