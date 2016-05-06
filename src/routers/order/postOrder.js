import dataSource from '../../database'

async function postOrder(req, res) {
  const model = res.locals.resource
  const order = await dataSource
    .model(model)
    .create(req.body)
  const customer = await dataSource
    .model('customer')
    .create({
      name: req.body.customerName,
      tel: req.body.customerTel,
    })
  order.setCustomer(customer)

  req.body.orderProducts.map(async function(orderProduct) {
    const orderItem = await dataSource
      .model('order_item')
      .create({})
    const product = await dataSource
      .model('product')
      .findById(orderProduct)
    orderItem.setProduct(product)
    orderItem.setOrder(order)
  })
  res.json(order)
  res.end()
}

export default postOrder
