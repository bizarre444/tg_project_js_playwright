// TestSpec.js

import { test, expect } from '@playwright/test';

const LoginPage = require('../POM/LoginPage');
//const HomePage = require('./HomePage');

test('Login by button', async({ page }) => {
    await page.goto('https://www.kad-staging-mobi.net/');
    await LoginPage.login('qa.test2021@gmail.com', '123456QA');
    await expect(page.getByRole('heading', { name: 'Account Settings' })).toBeVisible();
})

