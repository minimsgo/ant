import dataSource from '../../database'

async function getProducts(req, res) {
  const resource = res.locals.resource
  const condition = res.locals.condition

  const results = await dataSource
    .model(resource)
    .findAll(Object.assign(
      condition,
      {
        include: [
          dataSource.model('service')
        ],
      }
    ))
  res.json(results)
  res.end()
}

export default getProducts
