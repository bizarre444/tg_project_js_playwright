// LoginPage.js
class LoginPage {
    constructor() {
        this.usernameInput = element(by.id('username'));
        this.passwordInput = element(by.id('password'));
        this.loginButton = element(by.id('loginButton'));
    }

    async login(username, password) {
        await this.usernameInput.sendKeys(username);
        await this.passwordInput.sendKeys(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();