import { Page, Collection } from '../../../lib';

import { MachineRowFragment } from './fragments/machine.row';
import { HeaderFragment } from './fragments/header';

class TablePage extends Page {
  header;
  machinesList;

  constructor() {
    super('[id="table_page"]', 'Tables page');

    this.header = this.init('.header', 'Tables header', HeaderFragment);
    this.machinesList = this.init('.machines_list tbody tr', 'Machines list', Collection, MachineRowFragment);
  }
}

export { TablePage };
