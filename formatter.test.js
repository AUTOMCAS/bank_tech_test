const Formatter = require('./formatter')
const formatter = new Formatter()

jest.useFakeTimers().setSystemTime(new Date("2022-11-13"));

describe("Formatter", () => {
  describe("getTodaysDate()", () => {
    it("returns todays date formatted correctly", () => {
      expect(formatter.getTodaysDate()).toEqual("13/11/2022");
    });
  });

})

