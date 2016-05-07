import express from 'express'

import singularize from './routers/singularize'
import paginate from './routers/paginate'
import get from './routers/methods/get'
import getById from './routers/methods/getById'
import post from './routers/methods/post'
import update from './routers/methods/update'
import del from './routers/methods/delete'
import getProducts from './routers/product/getProducts'
import postOrder from './routers/order/postOrder'
import getOrders from './routers/order/getOrders'
import getOrderItems from './routers/orderItems/getOrderItems'

const router = express.Router()

router.all('/:resource*', singularize)
router.get('/:resource', paginate)

router.get('/products', getProducts)
router.post('/orders', postOrder)
router.get('/orders', getOrders)
router.get('/order_items', getOrderItems)

router
  .get('/:resource', get)
  .get('/:resource/:id', getById)
  .post('/:resource', post)
  .put('/:resource/:id', update)
  .patch('/:resource/:id', update)
  .delete('/:resource/:id', del)

export default router
