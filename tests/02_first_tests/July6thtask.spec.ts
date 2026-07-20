import { test, expect } from "@playwright/test";

test("two users interact", async ({ browser }) => {
    let Context1 = await browser.newContext();
    let Page1 = await Context1.newPage();



    let Context2 = await browser.newContext();
    let Page2 = await Context2.newPage();

    await Page1.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await Page2.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    console.log("Page1 URL:", Page1.url());
    console.log("Page2 URL:", Page2.url());
    await Context1.close();
    await Context2.close();
});