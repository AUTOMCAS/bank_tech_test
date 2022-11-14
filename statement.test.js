const Statement = require("./statement");
const statement = new Statement();

describe("Statement", () => {
  describe("get()", () => {
    it("initially returns empty statement", () => {
      expect(statement.get()).toEqual([]);
    });
  });

  describe("add()", () => {
    it("Adds a row to statement", () => {
      let row = "13/11/2022 || 2000.00 || || 3000.00";
      statement.add(row);

      expect(statement.get()).toEqual([row]);
    });
  });
});
