const puppeteer = require('puppeteer')


describe('Mi primer prueba abriendo un navegador',()=>{

    it('Abrir mediante Selector', async()=>{
    const browser = await puppeteer.launch({ headless: true,slowMo:1000})
    const page = await browser.newPage()
    await page.goto('http://automationpractice.com/index.php')
    const algo = await page.waitForSelector('#block_top_menu > ul > li:nth-child(1) > a')
    algo.click()
    await page.waitForSelector('#block_top_menu > ul > li:nth-child(1) > a')
    
    await browser.close()
    })
    it('abrir navegador con XPhat', async()=>{
        const browser = await puppeteer.launch({ headless: true,slowMo:1000})
        const page = await browser.newPage()
        await page.goto('http://automationpractice.com/index.php')
        const algo = await page.waitForXPath('//*[@id="block_top_menu"]/ul/li[1]/a')
        algo.click()
        await page.waitForXPath('//*[@id="block_top_menu"]/ul/li[1]/a')
        
        await browser.close()
        })
    

})

it('funcion con css', async()=>{
    const browser = await puppeteer.launch({ headless: true,slowMo:1000})
    const page = await browser.newPage()
    await page.coverage.startCSSCoverage()
    await page.evaluate(() => { const element = document.querySelector('#block_top_menu > ul > li.sfHoverForce > a'); });
    const cssCoverage = await page.coverage.stopCSSCoverage()
    
    await page.close()
    await browser.close()


})
    
