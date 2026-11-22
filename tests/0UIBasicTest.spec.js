const {test, expect} = require('@playwright/test');
const { toNamespacedPath } = require('node:path');

//*IMPORTANT* puting async before the function() will have you use the "await" inside the function
// normal function with async: test('First Playwright Test',async function()
// arrow function with async: test('First Playwright Test',async () =>
test('To test opening a browser',async ({browser}) =>
{
    //crhome - plugins/cookies
    //to open fresh browser instance use .newContext **do not forget to always use "await"
    const context = await browser.newContext();
    //to open a new page in a browser use .newPage **do not forget to always use "await"
    const page = await context.newPage(); 
    //to go in a certain URL use .goto **do not forget to always use "await"
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title())
    await page.getByLabel("Username").fill("Jamez")
    await page.getByLabel("Password").fill("Test-only")
    await page.locator(".radiotextsty").last().check()
    await page.getByRole('button', { name: 'Okay' }).click();
    await page.locator("select.form-control").selectOption("Teacher")
    await expect(page.locator("select.form-control")).toHaveValue("teach")
    await page.getByRole("checkbox", {name: "terms"}).check()
    await page.getByRole("button", {name: "Sign In"}).click()
    const alert = page.locator(".alert-danger")
    await expect(alert).toBeVisible()
    await expect(alert).toContainText("Incorrect username/password")

});

//same as above but more optimized
test("More optimized testing from above test", async({browser})=>
{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    const userName = page.getByLabel("Username");
    const password = page.getByLabel("Password");
    const signIn = page.getByRole("button", {name: "Sign In"});
    await userName.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await signIn.click();
    const successLogin = page.getByRole("link",{name: 'ProtoCommerce Home'});
    await expect(successLogin).toBeVisible();
    await expect(page).toHaveURL(/angularpractice/);



});

//same as above but no .newContext and .newPage all in fixtures but stil the same open browser and open new page
test('To test opening a page in a browser',async ({page}) =>
{
    await page.goto("https://google.com")
    //get title - assertion
    console.log(await page.title())
    await expect(page).toHaveTitle("Google")
});