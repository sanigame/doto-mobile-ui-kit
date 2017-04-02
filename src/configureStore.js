import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './reducers'

export default (initialState) => {
  const middlewares = [thunk, logger]

  const enhancer = compose(
    applyMiddleware(...middlewares),
    global.reduxNativeDevTools ? global.reduxNativeDevTools(/*options*/) : nope => nope,
  )

  const store = createStore(reducers, initialState, enhancer)

  if (global.reduxNativeDevTools) {
    global.reduxNativeDevTools.updateStore(store)
  }
  return store
}
