// pages/tests/UpgradeHomePage.ts
import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { UpgradeRewardsCheckingPage } from "./UpgradeRewardsCheckingPage";
import { NavigablePage } from "./PageInterfaces";

export class UpgradeHomePage extends BasePage implements NavigablePage {
  readonly upgradeHeader: Locator;

  constructor(page: Page, protected readonly isMobile = false) {
    super(page);
    this.upgradeHeader = page.getByRole("heading", { name: "Get up to $50,000 with a low" });
  }

  async navigateToRewardsCheckingFunnel(): Promise<UpgradeRewardsCheckingPage> {
    await this.clickButton(this.checkingAccountButton);
    await this.clickButton(this.rewardsCheckingAccountButton);
    return new UpgradeRewardsCheckingPage(this.page);
  }

  async validateOnPage(): Promise<void> {
    await this.expectVisible(this.upgradeHeader);
  }
}
