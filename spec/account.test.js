const Account = require("../src/account");

describe("Account", () => {
  describe("checkNumberValidity()", () => {
    it("returns false if number is invalid", () => {
      let account = new Account();

      expect(account.checkNumberValidity("Monies!")).toEqual(false);
    });

    it("returns true if number is valid", () => {
      let account = new Account();

      expect(account.checkNumberValidity(100)).toEqual(true);
      expect(account.checkNumberValidity("100")).toEqual(true);
    });
  });
});
