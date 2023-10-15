import { provider } from '../project';

const { suite, test } = provider.testRunner;

suite('Main page suite', function () {
  test('[P] login', async function ({ I, browser, users }) {
    await browser.get('http://localhost:4000/');

    await I.onMainPageSetValuesToLoginForm(users.admin)
      .onMainPagePerformOnLoginForm({ login: 'click' })
      .onTablesPageWaitForVisibilityStateTablesHeader({ analytics: true })
      .onTablesPageWaitForVisibilityStateMachinesList({
        length: '<100',
        machineLength: true,
        _action: { manufacturer: null, machineLength: null },
      })
      .onTablesPageWaitForContentStateMachinesList(
        {
          price: (str) => Number.parseInt(str) > 10,
          _action: { price: null },
        },
        { customCheck: true },
      );
  });
});
