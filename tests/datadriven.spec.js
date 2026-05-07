import {test, expect} from '@playwright/test'
import logindata from './data/login.json'

test("get data in json",async({page})=>{

await page.setViewportSize({width: 375, height:667})    
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

await page.locator('//input[@placeholder="Username"]').fill(logindata.username)
await page.locator('//input[@placeholder="Password"]').fill(logindata.password)
await page.locator('//button[text()=" Login "]').click()

await page.waitForTimeout(4000)
})


