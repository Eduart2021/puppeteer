const {generateText, validateInput, checkAndGenerate} = require('../src/utils')

test('should return names', () =>{
    let name = generateText('Molla', 22)
    expect(name).toBe("Molla (22 years old)")
})

test('should verify names ',() =>{
    const verification = validateInput("Name", "isText", 32)
    expect(verification).toBe(true)
})

test('Integration test',() =>{
    let nameis = validateInput("Name")
    let ageIs = validateInput(44)
   
    expect(nameis).toBe(true)
    expect(ageIs).toBe(true)
})

test('check and generate names ',() =>{
    const verification = checkAndGenerate("Name", 32)
    expect(verification).toBe('Name (32 years old)')
})