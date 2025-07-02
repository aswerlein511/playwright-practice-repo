// pages/BasePage.ts
import { Page, Locator, expect } from "@playwright/test";

export abstract class BasePage {
  protected readonly page: Page;
  protected readonly baseUrl: string;

  protected readonly checkingAccountButton: Locator;
  protected readonly rewardsCheckingAccountButton: Locator;

  protected readonly defaultTimeout = 10000;

  constructor(page: Page, protected readonly isMobile = false) {
    this.page = page;
    this.baseUrl = process.env.BASE_URL || "https://www.upgrade.com";
    this.checkingAccountButton = page.getByRole("button", { name: "Checking" });
    this.rewardsCheckingAccountButton = page.getByRole("menuitem", {
      name: "Rewards Checking Preferred",
    });
  }

  async waitForTitle(expected: string) {
    await this.page.waitForFunction(
      (title) => document.title.includes(title),
      expected
    );
  }

  async goto(path = "") {
    const fullUrl = `${this.baseUrl}${path}`;
    console.log("Navigating to:", fullUrl);
    await this.page.goto(fullUrl);
  }

  protected async clickButton(locator: Locator, timeout = this.defaultTimeout): Promise<void> {
    await expect(locator).toBeVisible({ timeout });
    await locator.click({ timeout });
  }

  protected async expectVisible(locator: Locator, timeout = this.defaultTimeout): Promise<void> {
    await expect(locator).toBeVisible({ timeout });
  }

  protected async fillField(locator: Locator, value: string, timeout = this.defaultTimeout): Promise<void> {
    await expect(locator).toBeVisible({ timeout });
    await locator.fill(value);
  }

  protected async assertText(locator: Locator, expectedText: string, timeout = this.defaultTimeout): Promise<void> {
    await expect(locator).toHaveText(expectedText, { timeout });
  }

  abstract validateOnPage(): Promise<void>;

  // Add more shared methods here
}
