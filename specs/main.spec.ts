import { provider } from '../project';

const { browser, I } = provider.actor;

describe('Main page suite', function () {
  it('[P] login', async function () {
    await browser.get('http://localhost:4000/');
    await I.onMainPageSetValuesToLoginForm({ username: 'admin', password: 'admin' });
    await I.onMainPagePerformOnLoginForm({ login: 'click' });
    await I.onTablesPageWaitForVisibilityStateTablesHeader({ analytics: true });
    await I.onTablesPageWaitForVisibilityStateMachinesList({ length: '>0', _action: { manufacturer: null } });

    const result = await I.onTablesPageGetRandomDataFromMachinesList(['manufacturer', 'price'], { _indexes: 10 });
    console.log(result);
  });
});
