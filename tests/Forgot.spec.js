// @ts-check
const { test,expect} = require('@playwright/test');

test('PARA BANK CUSTOMER FORGOT PASSWORD TESTING', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('role=link[name="Forgot login info?"]').click();
  await page.locator('input[name="firstName"]').fill('Mr tester');
  await page.locator('input[name="lastName"]').fill('Prince kumar');
  await page.locator('input[name="address\.street"]').fill('123 New road');
  await page.locator('input[name="address\.city"]').fill('bokaro');
  await page.locator('input[name="address\.state"]').fill('jharkhand');
  await page.locator('input[name="address\.zipCode"]').fill('827011');
  await page.locator('input[name="ssn"]').fill('5546');
  await page.locator('role=button[name="Find My Login Info"]').click();



});
