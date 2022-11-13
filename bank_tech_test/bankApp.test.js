const Bank = require("./bankApp");
const bank = new Bank();

describe("Bank", () => {
  describe("getBalance()", () => {
    it("returns an empty balance", () => {
      expect(bank.getBalance()).toBe("0.00");
    });
  });

  describe("addDeposit()", () => {
    it("Adds 100 to the balance", () => {
      bank.addDeposit(100);
      expect(bank.getBalance()).toBe("100.00");
    });
    it("Adds another 10.55 to the balance", () => {
      bank.addDeposit(10.55);
      expect(bank.getBalance()).toBe("110.55");
    });
  });

  describe("makeWithdrawal()", () => {
    it("Removes 10.55 from the balance", () => {
      bank.makeWithdrawal(10.55);
      expect(bank.getBalance()).toBe("100.00");
    });
  });

  describe("getTodaysDate()", () => {
    it("returns todays date", () => {
      expect(bank.getTodaysDate()).toEqual("13/11/2022");
    });
  });

  describe("getStatement()", () => {
    const bank = new Bank();

    it("returns statement heading", () => {
      expect(bank.getStatement()).toContain(
        "date || credit || debit || balance"
      );
    });

    it("returns correct info after initial deposit of 1000", () => {
      let statement = bank.getStatement()
      bank.addDeposit(1000)
      
      let expectedRow = "13/11/2022 || 1000.00 || || 1000.00"
      expect(statement.includes(expectedRow)).toBe(true)
    });
  });
});
