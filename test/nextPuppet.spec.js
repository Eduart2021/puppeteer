const puppeteer = require('puppeteer')
describe('testing puppetest name front',()=>{
    let browser
    let page
    beforeEach(async()=>{
        browser = await puppeteer.launch({
            headless:false
        })
        page = await browser.newPage()
    })
    afterEach(async()=>{
        await browser.close()
    })

    it("should display logo name",async()=>{
        
        await page.goto('http://zedy3d.com')

            let name1 = await page.$$('[class="lh-1 font-size-24"]')
            let name2
            for(let i = 0; i < name1.length; i++){
                let check =  await page.evaluate((el)=> el.textContent, name1[i])
                if(check !== '') {
                    name2 = check.trim()
                }
            }
            expect(name2).toBeDefined()
            expect(name2).toBe('Zedy3d')
    },10000)
})