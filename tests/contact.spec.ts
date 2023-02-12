import { test, expect } from '@playwright/test';

test.describe('Contact', () => {
    test('Fulfill form', async ({ page }) => {
        await page.goto("https://practice.automationbro.com/contact/");

        await page.locator("#evf-277-field_ys0GeZISRs-1").fill("Name")
        await page.locator("#evf-277-field_LbH5NxasXM-2").fill("Email@Email.com")
        await page.locator("#evf-277-field_66FR384cge-3").fill("Phone")
        await page.locator("#evf-277-field_yhGx3FOwr2-4").fill("Message")

        await page.getByRole("button", {name: "Submit"}).click();
        const successMessage = page.getByText("Thanks for contacting us! We will be in touch with you shortly")
        await expect(successMessage).toBeVisible();
    })
    
})
