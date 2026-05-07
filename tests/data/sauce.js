class SauceDemo{
    constructor(page){
        this.page=page;
        this.username=page.locator('//input[@id="user-name"]')
        this.password=page.locator('//input[@id="password"]')
        this.loginButton=page.locator('//input[@id="login-button"]')

    }

    async loginPage(username,password){
        await this.username.fill(username);
        await this.password.fill(password)
        await this.loginButton.click()
    }
}
export default SauceDemo