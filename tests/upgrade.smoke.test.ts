import { test } from "@playwright/test";
import { UpgradeHomePage } from "../pages/UpgradeHomePage";
import { UpgradeRewardsCheckingPage } from "../pages/UpgradeRewardsCheckingPage";
import { UpgradeRewardsCheckingFunnelPage1 } from "../pages/UpgradeRewardsCheckingFunnelPage1";
import { NavigablePage } from "../pages/PageInterfaces";
import { isRewardsCheckingPage } from "../pages/helpers/typeGuards";

test("navigating and validating upgrade home page", async ({ page }) => {
  let currentPage: NavigablePage = new UpgradeHomePage(page);

  await currentPage.goto();
  await currentPage.validateOnPage();
});

test("navigating to the rewards checking funnel", async ({ page }) => {
  const homePage = new UpgradeHomePage(page);

  await homePage.goto();
  const rewardsPage = await homePage.navigateToRewardsCheckingFunnel();
  await rewardsPage.validateOnPage();
});

test("standard fill in the rewards checking funnel", async ({ page }) => {
  const homePage = new UpgradeHomePage(page);

  await homePage.goto();
  const rewardsPage = await homePage.navigateToRewardsCheckingFunnel();

  await rewardsPage.enterEmail();
  const rewardsCheckingFunnelPage1 = await rewardsPage.clickGetStarted();

  await rewardsCheckingFunnelPage1.validateOnPage();
});

test("current page -> fill in the rewards checking funnel", async ({ page }) => {
  let currentPage: NavigablePage = new UpgradeHomePage(page);
  await currentPage.goto();

  currentPage = await (currentPage as UpgradeHomePage).navigateToRewardsCheckingFunnel();
  await (currentPage as UpgradeRewardsCheckingPage).enterEmail();

  currentPage = await (currentPage as UpgradeRewardsCheckingPage).clickGetStarted();
  await currentPage.validateOnPage();
});

test("type guarding with current page -> fill in the rewards checking funnel", async ({ page }) => {
  let currentPage: NavigablePage = new UpgradeHomePage(page);
  await currentPage.goto();
  
  currentPage = await (currentPage as UpgradeHomePage).navigateToRewardsCheckingFunnel();

  if (isRewardsCheckingPage(currentPage)) {
    await currentPage.enterEmail();
    currentPage = await currentPage.clickGetStarted();
  }

  await currentPage.validateOnPage();
});