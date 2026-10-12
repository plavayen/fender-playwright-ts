import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    readonly accountHomeModal: Locator;

  constructor(page: Page) {
    super(page);
    this.accountHomeModal = page.getByRole('button', { name: 'Account' });
  }
}