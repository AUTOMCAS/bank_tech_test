const Bank = require('./bankApp')
const bank = new Bank();

describe("Bank", () => {
  describe("getBalance", () => {
    it("returns an empty balance", () => {
      
      expect(bank.getBalance()).toBe('0.00');
    });
  });
});
