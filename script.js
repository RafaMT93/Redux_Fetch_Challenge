import store from './redux/store.js';
import { tokenFetch } from './redux/modules/token.js';
import { userFetch } from './redux/modules/user.js';

const login = async (user) => {
  let state = store.getState();
  if (state.token.data === null) {
    await store.dispatch(tokenFetch(user));
  }
  state = store.getState();
  await store.dispatch(userFetch(state.token.data));
};

login({ username: 'dog', password: 'dog' });
