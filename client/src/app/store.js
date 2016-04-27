import { createStore, combineReducers } from 'redux'

import productsReducer from './reducers/productsReducer'
import selectedProduct from './reducers/selectedProduct'

const store = createStore(combineReducers({
  productsReducer,
  selectedProduct,
}))

export default store
