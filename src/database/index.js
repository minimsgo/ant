import dataSource from './dataSource'
import Product from './models/product'
import Order from './models/order'

Product.sync()
Order.sync()
export default dataSource
