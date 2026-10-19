import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainUserPage extends BasePage {
    readonly accountButton: Locator;
    readonly myAccountLink: Locator;

  constructor(page: Page) {
    super(page);
    this.accountButton = page.getByRole('button', { name: 'Account' });
    this.myAccountLink = page.getByRole('link',{name:'My Account'});
  }
}