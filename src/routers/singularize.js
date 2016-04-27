import pluralize from 'pluralize';

function singularize(req, res, next) {
  const resource = req.params.resource
  res.locals.resource = (typeof resource === 'string') ?
    pluralize(resource, 1) : null;
  next();
}

export default singularize;
