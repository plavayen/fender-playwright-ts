import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('Password');
    this.signInButton = page.getByRole('button', { name: 'Sign in', exact: true });
  }
  async login(email: string, password: string) {
    await this.page.goto('https://intl.fender.com/');
    await this.page.getByRole('button', { name: 'Account', exact: true }).hover();
    await this.page.getByRole('link', { name: 'Sign in' }).click();
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.signInButton.click();
  }
}