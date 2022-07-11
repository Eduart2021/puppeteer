const {sum, devide} = require('../src/functionExport')


test('ret sum',() => {
    expect(sum(1,2)).toBe(3)
})


test('devide this',() => {
    let num =9
    expect(devide(num,2)).toBe(4.5)
})

