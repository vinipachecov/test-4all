import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import * as sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  (applyMiddleware(sagaMiddleware)),
);
// run watchers
Object.keys(sagas).forEach(watcher => sagaMiddleware.run(sagas[watcher]));

export default store;
