const puppeteer = require('puppeteer')


describe('Mi primer prueba abriendo un navegador',()=>{

    it('debe abrir el navegador', async()=>{
    const browser = await puppeteer.launch({ headless: false,slowMo:1000})
    const page = await browser.newPage()
    await page.goto('http://automationpractice.com/index.php')
    const algo = await page.waitForSelector('#block_top_menu > ul > li:nth-child(1) > a')
    algo.click()
    await page.waitForSelector('#block_top_menu > ul > li:nth-child(1) > a')
    
    await browser.close()
    })
    it('debe abrir el navegador', async()=>{
        const browser = await puppeteer.launch({ headless: false,slowMo:1000})
        const page = await browser.newPage()
        await page.goto('http://automationpractice.com/index.php')
        const algo = await page.waitForXPath('//*[@id="block_top_menu"]/ul/li[1]/a')
        algo.click()
        await page.waitForXPath('//*[@id="block_top_menu"]/ul/li[1]/a')
        
        await browser.close()
        })
    

})

it('debe abrir el navegador', async()=>{
    const browser = await puppeteer.launch({ headless: false,slowMo:1000})
    const page = await browser.newPage()
    await page.coverage.startCSSCoverage()
    await page.goto('http://automationpractice.com/index.php', {waitUntil: 'load'}) 
    const cssCoverage = await page.coverage.stopCSSCoverage()
    
    await page.close()
    await browser.close()


})
    
