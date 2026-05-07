import {test,expect} from '@playwright/test'

test("screenshot",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.screenshot({path:"tests/screenshot/"+"automation.png"})
    await page.screenshot({path:"tests/screenshot/"+"fullPage.png"})

    await page.locator('//div[@id="HTML12"]').screenshot({path:"tests/screenshot/"+"dynamicWebElement.png"})
})