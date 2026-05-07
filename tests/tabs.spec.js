import {test,expect,chromium} from '@playwright/test'

test("multiple tabs",async({})=>{

    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page1=await context.newPage()
    const page2=await context.newPage()
//context - incognito mode mari 
    await page1.goto("https://www.facebook.com/")

    console.log(await page1.title());

    await page1.waitForTimeout(3000)

    await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page2.title());


    await page2.waitForTimeout(3000)

})

test("handling tabs",async({})=>{

    const browser=await chromium.launch()
    const context=await browser.newContext()
    const page=await context.newPage()

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    console.log(await page.title());

    const [newpage]=await Promise.all([
    context.waitForEvent('page'),
    await page.locator('//a[text()="OrangeHRM, Inc"]').click()
    ])

    await newpage.waitForLoadState()

    console.log(await newpage.title());

    await page.waitForTimeout(5000)

})

test("page navigation",async({page})=>{
    await page.goto("https://www.facebook.com/")

    await page.waitForTimeout(3000)

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.waitForTimeout(3000)

    await page.goBack()

    await page.waitForTimeout(3000)

    await page.goForward()

    await page.waitForTimeout(3000)

})

test.only("taskWindow",async({page,context})=>{
    await page.goto("https://letcode.in/window")
   
    const [newPage]=await Promise.all([
        context.waitForEvent("page"),
        page.locator('//button[@id="home"]').click()
    ])

    await newPage.waitForLoadState()

    await expect(newPage.locator('//h1[text()="Ready to be a Pro Engineer?"]')).toBeVisible()

    console.log(await page.title());

    await newPage.close()

    console.log(await page.title());
    
    await page.locator('//button[@id="multi"]').click()

    await newPage.waitForLoadState()

    console.log(await page.title());

    await page.close()
    
    await page.pause()
})