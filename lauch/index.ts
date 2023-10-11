import { getDriver, browser } from '../lib/_engine';

before(async () => {
  await getDriver(browser);
});

after(async () => {
  await browser.quitAll();
});
