import dataSource from '../../database'

async function getOrders(req, res) {
  const resource = res.locals.resource
  const condition = res.locals.condition

  const orders = await dataSource
    .model(resource)
    .findAll(Object.assign(
      condition,
      {
        include: [
          dataSource.model('customer')
        ],
      }
    ))
  res.json(orders)
  res.end()
}

export default getOrders
