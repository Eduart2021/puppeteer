const puppeteer = require('puppeteer')

test('testing : ', async ()=>{
    const browser = await puppeteer.launch({
       // headless: false,
        soloMo:50
    })
    const url = 'https://www.google.com/'

    const page = await browser.newPage()
    await page.goto(url)

    const p = await page.$('[name=q]') // find element [attribute = value]
    await p.type('text/html')           // type in field

    await page.keyboard.press('Enter')  // press enter on keybord

    await page.waitForTimeout(5000)      // wait for 5 sec

    await browser.close()
},20000)