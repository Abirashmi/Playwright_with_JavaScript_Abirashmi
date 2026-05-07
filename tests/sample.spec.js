import{test,except, expect} from '@playwright/test'

test("login using css",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator('[name="username"]').fill("Admin")
    await page.locator('[name="password"]').fill("admin123")
    await page.locator('[type="submit"]').click()
})

test("login using xpath",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator('//input[@name="username"]').fill("Admin")
    await page.locator('//input[@type="password" and @name="password"]').fill("admin123")
    await page.locator('//button[normalize-space(text()=" Login ")]').click()

    await page.waitForTimeout(3000)
})

test("login using built-in locators",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await expect(page.getByAltText("company-branding")).toBeVisible()

    await page.getByPlaceholder("username").fill("Admin")
    await page.getByPlaceholder("Password").fill("admin123")

    await page.getByRole("button",{name:" Login "}).click()
    
    await page.pause()
})

