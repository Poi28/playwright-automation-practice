const {test, expect} = require("@playwright/test")

test.beforeEach("TC001, Check Login for Client App", async ({page})=>
{
    const userName = "anshika@gmail.com";
    const password = "Iamking@000";
    await page.goto("https://rahulshettyacademy.com/client");
    await page.getByRole("textbox", {name: "email@example.com"}).fill(userName);
    await page.getByPlaceholder("enter your passsword").fill(password);
    await page.getByRole("button", {name: "Login"}).click();
    await expect(page).toHaveURL(/dashboard/);



})

test("TC002, Validate Successful Search of Product/s", async ({page})=>
{
    await expect(page).toHaveURL(/dashboard/)
    await page.locator('#products').waitFor();
    console.log(await page.locator('#products .card-body b').allTextContents());
    await page.getByRole("textbox",{name:"search"}).fill("ZARA");
    await page.getByRole("textbox", {name:"search"}).press("Enter")
    //used .toHaveCount(0) to assert that the result on products only has ZARA /../i ignore case sensitivity
    await expect(page.locator('#products .card-body b', { hasNotText: /zara/i })).toHaveCount(0);
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByText("ZARA")).toBeVisible();
    console.log(await page.locator('#products .card-body b').allTextContents());
})

test("TC003, Validate Successfil Change of Products after searching another one", async ({page}) =>
{
    await expect(page).toHaveURL(/dashboard/)
    await page.locator('#products').waitFor();
    console.log(await page.locator('#products .card-body b').allTextContents());
    await page.getByRole("textbox",{name:"search"}).fill("iphone");
    await page.getByRole("textbox", {name:"search"}).press("Enter");
    //used .toHaveCount(0) to assert that the result on products only has iphone /../i ignore case sensitivity
    await expect(page.locator('#products .card-body b', { hasNotText: /iphone/i })).toHaveCount(0);
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByText("IPHONE")).toBeVisible();
    console.log(await page.locator('#products .card-body b').allTextContents());  
    await page.getByRole("textbox",{name:"search"}).fill("ADIDAS");
    await page.getByRole("textbox", {name:"search"}).press("Enter");
    await expect(page.locator('#products .card-body b', { hasNotText: /adidas/i })).toHaveCount(0);
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByText("ADIDAS")).toBeVisible();
    console.log(await page.locator('#products .card-body b').allTextContents());
})  

test("TC004, Validate Successful Logout", async({page}) =>
{
    await expect(page).toHaveURL(/dashboard/)
    await page.locator('#products').waitFor();
    console.log(await page.locator('#products .card-body b').allTextContents());
    await page.getByRole('button', {name:"Sign Out"}).click();
    await expect(page).toHaveURL("https://rahulshettyacademy.com/client/#/auth/login")


})