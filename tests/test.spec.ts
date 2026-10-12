import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';


test('A User can succesfuly login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  await loginPage.login(
    process.env.FENDER_USER || '', 
    process.env.FENDER_PASS || ''
  );
  await homePage.accountHomeModal.hover();
  await page.getByText('Hi Pablo Lavayen').click();
});