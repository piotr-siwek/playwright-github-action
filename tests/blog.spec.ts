import { test, expect } from '@playwright/test';

test.describe('Blog', () => {
    test('Find all posts urls', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/blog/");

        const links = await page.locator("#recent-posts-3 >> a").count();
        expect(links).toEqual(5)    
    })

    test('Check articles length', async ({ page }) => {
        const allowedArticleLength = [13, 42, 41, 35, 41]
        await page.goto("https://practice.automationbro.com/blog/");

        const articleLinks = await page.locator("#recent-posts-3 >> a").allTextContents();

        articleLinks.forEach((link, index) => {
            console.log(link)
            expect(link.length).toEqual(allowedArticleLength[index])
        })
        
    })
    
    
})
