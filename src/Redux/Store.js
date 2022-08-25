// import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './Reducer/Index'
import { persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootsaga } from './saga/rootsaga'
import createSagaMiddleware from 'redux-saga' 

const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk,sagaMiddleware]
const persistConfig = {
  key: 'root',
  storage,
  whiteList :["counter"]
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
 export const confingstore =()=>{
    const store = createStore(persistedReducer, applyMiddleware(...middleware))
      let persistor = persistStore(store)
      sagaMiddleware.run(rootsaga)
   return { store, persistor }
}