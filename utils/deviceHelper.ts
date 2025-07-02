// utils/deviceHelper.ts
import { chromium, devices, BrowserContext, Page } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

const iPhone12 = devices['iPhone 12'];

export async function getMobileContextAndPage(): Promise<{ context: BrowserContext; page: Page }> {
  const browser = await chromium.launch();
  const context = await browser.newContext({ ...iPhone12 });
  const page = await context.newPage();
  return { context, page };
}
