import { test, expect } from "@playwright/test";

test("TC1:To Verify BookAppintment IsVisible", async ({ page }) => {

    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    let makeAppointment = page.locator('//a[@id="btn-make-appointment"]');
    let userName = page.locator('//input[@id="txt-username"]');
    let passWord = page.locator('//input[@id="txt-password"]');
    let login = page.locator('//button[@id="btn-login"]');



    await makeAppointment.click();
    await userName.fill('John Doe');
    await passWord.fill('ThisIsNotAPassword');
    await login.click();

    let bookAppointment = page.locator('//button[@id="btn-book-appointment"]');
    await expect(bookAppointment).toContainText("Book Appointment");

})

