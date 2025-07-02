// pages/helpers/typeGuards.ts
import { UpgradeRewardsCheckingPage } from "../UpgradeRewardsCheckingPage";
import { NavigablePage } from "../PageInterfaces";

export function isRewardsCheckingPage(page: NavigablePage): page is UpgradeRewardsCheckingPage {
  return "enterEmail" in page && "clickGetStarted" in page;
}
