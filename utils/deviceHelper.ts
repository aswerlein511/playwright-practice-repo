// utils/deviceHelper.ts
import { chromium, devices, BrowserContext, Page, Browser } from '@playwright/test';

export async function getMobileContextAndPage(deviceName: keyof typeof devices): Promise<{ browser: Browser; context: BrowserContext; page: Page }> {
  const device = devices[deviceName];
  if (!device) {
    throw new Error(`Device "${deviceName}" is not a valid Playwright device.`);
  }

  const browser = await chromium.launch();
  const context = await browser.newContext({ ...device });
  const page = await context.newPage();

  return { browser, context, page };
}
