import {test,expect} from '@playwright/test'

test("dropdown",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect(page.locator('//label[@for="country" and text()="Country:"]')).toBeVisible()
    //await page.locator('//select[@id="country"]').selectOption("India")
    //await page.locator('//select[@id="country"]').selectOption({value:"india"})
    await page.locator('//select[@id="country"]').selectOption({index:9})

    await page.waitForTimeout(3000)
})

test("MultipleSelection",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/") 

    //await page.locator('//select[@id="colors"]').selectOption(["Red","Yellow","Green"])
    await page.locator('//select[@id="animals"]').selectOption(["Cat","Dog","Fox"])

    await page.waitForTimeout(3000)
})

//task

test("letcodeFruits",async({page})=>{
    await page.goto("https://letcode.in/dropdowns")

    await page.locator('//select[@id="fruits"]').selectOption("Apple")

    await page.locator('//select[@id="superheros"]').selectOption(["Captain Marvel","Iron Man","Spider-Man","Thor","Wonder Woman"])

    await page.locator('//select[@id="lang"]').selectOption({index:4})

    await page.locator('//select[@id="country"]').selectOption({value:"India"})

    await page.waitForTimeout(3000)
})