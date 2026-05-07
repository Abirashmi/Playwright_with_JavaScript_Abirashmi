# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pom.spec.js >> login orangehrm
- Location: tests\pom.spec.js:4:5

# Error details

```
ReferenceError: admin123 is not defined
```

# Test source

```ts
  1  | import{test,except} from '@playwright/test'
  2  | import Orange from './data/hrm'
  3  |     
  4  | test("login orangehrm",async({page})=>{
  5  |         await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  6  |         const log=new Orange(page)
  7  | 
> 8  |         await log.login("Admin",admin123)
     |                                 ^ ReferenceError: admin123 is not defined
  9  | })
  10 | 
  11 | 
```