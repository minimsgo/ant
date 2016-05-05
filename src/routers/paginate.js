import lodash from 'lodash'
import dataSource from '../database'

const defaultPage = 1;
const defaultPerPage = 10;

function genLinkHeader(url, page, limit, total) {
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

async function paginate(req, res, next) {
  const resource = res.locals.resource;
  const query = lodash.omit(req.query, 'page', 'per_page', 'q');

  const limit = (typeof req.query.per_page === 'string') ?
    parseInt(req.query.per_page) : defaultPerPage;

  const page = (typeof req.query.page === 'string') ?
    parseInt(req.query.page) : defaultPage;

  const q = (typeof req.query.q === 'string') ?
    JSON.parse(req.query.q) : null;
  
  const count = await dataSource
    .model(resource)
    .count({
      where: lodash.extend(query, q)
    })

  const condition = {
    where: lodash.extend(query, q),
    limit,
    offset: (page - 1) * limit,
  }
  res.locals.condition = condition 
  
  const url = `http://${req.headers.host}/api${req.path}`;
  const link = genLinkHeader(url, page, limit, count);
  if (link) {
    res.header('Link', link);
  }
  next();
}

export default paginate;
