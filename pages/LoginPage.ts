import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly signInButton: Locator;
  readonly fillMessage: Locator;
  readonly fillMessage2: Locator;

  constructor(page: Page) {
    super(page);
    this.emailField = page.getByPlaceholder('Email');
    this.passwordField = page.getByPlaceholder('Password');
    this.signInButton = page.getByRole('button', { name: 'Sign in', exact: true });
    this.fillMessage = page.locator('div').filter({ hasText: /^Please fill out all the required fields\.$/ });
    this.fillMessage2 = page.locator('div').filter({ hasText: /^Incorrect email, password or sign-in method\.$/ });  
  }

  async fillLoginFields(email: string, password: string){
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.signInButton.click();
  }
}