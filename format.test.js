const Format = require('./format')
const format = new Format()

jest.useFakeTimers().setSystemTime(new Date("2022-11-13"));

describe("Format", () => {
  describe("getTodaysDate()", () => {
    it("returns todays date formatted correctly", () => {
      expect(format.getTodaysDate()).toEqual("13/11/2022");
    });
  });

  describe("convertNumberToCurrency()", () => {
    it("returns formatted number in 0.00 format", () => {
      expect(format.convertNumberToCurrency(100)).toEqual("100.00");
      expect(format.convertNumberToCurrency(100.55)).toEqual("100.55");
    });
  });

  describe("transactionHandler()", () => {
    it("returns correct formatting for a deposit", () => {
      transaction = { amount: 500, type: "deposit" };

      expect(format.transactionHandler(transaction)).toEqual(
        " 500.00 || "
      );
    });

    it("returns correct formatting for any deposit", () => {
      transaction = { amount: 400, type: "deposit" };

      expect(format.transactionHandler(transaction)).toEqual(
        " 400.00 || "
      );
    });

    it("returns correct formatting for a withdrawal", () => {
      transaction = { amount: 500, type: "withdrawal" };

      expect(format.transactionHandler(transaction)).toEqual(
        " || 500.00 "
      );
    });

    it("returns correct formatting for a any withdrawal", () => {
      transaction = { amount: 200, type: "withdrawal" };

      expect(format.transactionHandler(transaction)).toEqual(
        " || 200.00 "
      );
    });
  });
})

