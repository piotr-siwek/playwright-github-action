import { test, expect } from '@playwright/test';

test.describe('Home', () => {
    test('Open Home page and verify title', async ({ page }) => {
        // open url
        await page.goto("https://practice.automationbro.com/");

        // verify title
        await expect(page).toHaveTitle("Practice E-Commerce Site – Automation Bro");
    })

    test('Click get started button using CSS Selector', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/");

        // click the button
        await page.locator("#get-started").click();

        // verify URL
        await expect(page).toHaveURL(/.*#get-started/)
    })

    test('Verify header using text selector', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/");

        // find the text locator
        const headingText = await page.locator("text=Think different. Make different.");

        // verify heading text is visible
        await expect(headingText).toBeVisible();
    })

    test('Verify home link is enabled using text and css selector', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/");

        // find the home text. Go inside primary menu
        const homeText = await page.locator("#primary-menu >> text=Home");

        // verify heading text is visible
        await expect(homeText).toBeEnabled();
    })

    test('Verify all nav links', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/");

        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ]

        // find the nav links. Find links withing primary-menu id and all li that has id starting with menu
        const navLinks = page.locator("#primary-menu >> li[id*=menu]");

        // print all elements
         (await navLinks.elementHandles()).map(async (el) => console.log(await el.textContent()))

        // verify heading text is visible
        expect(await navLinks.allTextContents()).toEqual(expectedLinks);
    })

    
    
})
