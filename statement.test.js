const Statement = require("./statement");
const statement = new Statement();

describe("Statement", () => {
  describe("get()", () => {
    it("initially returns empty statement", () => {
      expect(statement.get()).toEqual([]);
    });
  });

  
});
