const {test,expect} = require ("@playwright/test");


//.beforeEach will let it test this everystart of automating new testcase
//example this successfull login test has .beforeEach, before starting each testcases below
//      playwright will test this successful login first
test.beforeEach('Successful Login in Site', async ({page}) =>
{
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('.login_logo')).toHaveText('Swag Labs')
    const userName = page.getByPlaceholder("Username")
    const password = page.getByPlaceholder("Password")
    const login = page.getByRole('button', {name: "Login"})
    await userName.fill("standard_user")
    await password.fill("secret_sauce")
    await login.click()
    await expect(page).toHaveURL(/inventory/)
    console.log("Successful Login")
})

test('Sorting Product Names (Z to A) then back to (A to Z) Inside the Site', async({page})=>
{

    await page.locator("select.product_sort_container").selectOption("Name (Z to A)");
    await expect(page.locator("select.product_sort_container")).toHaveValue("za");
    const inventoryName = await page.locator(".inventory_item_name").allTextContents();
    const sortedZA = [...inventoryName].sort().reverse();
    await expect(inventoryName).toEqual(sortedZA);
    console.log("Successfully Sorted Name (Z to A)");
    await page.locator("select.product_sort_container").selectOption("Name (A to Z)");
    await expect(page.locator("select.product_sort_container")).toHaveValue("az");
    const inventoryNameAZ = await page.locator(".inventory_item_name").allTextContents();
    const sortedAZ = [...inventoryNameAZ].sort();
    expect(inventoryNameAZ).toEqual(sortedAZ);
    console.log("Sorted Name back to (A to Z)");


})

test('Sorting Product Prices (low to high) then back to Name (A to Z) Inside the Site', async({page})=>
{

    await page.locator("select.product_sort_container").selectOption("Price (low to high)");
    await expect(page.locator("select.product_sort_container")).toHaveValue("lohi");
    const inventoryPricelohi = await page.locator(".inventory_item_price").allTextContents();
    const priceslohi = inventoryPricelohi.map(p => parseFloat(p.replace("$", "")));
    const sortedPricelohi = [...priceslohi].sort((a,b) => a - b);
    expect(priceslohi).toEqual(sortedPricelohi);
    console.log("Successfully Sorted Prices (low to high)");
    await page.locator("select.product_sort_container").selectOption("Name (A to Z)");
    await expect(page.locator("select.product_sort_container")).toHaveValue("az");
    const inventoryNameAZ = await page.locator(".inventory_item_name").allTextContents();
    const sortedAZ = [...inventoryNameAZ].sort();
    expect(inventoryNameAZ).toEqual(sortedAZ);
    console.log("Sorted Name back to (A to Z)");


})

test('Sorting Products Prices (high to low) then back to Name (A to Z) Inside the Site', async({page})=>
{

    await page.locator("select.product_sort_container").selectOption("Price (high to low)");
    await expect(page.locator("select.product_sort_container")).toHaveValue("hilo");
    const inventoryPricehilo = await page.locator(".inventory_item_price").allTextContents();
    const priceshilo = inventoryPricehilo.map(p => parseFloat(p.replace("$", "")));
    const sortedPricehilo = [...priceshilo].sort((a,b) => b - a);
    expect(priceshilo).toEqual(sortedPricehilo);
    console.log("Successfully Sorted Prices (high to low)");
    await page.locator("select.product_sort_container").selectOption("Name (A to Z)");
    await expect(page.locator("select.product_sort_container")).toHaveValue("az");
    const inventoryNameAZ = await page.locator(".inventory_item_name").allTextContents();
    const sortedAZ = [...inventoryNameAZ].sort();
    expect(inventoryNameAZ).toEqual(sortedAZ);
    console.log("Sorted Name back to (A to Z)");

})
