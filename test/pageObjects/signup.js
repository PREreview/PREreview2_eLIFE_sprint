import config from 'config'
import { Selector } from 'testcafe'

const signup = {
  url: `${config.get('pubsweet-server.baseUrl')}/signup`,

  title: Selector('div[class^=Signup-local_title]'),

  username: Selector('form input[type=text]'),
  email: Selector('form input[type=email]'),
  password: Selector('form input[type=password]'),
  submit: Selector('form button'),
  login: Selector('form a'),
}

export default signup
