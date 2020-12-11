const {stringToDate} = require('../../src/utils/date')

it('should return same data',()=> {
    let correctDate =  stringToDate('2020-12-31')
    let beDate = new Date('2020-12-31')
    expect(correctDate).toEqual(beDate)
})