// pages/PageInterfaces.ts

export interface NavigablePage {
  goto(path?: string): Promise<void>;
  validateOnPage(): Promise<void>;
}
