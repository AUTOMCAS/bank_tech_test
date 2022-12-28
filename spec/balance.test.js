const Balance = require("../src/balance");
const balance = new Balance();

describe("Balance", () => {
  describe("getBalance()", () => {
    it("returns an empty balance", () => {
      expect(balance.getBalance()).toBe("0.00");
    });
  });

  describe("add()", () => {
    it("adds to balance", () => {
      balance.add(100);
      expect(balance.getBalance()).toBe("100.00");
    });
  });

  describe("subtract()", () => {
    it("subtracts from balance", () => {
      balance.subtract(50);
      expect(balance.getBalance()).toBe("50.00");
    });

    it("subtracts from balance", () => {
      balance.subtract(5.55);
      expect(balance.getBalance()).toBe("44.45");
    });
  });
});
