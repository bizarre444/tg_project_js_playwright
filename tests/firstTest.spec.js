const { expect, test } = require('@playwright/test');

test("First test loading page", async({ page }) => {
    await page.goto('https://www.kad-staging-mobi.net/');
    await expect(page).toHaveURL('https://www.kad-staging-mobi.net/');
})

test("Title is correct", async({ page }) => {
    await page.goto('https://www.kad-staging-mobi.net/');
    await expect(page).toHaveTitle('Educational Apps for Kids: Math, English, STEM | Pre-k to 3d Grade');
})