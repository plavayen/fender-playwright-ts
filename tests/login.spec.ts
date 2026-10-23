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
})

test('Login only using keyboard',{ tag: ['@accesibility'] }, async ({ page }) => {
  const loginPage = new LoginPage(page);
  const mainUserPage = new MainUserPage(page);
  const homePage = new HomePage(page);
  
  await page.goto("https://www.fender.com");
  for (let i = 0; i <= 3 ; i++) {
    await page.keyboard.press('Tab');
  }
  await expect(homePage.learnMoreButton).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(homePage.menuButton).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(homePage.homeLink).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(homePage.askFenderButton).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(homePage.searchButton).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(homePage.viewCartButton).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(homePage.accountButton).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(homePage.signInLink).toBeFocused();
  await page.keyboard.press('Enter');
  await loginPage.emailField.waitFor({ state: 'visible' });
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  await expect(loginPage.emailField).toBeFocused();
  await page.keyboard.type(process.env.FENDER_USER || '');
  await page.keyboard.press('Tab');
  await expect(loginPage.passwordField).toBeFocused();
  await page.keyboard.type(process.env.FENDER_PASS || '');
  await page.keyboard.press('Tab');
  await expect(loginPage.signInButton).toBeFocused();
  await page.keyboard.press('Enter');
  await page.pause();
})