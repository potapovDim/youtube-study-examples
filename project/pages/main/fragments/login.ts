import { Fragment, Button, Input } from '../../../../lib';

class LoginFragment extends Fragment {
  username;
  password;
  login;

  constructor(root, id) {
    super(root, id);

    this.username = this.init('[placeholder="User name"]', 'User name', Input);
    this.password = this.init('[placeholder="Password"]', 'Passwrod', Input);
    this.login = this.init('button', 'Login button', Button);
  }
}

export { LoginFragment };
