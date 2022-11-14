const Statement = require("./statement");
const statement = new Statement();

describe("Statement", () => {
  describe("get()", () => {
    it("initially returns empty statement", () => {
      expect(statement.get()).toEqual([]);
    });
  });

  describe("add()", () => {
    it("Adds a deposit", () => {
      const deposit = { amount: "2000.00", type: "deposit" };
      statement.add(deposit);

      const statementContent = statement.get()
      console.log(statementContent)
      expect(statementContent.includes("2000.00")).toBe(true);
    });
    
  });

  describe("getHeader()", () => {
    it("returns statement header", () => {
      expect(statement.getHeader()).toEqual(
        "date || credit || debit || this.balance"
      );
    });
  });
});
