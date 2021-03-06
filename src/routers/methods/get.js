import dataSource from '../../database'


async function get(req, res) {
  const resource = res.locals.resource
  const condition = res.locals.condition

  const results = await dataSource
    .model(resource)
    .findAll(condition)
 
  res.json(results)
  res.end()
}

export default get
