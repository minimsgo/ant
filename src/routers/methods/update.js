import dataSource from '../../database'

async function update(req, res) {
  const id = req.params.id
  const model = res.locals.resource
  const body = req.body
  
  const results = await dataSource
    .model(model)
    .update(body, { where: { id } })

  res.json(results)
  res.end()
}

export default update
