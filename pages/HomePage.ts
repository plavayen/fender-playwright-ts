import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
    readonly accountButton: Locator;
    readonly signInLink: Locator;
    readonly closePopupButton: Locator;
    readonly learnMoreButton: Locator;
    readonly menuButton: Locator;
    readonly homeLink: Locator;
    readonly askFenderButton: Locator;
    readonly searchButton: Locator;
    readonly viewCartButton: Locator;

  constructor(page: Page) {
    super(page);
    this.accountButton = page.getByRole('button', { name: 'Account' });
    this.signInLink = page.getByRole('link', { name: 'Sign in' });
    this.closePopupButton = page.getByRole('button', { name: 'close dialog' });
    this.learnMoreButton = page.getByRole('button', { name: 'Learn More' });
    this.menuButton = page.getByRole('button', { name: 'Menu' });
    this.homeLink = page.getByRole('link', { name: 'Fender — Home' });
    this.askFenderButton = page.getByRole('button', { name: 'Ask Fender' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.viewCartButton = page.getByRole('button', { name: 'View cart' });
  }

  async navigateToLogin(url: string) {
    await this.page.goto(url);
    if (await this.closePopupButton.isVisible({ timeout: 4000 }).catch(() => false)) {
      await this.closePopupButton.click();
    }
    await this.accountButton.waitFor({ state: 'visible' });
    await this.accountButton.hover();
    await this.signInLink.click();
  }   
}