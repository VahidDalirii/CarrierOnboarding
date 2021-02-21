import { browserType, launchConfig } from '../playwright.config';

const baseURL = 'http://localhost:4200';

export const setJestTimeout = () => jest.setTimeout(35 * 1000);

export const setup = async () => {
  const browser = await browserType.launch(launchConfig);
  const context = await browser.newContext();
  const page = await context.newPage(baseURL);
  await page.waitForTimeout(10000);
  await page.goto(baseURL);

  return { browser, context, page };
};

export const getElementByTestId = async (page, testId) => page.$(`[data-test-id="${testId}"]`);

export const getSelectorByTestId = (testId) => `[data-test-id="${testId}"]`;
