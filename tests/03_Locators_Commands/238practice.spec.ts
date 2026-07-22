import { test, expect } from '@playwright/test';


test('Verify our first TC', async ({ page }) => {
    await page.goto('https://app.vwo.com/#/login', {
        timeout: 30000,
        waitUntil: 'domcontentloaded',
        referer: 'https://google.com'
    });
});