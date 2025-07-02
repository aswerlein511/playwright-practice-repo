// pages/tests/UpgradeRewardsCheckingFunnelPage1.ts
import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { NavigablePage } from "./PageInterfaces";

export class UpgradeRewardsCheckingFunnelPage1 extends BasePage implements NavigablePage
{
  readonly upgradeHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.upgradeHeader = page.locator('[data-auto="funnel-title"]');
  }

  async validateOnPage(): Promise<void> {
    await this.expectVisible(this.upgradeHeader);
  }

}
