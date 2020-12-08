const fixSize = require('../../src/utils/fixSizeNumbers')

it('should recive string num equal 2 and  return 0002',() => {
    expect(fixSize('2',4)).toBe('0002')
})

it('should recive number equal 11 and  return 011',() => {
    expect(fixSize(11,3)).toBe('011')
})

it('should recive number 00 and return 000',() => {
    expect(fixSize(0,3)).toBe('000')
})

it('should recive number 00 and return 00',() => {
    expect(fixSize('00',2)).toBe('00')
})