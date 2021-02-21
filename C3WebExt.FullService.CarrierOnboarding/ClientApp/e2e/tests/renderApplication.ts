import { setup, getElementByTestId, setJestTimeout } from '../utils/pageObjects';

let page, browser;

setJestTimeout();

describe('Render application', () => {
  beforeEach(async () => {
    const setupStuff = await setup();
    page = await setupStuff.page;
    browser = await setupStuff.browser;
  });

  afterEach(async () => {
    await browser.close();
  });

  it('Should load the page', async () => {
    const historyTable = await getElementByTestId(page, 'app-container');
    await expect(historyTable).not.toBeFalsy();
  });
});
