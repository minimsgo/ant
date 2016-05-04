import lodash from 'lodash'
import dataSource from '../../database'

const defaultPage = 1;
const defaultPerPage = 10;

function getLinkHeader(url, page, limit, total) {
  const last = (limit < total) ? Math.ceil(total / limit) : null;
  const next = (last && page < last) ? page + 1 : null;
  const prev = (page > 1) ? page - 1 : null;
  const first = (limit > total || page === 1) ? null : 1;

  const linkHeader =
    (first ? `<${url}?page=${first}&per_page=${limit}>;rel="first",` : '') +
    (prev ? `<${url}?page=${prev}&per_page=${limit}>;rel="prev",` : '') +
    (next ? `<${url}?page=${next}&per_page=${limit}>;rel="next",` : '') +
    (last ? `<${url}?page=${last}&per_page=${limit}>;rel="last",` : '');

  return linkHeader;
}

async function get(req, res) {
  const resource = res.locals.resource;
  const query = lodash.omit(req.query, "page", "per_page", "q");

  const limit = (typeof req.query.per_page === 'string') ?
    parseInt(req.query.per_page) : defaultPerPage;
  
  const page = (typeof req.query.page === 'string') ?
    parseInt(req.query.page) : defaultPage;

  console.log(req.query.q);
  const q = (typeof req.query.q === 'string') ?
    JSON.parse(req.query.q) : null;

  const results = await dataSource
    .model(resource)
    .findAndCountAll({
      where: lodash.extend(query, q),
      limit,
      offset: (page - 1) * limit,
    });
  
  const count = results.count;
  const url = `http://${req.headers.host}/api${req.path}`;
  const link = getLinkHeader(url, page, limit, count);
  link && res.header('Link', link); 
  res.header('X-Data-Count', count);
  res.json(results.rows);
  res.end()
}

export default get
