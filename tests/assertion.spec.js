import{test,expect} from '@playwright/test'

test("assertion", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/")

    await expect(page).toHaveTitle("Automation Testing Practice")

    await expect(page.locator('//span[contains(text(),"Playwright")]')).toBeVisible()
    await expect(page.locator('//span[contains(text(),"Playwright") ]' )).toHaveText("For Selenium, Cypress & Playwright")
    await expect(page.locator('//span[contains(text(),"Playwright") ]')).toContainText('Playwright')

    await expect(page.locator('//input[@id="name"]')).toBeEmpty()
    await page.locator('//input[@id="name"]').fill("playwright")
    await expect(page.locator('//input[@id="name"]')).toHaveValue('playwright')

    //await expect(page.locator('//input[@id="name"]')).toBeEmpty()

})

test("Positive Login Test",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await expect(page).toHaveURL("https://practicetestautomation.com/practice-test-login/")   

    await expect(page.locator('//input[@id="username"]')).toBeEmpty()
    await page.locator('//input[@id="username"]').fill("student")
    await expect(page.locator('//input[@id="username"]')).toHaveValue("student")

    await expect(page.locator('//input[@id="password"]')).toBeEmpty()
    await page.locator('//input[@id="password"]').fill("Password123")
    await expect(page.locator('//input[@id="password"]')).toHaveValue("Password123")

    await page.locator('//button[@id="submit"]').click()

    await page.waitForTimeout(2000)

    await expect(page).toHaveURL("https://practicetestautomation.com/logged-in-successfully/")

    await expect(page.locator('//strong[text()="Congratulations student. You successfully logged in!"]')).toBeVisible()   
    
    await expect(page.locator("//a[contains(text(),'Log out')]")).toBeVisible()   
    
    await page.waitForTimeout(2000)
})

test("Negative username test",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.locator('//input[@id="username"]').fill("incorrectUser")
    await expect(page.locator('//input[@id="username"]')).toHaveValue("incorrectUser")
    
    await page.locator('//input[@id="password"]').fill("Password123")
    await expect(page.locator('//input[@id="password"]')).toHaveValue("Password123")

    await page.waitForTimeout(3000)

    await page.locator('//button[@id="submit"]').click()

    await expect(page.locator('//div[@id="error" and text()="Your username is invalid!"]')).toBeVisible()

    await page.waitForTimeout(3000)
})

test("Negative password test",async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")

    await page.locator('//input[@id="username"]').fill("student")
    await expect(page.locator('//input[@id="username"]')).toHaveValue("student")
    
    await page.locator('//input[@id="password"]').fill("incorrectPassword")
    await expect(page.locator('//input[@id="password"]')).toHaveValue("incorrectPassword")

    await page.waitForTimeout(3000)

    await page.locator('//button[@id="submit"]').click()

    await expect(page.locator('//div[@id="error" and text()="Your password is invalid!"]')).toBeVisible()

    await page.waitForTimeout(3000) 
})

//soft assertion
//await expect.soft(page.locator('//span[contains(text(),"Playwright")]')).toBeVisible()
//rarely we use when the asserts failed

