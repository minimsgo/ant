import dataSource from '../../database'

async function getOrderItems(req, res) {
  const resource = res.locals.resource
  const condition = res.locals.condition

  const orderItems = await dataSource
    .model(resource)
    .findAll(Object.assign(
      condition,
      {
        include: [
          {
            model: dataSource.model('product'),
            include: dataSource.model('service'),
          },
          {
            model: dataSource.model('order'),
            include: dataSource.model('customer'),
          },
        ],
      }
    ))

  const works = await dataSource
    .model('work')
    .findAll({
      where: {
        orderItemId: {
          $in: orderItems.map(item => item.id),
        },
      },
    })
  // const result = orderItems.map(orderItem =>
  //   Object.assign(orderItem, {
  //     works: works.filter(work =>
  //       work.orderItemId === orderItem.id),
  //     }
  //   )
  // )
  // TODO
  res.json({
    orderItems,
    works,
  })
  res.end()
}

export default getOrderItems
