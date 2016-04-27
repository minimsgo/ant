import express from 'express'

import singularize from './routers/singularize'
import get from './routers/methods/get'
import getById from './routers/methods/getById'
import post from './routers/methods/post'
import update from './routers/methods/update'
import del from './routers/methods/delete'

const router = express.Router()

router.all('/:resource*', singularize)

router
  .get('/:resource', get)
  .get('/:resource/:id', getById)
  .post('/:resource', post)
  .put('/:resource/:id', update)
  .patch('/:resource/:id', update)
  .delete('/:resource/:id', del)

export default router
