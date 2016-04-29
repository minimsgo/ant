import { createStore, combineReducers, applyMiddleware} from 'redux'

import products from './reducers/products'
import detail from './reducers/detail'
import api from './middlewares/api'

const store = createStore(combineReducers({
  products,
  detail,
}), applyMiddleware(api))

export default store
