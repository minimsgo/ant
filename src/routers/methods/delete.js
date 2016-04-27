import dataSource from '../../database'

async function del(req, res) {
  const id = req.params.id
  const model = res.locals.resource
  
  const results = await dataSource
    .model(model)
    .destroy({ where: { id } })

  res.json(results)
  res.end()
}

export default del
