// @ts-check
const { test,expect} = require('@playwright/test');

test('PARA BANK CUSTOMER REGISTRATION TESTING', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.getByText('register').click();
  await page.locator('input[name="customer\.firstName"]').fill('Mr tester');
  await page.locator('input[name="customer\.lastName"]').fill('Prince kumar');
  await page.locator('input[name="customer\.address\.street"]').fill('123 New road');
  await page.locator('input[name="customer\.address\.city"]').fill('bokaro');
  await page.locator('input[name="customer\.address\.state"]').fill('jharkhand');
  await page.locator('input[name="customer\.address\.zipCode"]').fill('827011');
  await page.locator('input[name="customer\.phoneNumber"]').fill('9835561637');
  await page.locator('input[name="customer\.ssn"]').fill('5546');
  await page.locator('input[name="customer\.username"]').fill('Abcdkumar');
  await page.locator('input[name="customer\.password"]').fill('Abcd@kumar');
  await page.locator('input[name="repeatedPassword"]').fill('Abcd@kumar');
  await page.locator('role=button[name="Register"]').click();

  const locator = page.locator('text=Your account was created successfully. You are now logged in');
  await expect(locator).toBeVisible();
});