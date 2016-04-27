import Sequelize from 'sequelize'

import dataSource from '../dataSource'
import uuid from '../miscs/uuid'

const Order = dataSource.define('order', {
  id: uuid,
  orderDate: {
    type: Sequelize.DATE,
    defaultValue: new Date(),
  },
})



export default Order