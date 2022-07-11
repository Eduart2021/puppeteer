const puppeteer = require('puppeteer')


test('open chrome', async () =>{
 
    const browser = await puppeteer.launch({    // launch() start browser
        headless: false,                        // chrome show "false", chrome hide "true"
        slowMo:80                               // typing speed on web
    })
        
    const page = await browser.newPage()                    // newPage()
    await page.goto('https://www.google.com')               // goto() page url

    await page.click('input[name="q"]')                     //click('tagName[atribute='value']')
    await page.type('input[name="q"]', "zedy3d.com")        // type('locator, some text')
    //wait
    await page.waitForTimeout(2000)                         // wait 2 sec
    await page.click('input[name="btnK"]')
    
    await page.waitForSelector('span[class="spell_orig"]')  // wait for locator to show in dom
    await page.click('a[class="spell_orig"]')

    await page.waitForSelector('a[href="https://www.zedy3d.com/"]')
    await page.click('a[href="https://www.zedy3d.com/"]')

    await page.waitForTimeout(2000)
    await page.screenshot({path:'./screenshots/testing.jpg'}) // take screenshoot

    let pageTitle = await page.title()                       // get page title
    console.log("Page name: "+ pageTitle);

    let pageMainTitle = await page.$('font[data-inject=home-At10row1Title]')
    let textInMain = await (await pageMainTitle.getProperty('textContent')).jsonValue() // get innerText
    console.log(textInMain);

    let checkBox = await page.$()
    let checkCheckBox = ''

    await browser.close()                                   //close() , close browser
 },20000)