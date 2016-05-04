import Sequelize from 'sequelize'

import dataSource from '../dataSource'
import uuid from '../miscs/uuid'

const Order = dataSource.define('order', {
  id: uuid,
  customer: {
    type: Sequelize.JSON, 
  },
  orderDate: {
    type: Sequelize.DATE,
    defaultValue: new Date(),
  },
  state: {
    type: Sequelize.STRING,
  },
  amount: {
    type: Sequelize.FLOAT, 
  },
  isPaid: {
    type: Sequelize.BOOLEAN,
  },
  items: {
    type: Sequelize.JSON,
  },
})



export default Order