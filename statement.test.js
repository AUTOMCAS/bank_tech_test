const Statement = require("./statement");
const Balance = require("./balance");

const balance = new Balance();
const statement = new Statement(balance);

jest.useFakeTimers().setSystemTime(new Date("2022-11-13"));

const splitContent = (content) => {
  return content.split(" ").join("").split("||");
};

describe("Statement", () => {
  describe("get()", () => {
    it("initially returns empty statement", () => {
      expect(statement.get()).toEqual([]);
    });
  });

  describe("add()", () => {
    it("Adds a deposit", () => {
      const deposit = { amount: 2000, type: "deposit" };
      statement.add(deposit);

      const statementContent = statement.get();
      expect(statementContent[0].includes("2000.00")).toBe(true);
    });

    it("adds the current balance to the statement", () => {
      const statementContent = statement.get();
      expect(splitContent(statementContent[0]).slice(-1)[0]).toEqual("0.00");
    });

    it("adds the current date to the statement", () => {
      const statementContent = statement.get();
      expect(splitContent(statementContent[0])[0]).toEqual("13/11/2022");
    });

    it("Adds a deposit and balance is updated", () => {
      const balance = new Balance();
      balance.add(500);
      const statement = new Statement(balance);

      const deposit = { amount: 500, type: "deposit" };
      statement.add(deposit);

      const statementContent = statement.get();
      expect(statementContent[0]).toEqual("13/11/2022 || 500.00 || || 500.00")
    });

    it("Adds a withdrawal and balance is updated", () => {
      const balance = new Balance();
      balance.add(500);
      balance.subtract(50);
      const statement = new Statement(balance);

      const withdrawal = { amount: 50, type: "withdrawal" };
      statement.add(withdrawal);

      const statementContent = statement.get();

      expect(statementContent[0]).toEqual("13/11/2022 || || 50.00 || 450.00")
    });

  });

  describe("transactionHandler()", () => {
    it("returns correct formatting for a deposit", () => {
      transaction = { amount: 500, type: "deposit" };

      expect(statement.transactionHandler(transaction)).toEqual(
        " 500.00 || "
      );
    });

    it("returns correct formatting for any deposit", () => {
      transaction = { amount: 400, type: "deposit" };

      expect(statement.transactionHandler(transaction)).toEqual(
        " 400.00 || "
      );
    });

    it("returns correct formatting for a withdrawal", () => {
      transaction = { amount: 500, type: "withdrawal" };

      expect(statement.transactionHandler(transaction)).toEqual(
        " || 500.00 "
      );
    });

    it("returns correct formatting for a any withdrawal", () => {
      transaction = { amount: 200, type: "withdrawal" };

      expect(statement.transactionHandler(transaction)).toEqual(
        " || 200.00 "
      );
    });
  });

  describe("getHeader()", () => {
    it("returns statement header", () => {
      expect(statement.getHeader()).toEqual(
        "date || credit || debit || balance"
      );
    });
  });
});
