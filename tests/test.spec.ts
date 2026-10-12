import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {HomePage} from '../pages/HomePage';


test('A User can succesfuly login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  await loginPage.login('xuperenlacocina@gmail.com', 'Katrina2015!');
  await homePage.accountHomeModal.hover();
  await page.getByText('Hi Pablo Lavayen').click();
});