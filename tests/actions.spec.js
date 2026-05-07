import {test,expect} from'@playwright/test'

test("keyboard actions",async({page})=>{
    await page.goto("https://gotranscript.com/text-compare")

    await page.fill('//textarea[@name="text1"]',"playwright")

    await page.keyboard.press("Control+A")

    await page.keyboard.press("Control+C")

    await page.keyboard.press("Tab")

    await page.keyboard.press("Control+V")

    await page.click('//button[@id="recaptcha"]')

    await page.pause()
})

test("mouseHover",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator('//button[@class="dropbtn"]').hover()

    await page.pause()
})

test("rightClick",async({page})=>{
    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html")

    await page.locator('//span[@class="context-menu-one btn btn-neutral"]').click({button:'right'})

    await page.pause()
})

test("Double click",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.fill('//input[@id="field1"]',"Playwright")

    await page.locator('//button[text()="Copy Text"]').dblclick()

    await expect(page.locator('//input[@id="field2"]')).toHaveValue("Playwright")

    await page.pause()
})

test("Mouse Wheel",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    // await page.mouse.wheel(0,3000)--vertical scroll --(0,-3000)--bottom to up page
    // await page.mouse.wheel(3000,0)--horizontal scroll
    await page.locator('//div[@id="HTML8"]').scrollIntoViewIfNeeded()

    await page.pause()
})

test("drag and drop",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const source=page.locator('//div[@id="draggable"]')
    const target=page.locator('id="droppable"')

    await source.dragTo(target)

    await page.pause()
})