import { test, expect } from '@playwright/test';

test('User Registration', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/register.htm');

  // Fill registration form
  await page.fill('input[name="customer.firstName"]', 'John');
  await page.fill('input[name="customer.lastName"]', 'Smith');
  await page.fill('input[name="customer.address.street"]', '123 Main St');
  await page.fill('input[name="customer.address.city"]', 'Austin');
  await page.fill('input[name="customer.address.state"]', 'TX');
  await page.fill('input[name="customer.address.zipCode"]', '78746');
  await page.fill('input[name="customer.phoneNumber"]', '1234567890');
  await page.fill('input[name="customer.ssn"]', '123-45-6789');
  await page.fill('input[name="customer.username"]', 'john_smith123');
  await page.fill('input[name="customer.password"]', 'Pass12345678');
  await page.fill('input[name="repeatedPassword"]', 'Pass12345678');

  // Click register
  await page.click('input[value="Register"]');

  // Verify registration success message
  await expect(page.locator('text=Your account was created successfully')).toBeVisible();
});
