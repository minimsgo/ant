import dataSource from './dataSource'
import Product from './models/product'
import Order from './models/order'
import Customer from './models/customer'
import Service from './models/service'
import Work from './models/work'
import OrderItem from './models/orderItem'

Customer.hasMany(Order)
Order.belongsTo(Customer)

Order.hasMany(OrderItem)
OrderItem.belongsTo(Order)

Product.hasMany(OrderItem)
OrderItem.belongsTo(Product)

OrderItem.hasMany(Work)
Work.belongsTo(OrderItem)

Service.hasMany(Product)
Product.belongsTo(Service)

async function init() {
  await Customer.sync()
  await Order.sync()
  await Service.sync()
  await Product.sync()
  await OrderItem.sync()
  await Work.sync()
}

init()




export default dataSource
 
