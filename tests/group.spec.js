import{test,expect} from '@playwright/test'

test.describe("group_1",async()=>{
    test("first test",async()=>{
        console.log("first test executed successfully");
        
    })

     test("second test",async()=>{
        console.log("second test executed successfully");
    })

     test("third test",async()=>{
        console.log("third test executed successfully");
    })
})

test.describe("group_2",async()=>{
     test("fourth test",async()=>{
        console.log("fourth test executed successfully");
    })

     test("fifth test",async()=>{
        console.log("fifth test executed successfully");
    })

     test("sixth test",async()=>{
        console.log("sixth test executed successfully");
    })
})

//for running only one group: npx playwright test group.spec.js -g group_1  --project chromium --headed
