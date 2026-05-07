# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom.spec.js >> multiple users login
- Location: tests\pom.spec.js:13:6

# Error details

```
ReferenceError: Sauce is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - generic [ref=e5]:
    - generic [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_user
        - text: locked_out_user
        - text: problem_user
        - text: performance_glitch_user
        - text: error_user
        - text: visual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import{test,except} from '@playwright/test'
  2  | import Orange from './data/hrm'
  3  | import login from './data/login.json'
  4  | import SauceDemo from './data/sauce'
  5  |     
  6  | test("login orangehrm",async({page})=>{
  7  |         await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  8  |         const log=new Orange(page)
  9  |         await log.login(login.username,login.password)
  10 |         //await log.login("Admin","admin123")
  11 | })
  12 | 
  13 | test.only("multiple users login",async({page})=>{
  14 |         const log=new SauceDemo(page)
  15 | 
  16 |         for(const user of login.users){
  17 |                 await page.goto("https://www.saucedemo.com/")
  18 | 
> 19 |                 await Sauce.loginPage(user.username,user.password)
     |                 ^ ReferenceError: Sauce is not defined
  20 | 
  21 |         }
  22 |         
  23 |         //await log.loginPage("standard_user","secret_sauce")
  24 | 
  25 |         await page.pause()
  26 | })
  27 | 
  28 | 
```