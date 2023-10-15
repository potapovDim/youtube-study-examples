import { makePropertiesChainable } from 'chain-simple';
import type { TChainableActions } from 'promod-system';

import * as mainPageActions from './pages/main/page.actions';
import * as tablesPageActions from './pages/tables/page.actions';

const _I = {
  ...mainPageActions,
  ...tablesPageActions,
};
const I: TChainableActions<typeof _I> = makePropertiesChainable(_I);

export { I };
