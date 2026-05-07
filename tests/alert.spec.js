import{test,expect} from '@playwright/test'
import { on } from 'node:cluster';
import { log } from 'node:console';

test("simple alert handle",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async alert=>{
        console.log(alert.type());
        console.log(alert.message());
        expect(alert.message()).toBe("I am an alert box!")

        await alert.accept()

    })

    await page.locator('//button[@id="alertBtn"]').click()

    await page.waitForTimeout(3000)
})

test("confirmation alert handle",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on('dialog',async confirmalert=>{
        console.log(confirmalert.type());
        console.log(confirmalert.message());
        expect(confirmalert.message()).toBe("Press a button!")

        //await confirmalert.accept()
        await confirmalert.dismiss()
    })

    await page.locator('//button[@id="confirmBtn"]').click()
    
    //await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed OK!")
    await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed Cancel!")
    await page.waitForTimeout(3000)
})

test("prompt alert handle",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
   
    page.on('dialog',async promptAlert=>{
        console.log(promptAlert.type());
        console.log(promptAlert.message());

        await promptAlert.accept("playwright")
        //await promptAlert.dismiss()
    })

    await page.click('//button[@id="promptBtn"]')
    
    //await expect(page.locator('//p[@id="demo"]')).toHaveText("User cancelled the prompt.")
    await expect(page.locator('//p[@id="demo"]')).toHaveText("Hello playwright! How are you today?")
    await page.pause()
})

test("Alert with OK",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html")

    page.on('dialog',async okalert=>{
        console.log(okalert.type());
        console.log(okalert.message());

        await okalert.accept()
        
    })
    await page.locator('//a[@class="analystic" and text()="Alert with OK "]').click()
    await page.locator('//button[@onclick="alertbox()"]').click()

    await page.waitForTimeout(3000)
})

test("alert with ok & cancel",async({page})=>{

    await page.goto("https://demo.automationtesting.in/Alerts.html")
    
    page.on("dialog",async confirmBox=>{
        console.log(confirmBox.type());
        console.log(confirmBox.message());
        
        await confirmBox.dismiss()
    })

    await page.locator('//a[@class="analystic" and text()="Alert with OK & Cancel "]').click()
    await page.locator('//button[@onclick="confirmbox()"]').click()

    await expect(page.locator('//p[@id="demo" and text()="You Pressed Cancel"]')).toHaveText("You Pressed Cancel")

    await page.waitForTimeout(3000)
})

test.only("alertWithText",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Alerts.html")

    page.on("dialog",async alertWithText=>{
        console.log(alertWithText.type());
        console.log(alertWithText.message());
        
        await alertWithText.accept("john")
    })

    await page.locator('//a[@class="analystic" and text()="Alert with Textbox "]').click()
    await page.locator('//button[@onclick="promptbox()"]').click()

    await expect(page.locator('//p[@id="demo1"] ')).toHaveText("Hello john How are you today")

    await page.waitForTimeout(3000)
})
