class Orange{

    constructor(page){
        this.page=page;
        this.user=page.locator('//input[@placeholder="Username"]')
        this.pass=page.locator('//input[@placeholder="Password"]')
        this.button=page.locator('//button[text()=" Login "]')
    }


    async login(uname,pword){
        await this.user.fill(uname);
        await this.pass.fill(pword)
        await this.button.click()
    }
    
}
export default Orange;