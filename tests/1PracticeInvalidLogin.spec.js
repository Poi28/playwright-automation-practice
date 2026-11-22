const {test,expect} = require ("@playwright/test");

test("Incorrect login credentials w/ assertion", async ({page}) =>
{
    await page.goto("https://rahulshettyacademy.com/locatorspractice/");
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible()
    await page.getByPlaceholder("Username").fill("poieee28");
    await page.getByPlaceholder("Password").fill("testpassword");
    await page.getByLabel("Remember my username").check();
    //you can also use await page.getByRole("checkbox",{name: "Remember my username"}).check()
    await page.getByRole("button", {name: "SIGN IN"}).click();
    await expect(page).toHaveURL(/locatorspractice/); //confirms you stayed on the page
    await expect(page.locator(".error")).toHaveText("* Incorrect username or password");
})
