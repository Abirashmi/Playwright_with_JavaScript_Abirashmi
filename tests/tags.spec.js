import {test,except} from '@playwright/test'

test("first test @reg",async()=>{
    console.log("First test run successfully");
})
test("second test @reg",async()=>{
        console.log("second test executed successfully");
})

test("third test @smoke",async()=>{
        console.log("third test executed successfully");
})
test("fourth test @reg",async()=>{
        console.log("fourth test executed successfully");
})

test("fifth test @reg @smoke",async()=>{
        console.log("fifth test executed successfully");
})

//To run only smoke: npx playwright test tags.spec.js --grep "@smoke" --project chromium
//To avoid only smoke:npx playwright test tags.spec.js --grep-invert "@smoke" --project chromium