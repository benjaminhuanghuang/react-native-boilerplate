import {applyMiddleware, createStore, compose} from 'redux';
import * as reduxLoop from 'redux-loop';

import middleware from './middleware';
import reducer from './reducer';

const enhancer = compose(
  applyMiddleware(...middleware),
  reduxLoop.install()
);

const store = createStore(
  reducer,
    [],
  enhancer
);

export default store;
