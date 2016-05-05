import Sequelize from 'sequelize'

import dataSource from '../dataSource'
import uuid from '../miscs/uuid'

const Order = dataSource.define('order', {
  id: uuid,
  amount: Sequelize.FLOAT,
  isPaid: Sequelize.BOOLEAN,
  orderDate: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
})

export default Order
