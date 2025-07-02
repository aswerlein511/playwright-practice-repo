// pages/tests/UpgradeRewardsCheckingPage.ts
import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { NavigablePage } from "./PageInterfaces";
import { UpgradeRewardsCheckingFunnelPage1 } from "./UpgradeRewardsCheckingFunnelPage1";

export class UpgradeRewardsCheckingPage extends BasePage implements NavigablePage
{
  readonly upgradeHeader: Locator;
  readonly email: Locator;
  readonly getStartedButton: Locator;

  constructor(page: Page) {
    super(page);
    this.upgradeHeader = page.getByRole("heading", { name: "The debit card with up to 2%" });
    this.email = page.locator('[data-auto="emailField-1"]');
    this.getStartedButton = page.locator('[data-auto="rewards-checking-hero-cta-button-1"]');
  }

  async validateOnPage(): Promise<void> {
    await this.expectVisible(this.email);
  }

  async enterEmail() {
    this.fillField(this.email, "test.auto@gmail.com");
  }

  async clickGetStarted(): Promise<UpgradeRewardsCheckingFunnelPage1> {
    this.clickButton(this.getStartedButton);
    return new UpgradeRewardsCheckingFunnelPage1(this.page);
  }

}
