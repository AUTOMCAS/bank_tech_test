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
})

