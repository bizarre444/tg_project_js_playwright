// TestSpec.js
const LoginPage = require('./LoginPage');
const HomePage = require('./HomePage');

describe('Login functionality', () => {
    it('should login successfully', async() => {
        await LoginPage.login('username', 'password');
        const welcomeMessage = await HomePage.getWelcomeMessage();
        expect(welcomeMessage).toEqual('Welcome, username!');
    });
});