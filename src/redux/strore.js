import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
  let store = createStore(
    persistedReducer,
    applyMiddleware(
      promiseMiddleware,
      logger
    )
  )
  const persistore = persistStore(store);
  return {store, persistore};
}
