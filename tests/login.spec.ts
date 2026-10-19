import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {MainUserPage} from '../pages/MainUserPage';
import {HomePage} from '../pages/HomePage';


test('A User can succesfuly login',{ tag: ['@functional'] }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainUserPage = new MainUserPage(page);
  const homePage = new HomePage(page);

  await homePage.navigateToLogin("https://www.fender.com");
  await loginPage.fillLoginFields(
    process.env.FENDER_USER || '', 
    process.env.FENDER_PASS || '');
  await mainUserPage.accountButton.waitFor({ state: 'visible' });
  await mainUserPage.accountButton.hover();
  await expect(mainUserPage.myAccountLink).toBeVisible;
})
test('Validate empty fields error message',{ tag: ['@negative'] }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainUserPage = new MainUserPage(page);
  const homePage = new HomePage(page);

  await homePage.navigateToLogin("https://www.fender.com");
  await loginPage.fillLoginFields('','');
  await expect(loginPage.fillMessage).toBeVisible();
})
test('Validate incorrect fields error message',{ tag: ['@negative'] }, async ({ page }) => {
  const loginPage = new LoginPage(page);
const mainUserPage = new MainUserPage(page);
  const homePage = new HomePage(page);

  await homePage.navigateToLogin("https://www.fender.com");
  await loginPage.fillLoginFields('a@abcabc.com','wrongPassword');
  await page.pause();
  await expect(loginPage.fillMessage2).toBeVisible();
});