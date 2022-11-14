const Formatter = require('./formatter')
const formatter = new Formatter()

jest.useFakeTimers().setSystemTime(new Date("2022-11-13"));

describe("Formatter", () => {
  describe("getTodaysDate()", () => {
    it("returns todays date formatted correctly", () => {
      expect(formatter.getTodaysDate()).toEqual("13/11/2022");
    });
  });

  describe("convertNumberToCurrency()", () => {
    it("returns formatted number in 0.00 format", () => {
      expect(formatter.convertNumberToCurrency(100)).toEqual("100.00");
      expect(formatter.convertNumberToCurrency(100.55)).toEqual("100.55");
    });
  });
})

