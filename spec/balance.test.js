const Balance = require("../src/balance");

describe("Balance", () => {
  describe("getBalance()", () => {
    it("returns an empty balance", () => {
      const balance = new Balance();

      expect(balance.getBalance()).toBe("0.00");
    });
  });

  describe("add()", () => {
    it("adds to balance", () => {
      const balance = new Balance();
      balance.add(100);

      expect(balance.getBalance()).toBe("100.00");
    });
  });

  describe("subtract()", () => {
    it("subtracts from balance", () => {
      const balance = new Balance();
      balance.add(100);
      balance.subtract(50);

      expect(balance.getBalance()).toBe("50.00");
    });

    it("subtracts from balance", () => {
      const balance = new Balance();
      balance.add(10);
      balance.subtract(5.55);

      expect(balance.getBalance()).toBe("4.45");
    });
  });
});
