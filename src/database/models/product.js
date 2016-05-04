import Sequelize from 'sequelize'

import dataSource from '../dataSource'
import uuid from '../miscs/uuid'

const Product = dataSource.define('product', {
  id: uuid,
  service: {
    type: Sequelize.STRING,
  },
  target: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.FLOAT,
  },
  flow: {
    type: Sequelize.JSON,
  },
})

export default Product
