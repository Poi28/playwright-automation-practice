const {test,expect} = require("@playwright/test")

test.beforeEach("Successful login in Saucedemo", async ({page}) =>
{
    await page.goto("https://www.saucedemo.com/");
    await expect(page.locator(".login_logo")).toHaveText("Swag Labs");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", {name: "Login"}).click();
})

test("Add first and second item in Cart and assert that added items is in the cart", async ({page}) =>
{
    await expect(page.locator(".app_logo")).toHaveText("Swag Labs");
    await expect(page).toHaveURL(/inventory/);
    await page.getByRole("button",{name: "Add to cart"}).first().click();
    await page.getByRole("button", {name: "Cart, 1 items"}).click();
    await expect(page.getByText("Your Cart")).toBeVisible();
    await expect(page).toHaveURL(/cart/);
    await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
    await page.getByRole("button",{name: "Open Menu"}).click();
    await page.getByRole("button",{name: "All Items"}).click();
    await expect(page.locator(".app_logo")).toHaveText("Swag Labs");
    await expect(page).toHaveURL(/inventory/);
    await page.getByRole("button",{name: "Add to cart"}).first().click();
    await page.getByRole("button", {name: "Cart, 2 items"}).click();
    await expect(page.getByText("Your Cart")).toBeVisible();
    await expect(page).toHaveURL(/cart/);
    await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
    await expect(page.getByText("Sauce Labs Bike Light")).toBeVisible();
})

test("Add an item first then remove it assert cart badge has 0 count after removing added item", async ({page}) =>
{
    await expect(page.locator(".app_logo")).toHaveText("Swag Labs");
    await expect(page).toHaveURL(/inventory/);
    await page.getByRole("button",{name: "Add to cart"}).first().click();
    await expect(page.getByRole("button",{name: "Cart, 1 items"})).toBeVisible();
    await page.getByRole("button",{name: "Cart, 1 items"}).click();
    await expect(page).toHaveURL(/cart/);
    await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
    await page.getByRole("button",{name: "Remove"}).click();
    await expect(page.getByRole("button",{name: "Cart, empty"})).toBeVisible();
    await expect(page.locator(".cart_item")).toHaveCount(0);

})

test("Add a product then open cart then assert that the name and price match the inventory page", async ({page})=>
{

    await expect(page.locator(".app_logo")).toHaveText("Swag Labs");
    await expect(page).toHaveURL(/inventory/);
    await expect(page.getByRole("button", {name: "Cart, empty"})).toBeVisible();

    // Pick the third product card (nth counts from 0, so nth(2) is the third)
    const item = page.locator(".inventory_item").nth(2);
    // Read the product's name from the card and save it in a variable
    const name = await item.locator(".inventory_item_name").textContent();
    // Read the product's price from the same card and save it
    const price = await item.locator(".inventory_item_price").textContent();
    // Click Add to cart inside that same card, so the name, price and button match
    await item.getByRole("button", {name: "Add to cart"}).click();
    // Open the cart by clicking the cart icon
    await page.locator(".shopping_cart_link").click();
    // Confirm we are now on the cart page
    await expect(page).toHaveURL(/cart/);
    // Confirm the cart shows the same name we saved from the inventory page
    await expect(page.locator(".inventory_item_name")).toHaveText(name);
    // Confirm the cart shows the same price we saved from the inventory page
    await expect(page.locator(".inventory_item_price")).toHaveText(price);

})
