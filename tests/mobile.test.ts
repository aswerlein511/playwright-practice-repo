// tests/mobile.spec.ts
import { test } from '@playwright/test';
import { getMobileContextAndPage } from '../utils/deviceHelper';
import { UpgradeHomePage } from '../pages/UpgradeHomePage'; 

test('Mobile homepage test', async () => {
  const { context, page } = await getMobileContextAndPage("iPhone 12");
  const homePage = new UpgradeHomePage(page, true);

  await homePage.goto();
  await homePage.validateOnPage();

  await context.close();
});
