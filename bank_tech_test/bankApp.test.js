const Bank = require('./bankApp')
const bank = new Bank();

describe("Bank", () => {
  describe("getBalance", () => {
    it("returns an empty balance", () => {
      expect(bank.getBalance()).toBe('0.00');
    });
  });

  describe("addDeposit", () => {
    it("Adds 100 to the balance", () => {
      bank.addDeposit(100)
      expect(bank.getBalance()).toBe('100.00');
    });
    it("Adds another 10.55 to the balance", () => {
      bank.addDeposit(10.55)
      expect(bank.getBalance()).toBe('110.55');
    });
  });

});
