import {test,expect} from '@playwright/test'

test.beforeAll("before test", ()=>{
console.log("test started successfully");
})

test.beforeEach("navigation",async({page})=>{
await page.goto("https://www.saucedemo.com/")
})

test("login one",async({page})=>{

await page.locator('//input[@placeholder="Username"]').fill("standard_user")
await page.locator('//input[@placeholder="Password"]').fill("secret_sauce")

await page.locator('//input[@id="login-button"]').click()
})

test("login two",async({page})=>{

await page.locator('//input[@placeholder="Username"]').fill("problem_user")
await page.locator('//input[@placeholder="Password"]').fill("secret_sauce")

await page.locator('//input[@id="login-button"]').click()

})

test("login three",async({page})=>{

await page.locator('//input[@placeholder="Username"]').fill("performance_glitch_user")
await page.locator('//input[@placeholder="Password"]').fill("secret_sauce")

await page.locator('//input[@id="login-button"]').click()
})

test.afterEach("logout",async({page})=>{

await page.locator('//button[@id="react-burger-menu-btn"]').click()
await page.locator('//a[@id="logout_sidebar_link"]').click()

})

test.afterAll("After test", ()=>{
console.log("test executed successfully");
})

