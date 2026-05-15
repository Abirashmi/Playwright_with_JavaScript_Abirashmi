import{test,expect} from '@playwright/test'

test("radio button",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="male"]').check()
    await expect(page.locator('//input[@id="male"]')).toBeChecked()

    //await expect(page.locator('//input[@id="male"]')).not.toBeChecked()

    await page.pause()
})

test("CheckBox",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="monday"]').check()
    await expect(page.locator('//input[@id="monday"]')).toBeChecked()

    await page.pause()
})

test("multipleCheckBox",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const locat=['//input[@id="sunday"]','//input[@id="tuesday"]','//input[@id="thursday"]','//input[@id="saturday"]']

    for(let i of locat){
       
       await page.locator(i).check()
    }
    
    await page.pause()
})

test("task radio box",async({page})=>{
    await page.goto("https://letcode.in/radio")
    
    await expect(page.locator("//label[contains(text(),'Select any one')]")).toBeVisible()
    await page.locator('//input[@id="yes"]').check()
    await expect(page.locator('//input[@id="yes"]')).toBeVisible()
    
    await expect(page.locator("//label[contains(text(),'Cofirm you can select only one radio button')]")).toBeVisible()
    await page.locator('//input[@id="two"]').check()
    await expect(page.locator('//input[@id="one"]')).not.toBeChecked()

    await expect(page.locator("//label[contains(text(),'Find the bug')]")).toBeVisible()
    await page.locator('//input[@id="bug"]').check()
    
    await expect(page.locator("//label[contains(text(),'Find which one is selected')]")).toBeVisible()
    await page.locator('//input[@id="foo"]').check()
 
    await expect(page.locator("//label[contains(text(),'Confirm last field is disabled')]")).toBeVisible()
    await expect(page.locator('//input[@id="maybe"]')).toBeDisabled()

    await expect(page.locator("//label[contains(text(),'Find if the checkbox is selected?')]")).toBeVisible()
    await page.locator("//label[@class='checkbox' and text()=' Remember me ']").check()
    await expect(page.locator("//label[@class='checkbox' and text()=' Remember me ']")).toBeChecked()

    await expect(page.locator("//label[contains(text(),'Accept the T&C')]")).toBeVisible()
    await page.locator("//label[@class='checkbox' and text()=' I agree to the ']").check()
    await expect(page.locator("//label[@class='checkbox' and text()=' I agree to the ']")).toBeChecked()

    await page.waitForTimeout(3000)
})

