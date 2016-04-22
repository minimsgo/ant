import express from 'express'

import get from './methods/get'
import getById from './methods/getById'

const router = express.Router()

router
  .get('/:resource', get)
  .get('/:resource/:id', getById)

export default router;
