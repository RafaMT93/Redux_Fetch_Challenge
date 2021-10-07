const { applyMiddleware, compose, combineReducers, createStore } = Redux;

import thunk from './middleware/thunk.js';
import localStorage from './middleware/localStorage.js';
import token from './modules/token.js';
import user from './modules/user.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));
const reducers = combineReducers({ token, user });
const store = createStore(reducers, enhancer);

export default store;
