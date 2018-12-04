import { persistCombineReducers } from 'redux-persist'
import { AsyncStorage } from 'react-native'

import { serverUrls } from 'constants/config'

import reducerTemplate from './reducerTemplate'

import routes from './routes'
import mainRoutes from './mainRoutes'
import errors from './errors'
import settings from './settings'
import userData from './userData'
import hints from './hints'

const persistConfig = {
  key: 'primary',
  storage: AsyncStorage,
  debug: true,
  blacklist: [],
  whitelist: ['hints', 'userData']
}

const requestReducersObj = Object.keys(serverUrls).reduce((acc, cur) => {
  acc[cur] = reducerTemplate(cur)
  return acc
}, {})

export default persistCombineReducers(persistConfig, {
  routes,
  // mainRoutes,
  errors,
  settings,
  userData,
  hints,
  ...requestReducersObj
})