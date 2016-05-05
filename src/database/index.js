import dataSource from './dataSource'
import Product from './models/product'
import Order from './models/order'
import Customer from './models/customer'
import Service from './models/service'
import Work from './models/work'

Customer.hasMany(Order)
Order.belongsTo(Customer)

Order.hasMany(Work)
Work.belongsTo(Order)

Product.hasMany(Work)
Work.belongsTo(Product)

Service.hasMany(Product)
Product.belongsTo(Service)

async function init() {
  await Customer.sync()
  await Order.sync()
  await Service.sync()
  await Product.sync()
  await Work.sync()
}

init()


export default dataSource
 
