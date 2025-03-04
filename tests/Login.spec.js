const {test,expect} = require('@playwright/test');



test.describe('Login Tests', () => {
  
     test('Valid Login', async ({ page }) => {
       await page.goto('https://parabank.parasoft.com/parabank/index.htm');
       
       // Enter valid credentials
       await page.fill('input[name="username"]', 'john_smith123');
       await page.fill('input[name="password"]', 'Pass12345678');
       await page.click('input[value="Log In"]');
   
       // Verify successful login
       await expect(page.locator('text=Accounts Overview')).toBeVisible();
     });
   
     test('Invalid Login - Wrong Credentials', async ({ page }) => {
       await page.goto('https://parabank.parasoft.com/parabank/index.htm');
   
       await page.fill('input[name="username"]', 'wrongUser');
       await page.fill('input[name="password"]', 'wrongPass');
       await page.click('input[value="Log In"]');
   
       // Verify error message
       await expect(page.locator('text=Error:')).toBeVisible();
     });
   
     test('Login with Empty Fields', async ({ page }) => {
       await page.goto('https://parabank.parasoft.com/parabank/index.htm');
   
       await page.click('input[value="Log In"]');
   
       // Verify error message (adjust selector if needed)
       await expect(page.locator('text=Error:')).toBeVisible();
     });
   
     test('Logout Test', async ({ page }) => {
       await page.goto('https://parabank.parasoft.com/parabank/index.htm');
   
       await page.fill('input[name="username"]', 'validUser');
       await page.fill('input[name="password"]', 'validPass');
       await page.click('input[value="Log In"]');
   
       // Click Logout
       await page.click('a[href*="logout.htm"]');
   
       // Verify redirection to login page
       await expect(page.locator('text=Customer Login')).toBeVisible();
     });
   
   });