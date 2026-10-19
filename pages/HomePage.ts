import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    readonly accountButton: Locator;
    readonly signInLink: Locator;

  constructor(page: Page) {
    super(page);
    this.accountButton = page.getByRole('button', { name: 'Account' });
    this.signInLink = page.getByRole('link', { name: 'Sign in' });
  }

  async navigateToLogin(url:string) {
    await this.page.goto(url);
    await this.accountButton.hover();
    await this.signInLink.click();
  }  

}