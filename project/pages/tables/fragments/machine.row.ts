import { Fragment, Button } from '../../../../lib';

class MachineRowFragment extends Fragment {
  manufacturer;
  workVolume;
  machineLength;
  width;
  weight;
  power;
  price;

  constructor(root, id) {
    super(root, id);

    this.manufacturer = this.init('td:nth-child(1)', 'manufacturer', Button);
    this.workVolume = this.init('td:nth-child(2)', 'workVolume', Button);
    this.machineLength = this.init('td:nth-child(3)', 'length', Button);
    this.width = this.init('td:nth-child(4)', 'width', Button);
    this.weight = this.init('td:nth-child(5)', 'weight', Button);
    this.power = this.init('td:nth-child(6)', 'power', Button);
    this.price = this.init('td:nth-child(7)', 'price', Button);
  }
}

export { MachineRowFragment };
