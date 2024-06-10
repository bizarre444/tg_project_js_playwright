// HomePage.js
class HomePage {
    constructor() {
        this.welcomeMessage = element(by.id('welcomeMessage'));
    }

    async getWelcomeMessage() {
        return await this.welcomeMessage.getText();
    }
}

module.exports = new HomePage();