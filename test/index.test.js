const {jString} = require('../src/index')



test.skip('should return json format',() => {
    const list = '{"name":"John", "age":30, "city":"New York"}'
    let newJS = JSON.parse(list)
    expect(jString(list)).toEqual(newJS)
})
