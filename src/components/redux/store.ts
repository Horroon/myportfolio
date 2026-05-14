import { createStore } from 'redux'
import { reducers } from './comibereducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['FavoriteReducer'],
    stateReconciler: hardSet,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const Store = createStore(persistedReducer);
export const persistor = persistStore(Store)
