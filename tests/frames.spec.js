import{test,expect} from '@playwright/test'
import { log } from 'console'

test("frame",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

    // const framess=page.frames()
    
    // console.log("Count of the frames: ",await framess.length);

    // for(let i of framess){
    //     console.log("frames url :",i.url());
        
    // }

    await expect(page.locator('//img[@class="logoClass"]')).toBeVisible()

//frame=src,name
//framelocator=attributes

    //const frame1=await page.frame({name="iframe-name"})
    //const frame1=await page.frameLocator({url:"https://rahulshettyacademy.com/AutomationPractice/"})

    const frame1=await page.frameLocator('//iframe[@id="courses-iframe"]')

    await expect(frame1.locator('(//a[text()="Home"])[1]')).toBeVisible()
    await frame1.locator('(//a[text()="Practice"])[1]').click()

    await page.pause()
})

//task1 url
//https://ui.vision/demo/webtest/frames/

test("countOfFrames",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    
    const Hframes=page.frames()
    
    console.log("Count of the frames: ",await Hframes.length);

    for(let i of Hframes){
        console.log("frames url :",i.url());
        
    }

    await page.pause()
})

test("TextOnMultipleFrames",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Frames.html")

    const child=page.frame({url:"https://demo.automationtesting.in/Frames.html"})

    await child.locator('//input[@name="mytext1"]').fill("Frame1 Text")  
    
//const gchild=frame || child=frame.locator

   const gchild= await child.childFrames()[0]

   await gchild.locator('()')
})


//task2
// test.only("textInsideFrame",async({page})=>{
//     await page.goto("https://ui.vision/demo/webtest/frames/")
    
//     await page.fill('//input[@type="text"]',"Playwright1")

//     await page.waitForTimeout(3000)

//     await page.pause()

// })