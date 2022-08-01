const puppeteer = require('puppeteer')

it('should run',async ()=>{

const browser = await puppeteer.launch({
    headless: false,
    slowMo:100
})
const page = await browser.newPage()
await page.goto('https://google.com/')
const navigationPromise = page.waitForNavigation()

await navigationPromise

await page.goto('https://www.zedy3d.com/')

await page.setViewport({ width: 1536, height: 722 })

await page.waitForSelector('#\\31 948276884 > .unifiednav__container > .unifiednav__item-wrap > .dmUDNavigationItem_010101716293 > .nav-item-text')
await page.click('#\\31 948276884 > .unifiednav__container > .unifiednav__item-wrap > .dmUDNavigationItem_010101716293 > .nav-item-text')

await navigationPromise

await page.waitForSelector('#\\31 126056457 > #\\31 104167580 > font > a > span')
await page.click('#\\31 126056457 > #\\31 104167580 > font > a > span')

await navigationPromise

await page.waitForSelector('#1177452198')
await page.click('#1177452198')

await page.waitForSelector('#1052425816')
await page.click('#1052425816')

await page.waitForSelector('#1934746026')
await page.click('#1934746026')

await page.waitForSelector('#1118005942')
await page.click('#1118005942')

await page.waitForSelector('#1712629695')
await page.click('#1712629695')

await browser.close()
},30000)