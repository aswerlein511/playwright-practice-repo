import { defineConfig, devices } from "@playwright/test";
import * as dotenv from "dotenv";

console.log("Loading playwright.config.ts...");

const nodeEnv = process.env.NODE_ENV || "";
const envFile = nodeEnv ? `.env.${nodeEnv}` : ".env";

dotenv.config({ path: envFile });

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",

  use: {
    baseURL: process.env.BASE_URL || "https://www.upgrade.com",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  projects: [
    {
      name: "Desktop Chrome",
      use: devices["Desktop Chrome"],
    },
    {
      name: "Pixel 5",
      use: devices["Pixel 5"],
    },
    {
      name: "iPhone 13",
      use: devices["iPhone 13"],
    },
  ],
});
