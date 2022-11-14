const Statement = require('./statement')
const statement = new Statement()


describe('Statement', () => {
  describe('getStatement()', () => {
    it('initially returns empty statement', () => {
      expect(statement.getStatement()).toEqual([])
    })
  })

})