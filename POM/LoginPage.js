// LoginPage.js
class LoginPage {
    constructor(page) {
        this.page = page;
        this.modalLogin = page.getByRole('button', { name: 'Log in' });
        this.emailInput = page.getByPlaceholder('Email address');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.locator('#family').getByRole('button', { name: 'Log in' });
    }

    async login(email, password) {
        await this.modalLogin.click();
        await this.emailInput.click().fill(email);
        await this.passwordInput.click().fill(password);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();


