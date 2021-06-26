import { createStore, applyMiddleware, Store, AnyAction } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootSaga from './saga'
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const store: Store<unknown, AnyAction> = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware)
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default store
