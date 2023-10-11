import { getDriver, browser } from './lib';
import { provider } from './project';

const { I } = provider.actor;

testExample();
async function testExample() {
  await getDriver(browser);

  await browser.get('http://localhost:4000/');
  await I.onMainPageSetValuesToLoginForm({ username: 'admin', password: 'admin' });
  await I.onMainPagePerformOnLoginForm({ login: 'click' });
}
