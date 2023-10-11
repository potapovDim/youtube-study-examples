import { Fragment, Button } from '../../../../lib';

class HeaderFragment extends Fragment {
  analytics;
  combines;
  adminPanel;
  logOut;

  constructor(root, id) {
    super(root, id);

    this.analytics = this.init('[href="/analytics"]', 'Analytics', Button);
    this.combines = this.init('[href="/combaines"]', 'Combines', Button);
    this.adminPanel = this.init('[href="/admin"]', 'Admin panel', Button);
    this.logOut = this.init('button.logout', 'Log out', Button);
  }
}

export { HeaderFragment };
