const {test,expect} = require ("@playwright/test")

test('Successful Login with Assertion', async ({page}) =>
{
    await page.goto("https://www.saucedemo.com/")
    await expect(page.locator(".login_logo")).toHaveText("Swag Labs")
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", {name: "Login"}).click();
    await expect(page.locator(".app_logo")).toHaveText("Swag Labs");
    await expect(page).toHaveURL(/inventory/);
})