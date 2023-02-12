import { test, expect } from '@playwright/test';

test.describe('About', () => {
    test('Verify about page title', async ({page}) => {
        await page.goto("https://practice.automationbro.com/about/");

        await expect(page).toHaveTitle("About – Practice E-Commerce Site");
    })
    
})
