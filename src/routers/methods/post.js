import dataSource from '../../database'

async function post(req, res) {
  const model = res.locals.resource
  const results = await dataSource
    .model(model)
    .create(req.body)

  res.json(results)
  res.end()
}

export default post
