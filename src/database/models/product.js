import Sequelize from 'sequelize'

import dataSource from '../dataSource'
import uuid from '../miscs/uuid'

const Product = dataSource.define('product', {
  id: uuid,
  type: Sequelize.STRING,
  price: Sequelize.FLOAT,
})

export default Product
