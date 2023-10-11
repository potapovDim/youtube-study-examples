import { Page } from '../../../lib';

import { LoginFragment } from './fragments/login';
import { HeaderFragment } from './fragments/header';

class MainPage extends Page {
  header;
  login;

  constructor() {
    super('[id="main_page"]', 'Main page');

    this.header = this.init('.main_header', 'Main header', HeaderFragment);
    this.login = this.init('.login_form', 'Login form', LoginFragment);
  }
}

export { MainPage };
