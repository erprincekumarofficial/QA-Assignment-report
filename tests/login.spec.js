// @ts-check
const { test, expect} = require('@playwright/test');

test('PARA BANK CUSTOMER LOGIN TESTING', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.locator('input[name="username"]').fill('Abckumar');
  await page.locator('input[name="password"]').fill('Abc@kumar');
  await page.locator('role=button[name="Log In"]').click();


});
