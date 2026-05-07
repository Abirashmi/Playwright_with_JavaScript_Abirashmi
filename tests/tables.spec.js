import {test,except} from '@playwright/test'

test("handling tables",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const column=await page.locator('//table[@id="productTable"]/thead/tr/th')
    const row=await page.locator('//table[@id="productTable"]/tbody/tr')

    console.log("column count:",await column.count());
    console.log("Row count:",await row.count());
    
    //method1
    //let arr=["tb,sp,ls"]
    //for(let i of arr)                                                   ${i}
    //await page. locator('//table[@id="productTable"]/tbody/tr/td[text()="Tablet "]/following-sibling :: td/child :: input'). check()

    //method2

    // const a=await row.filter({
    // has:page.locator("td"),
    // hasText:"Tablet"
    // })

    // await a.locator('//input[@type="checkbox"]').check()


//multiple checkbox
    const a=await row.filter({
        has: page.locator("td"),
     // hasText:/Smartphone| Laptop| Tablet/

})

    const arr=await a.all()

    for(let i of arr){
        await i.locator('//input[@type="checkbox"]').check()
        let text=await i.locator('//td[2]').textContent()
        console.log(text);
    }
    
    await page.pause()
    
})