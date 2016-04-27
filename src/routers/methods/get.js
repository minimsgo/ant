import dataSource from '../../database'

async function get(req, res) {
  const model = res.locals.resource 
  const results = await dataSource
    .model(model)
    .findAll()

  res.json(results)
  res.end()
}

export default get
