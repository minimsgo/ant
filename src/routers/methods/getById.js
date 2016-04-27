import dataSource from '../../database'

async function getById(req, res) {
  const resource = res.locals.resource;
  const id = req.params.id;
  const result = await dataSource.model(resource).findById(id);
  res.json(result);
  res.end();
}

export default getById