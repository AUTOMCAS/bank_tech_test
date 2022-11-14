const Statement = require("./statement");
const Balance = require("./balance");

const balance = new Balance();
const statement = new Statement(balance);

jest.useFakeTimers().setSystemTime(new Date("2022-11-13"));

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

      const statementContent = statement.get();
      expect(statementContent[0].includes("2000.00")).toBe(true);
    });

    it("adds the current balance to the statement", () => {
      const statementContent = statement.get();
      expect(statementContent[0].split("|| ").slice(-1)[0]).toEqual("0.00")
    });

    it("adds the current date to the statement", () => {
      const statementContent = statement.get();
      expect(statementContent[0].split(" || ")[0]).toEqual("13/11/2022")
    });

    it("Adds a deposit and balance is updated", () => {
      const balance = new Balance();
      balance.add(500)
      const statement = new Statement(balance);

      const deposit = { amount: "500.00", type: "deposit" };
      statement.add(deposit);


      const statementContent = statement.get();
      expect(statementContent[0].split("|| ").slice(-1)[0]).toEqual("500.00")
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
