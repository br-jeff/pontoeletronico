const {addDate} = require('../../src/utils/date')

it('should sum one on day',()=> {
    let correctDate =  addDate('2020-12-08',1)
    let beDate = new Date('2020-12-09')
    console.log(beDate,correctDate)
    expect(correctDate).toEqual(beDate)
})

it('should sum one on day',()=> {
    let correctDate =  addDate('2020-12-31',1)
    let beDate = new Date('2021-01-01')
    console.log(beDate,correctDate)
    expect(correctDate).toEqual(beDate)
})

it('should return same data',()=> {
    let correctDate =  addDate('2020-12-31')
    let beDate = new Date('2020-12-31')
    console.log(beDate,correctDate)
    expect(correctDate).toEqual(beDate)
})