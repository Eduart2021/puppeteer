const puppeteer = require('puppeteer')


test('launch chromium', async () =>{
    const browser = await puppeteer.launch({ //object -> {}
       // headless: false,
        slowMo: 60,
        //args:['--window-size=1080, 950']
    })
    let url = 'file:///C:/Users/zeedy/OneDrive/Desktop/unitTestJS/puppeteer/src/index.html'
    let url2 = 'http://127.0.0.1:5500/puppeteer/src/index.html'
    const page = await browser.newPage()
    await page.goto(url)
    //name
    await page.click('input#name')
    await page.type('input#name', "Diola")
    // age
    await page.click('input#age')
    await page.type('input#age', '21')
    await page.keyboard.press('Enter')
    //await page.click('#btnAddUser')
    const finalText = await page.$eval('.user-list', el => el.textContent )
    let aList =[];
    if(finalText) aList.push(finalText)
    console.log(aList);
    expect(finalText).toBeTruthy
    
    const classElement = await page.$('[type="text"]')
            await classElement.click({clickCount:3})
            await classElement.type('text')
            await classElement.click({clickCount:3})
            await page.keyboard.press('Backspace')
    const res = await (await classElement.getProperty('value')).jsonValue()
    
    console.log("In field text is : " + res);
   // await page.waitForTimeout(700)

    await browser.close()
},15000)

