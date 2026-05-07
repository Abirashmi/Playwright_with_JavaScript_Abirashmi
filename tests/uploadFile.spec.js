import{test,expect} from '@playwright/test'
import { promises } from 'node:dns'

test("file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//input[@id="singleFileInput"]').setInputFiles("C:/Users/abira/OneDrive/Documents/10 important Coding/playwright file upload 1.jpg")

    await page.locator('//button[@type="submit" and text()="Upload Single File"]').click()

    await expect(page.locator('//p[@id="singleFileStatus"]')).toContainText("Single file selected: playwright file upload 1.jpg")

    await page.pause()
})

test("multiple file upload",async({page})=>{
   await page.goto("https://testautomationpractice.blogspot.com/")

   await page.locator('//input[@id="multipleFilesInput"]').setInputFiles(["C:/Users/abira/OneDrive/Documents/10 important Coding/playwright file upload 1.jpg","C:/Users/abira/OneDrive/Documents/10 important Coding/playwright file upload 2.jpg"])
   
   await page.click('//button[text()="Upload Multiple Files"]')

   await page.pause()

   //await page.locator('//input[@id="multipleFilesInput"]').setInputFiles([])

  // await page.pause()
})

//download file
test.only("downloadFile",async({page})=>{

  await page.goto("https://the-internet.herokuapp.com/download")

  const[download]=await Promise.all([
    page.waitForEvent('download'),
    await page.locator('//a[text()="input.csv"]').click()

  ])

  const file="C:/Users/abira/Downloads/input.csv"
  await download.saveAs(file)
})

//its not shown in local file doubt