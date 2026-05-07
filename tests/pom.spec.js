import{test,except} from '@playwright/test'
import Orange from './data/hrm'
import login from './data/login.json'
import SauceDemo from './data/sauce'
    
test("login orangehrm",async({page})=>{
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        const log=new Orange(page)
        await log.login(login.username,login.password)
        //await log.login("Admin","admin123")
})

test.only("multiple users login",async({page})=>{
        const log=new SauceDemo(page)

        for(const user of login.users){
                await page.goto("https://www.saucedemo.com/")

                await Sauce.loginPage(user.username,user.password)

        }
        
        //await log.loginPage("standard_user","secret_sauce")

        await page.pause()
})

