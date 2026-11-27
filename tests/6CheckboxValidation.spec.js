const {test,expect} = require("@playwright/test")

test.beforeEach(async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/locatorspractice/");
    await expect(page).toHaveURL(/locatorspractice/);
});

test("TC01, Validation of remember my username checkbox is clickable(Check/Uncheck) with Assertion", async({page}) =>
{ 
    const checkbox1 = page.getByRole("checkbox",{name: "Remember my username"});
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();
    console.log("Remember my username checkbox is Checked?:", await checkbox1.isChecked());
    
    await checkbox1.uncheck();
    await expect(checkbox1).not.toBeChecked();
    console.log("Remember my username checkbox is Checked?:", await checkbox1.isChecked());
});

test("TC02, Validation of AgreeTerms checkbox is clickable(Check/Uncheck) with Assertion", async({page})=>
{
    const checkbox2 = page.getByRole("checkbox", {name: "I agree to the  terms  and privacy policy."});
    await checkbox2.check();
    await expect(checkbox2).toBeChecked();
    console.log("Agree Terms checkbox is Checked?:", await checkbox2.isChecked());
    
    await checkbox2.uncheck();
    await expect(checkbox2).not.toBeChecked();
    console.log("Agree Terms checkbox is Checked?:", await checkbox2.isChecked());
});